// import React, { useState } from 'react';
// import { Nav } from '../nav';
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Selection } from './selection';
// import { ElectionSetting } from './index';
// import { DatePickerWithPresets } from "../../dashboard/date";

// export function GeneralElectionSettings() {
//     return (
//         <div className="bg-white p-6 rounded shadow">
//             <form className='space-y-4'>
//                 <div>
//                     <Label>
//                         Title
//                     </Label>
//                     <Input/>
//                 </div>
//                 <div>
//                     <Label>
//                         Description
//                     </Label>
//                     <Textarea/>
//                 </div>
//                 <div>
//                     <Button type="submit" variant="continue">Save</Button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export function ElectionDatesSettings() {
//     return (
//         <div className="bg-white p-6 rounded shadow">
//             <form className='space-y-4'>
//                 <div className="space-x-4">
//                     <Label htmlFor="start">
//                         Starting
//                     </Label>
//                     <DatePickerWithPresets/>
//                 </div>
//                 <div className="space-x-4">
//                     <Label htmlFor="stop">
//                         Ending
//                     </Label>
//                     <DatePickerWithPresets/>
//                 </div>
//                 <div>
//                     <Button type="submit" variant="continue">Save</Button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export function ElectionVotersSettings() {
//     return (
//         <div className="bg-white p-6 rounded shadow">
//             <form className='space-y-4'>
//                 <div>
//                     <Label>
//                         Minimum number of vote
//                     </Label>
//                     <Input/>
//                 </div>
//                 <div>
//                     <Label>
//                         Maximum number of vote
//                     </Label>
//                     <Input/>
//                 </div>
//                 <div>
//                     <Button type="submit" variant="continue">Save</Button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export function ElectionMessagesSettings() {
//     return (
//         <div className="bg-white p-6 rounded shadow">
//             <form className='space-y-4'>
//                 <div>
//                     <Label>
//                         Login instruction
//                     </Label>
//                     <Textarea/>
//                 </div>
//                 <div>
//                     <Label>
//                         Confirmation message
//                     </Label>
//                     <Textarea/>
//                 </div>
//                 <div>
//                     <Button type="submit" variant="continue">Save</Button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export function ElectionEmailSettings() {
//     return (
//         <div className="bg-white p-6 rounded shadow">
//             <form className='space-y-4'>
//                 <div>
//                     <Label>Confirm they are part of the allowed voter</Label>
//                     <Input type="checkbox" />
//                 </div>
//                 <div>
//                     <Label>Free login</Label>
//                     <Input type="checkbox" />
//                 </div>
//                 <div>
//                     <Button type="submit" variant="continue">Save</Button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export function ElectionResultSettings() {
//     return (
//         <div className="bg-white p-6 rounded shadow">
//             <form className='space-y-4'>
//                 <div>
//                     <Label>Hide result throughout the election</Label>
//                     <Input type="checkbox" />
//                 </div>
//                 <div>
//                     <Label>Realtime update</Label>
//                     <Input type="checkbox" />
//                 </div>
//                 <div>
//                     <Label>Download report</Label>
//                     <Input type="checkbox" />
//                 </div>
//                 <div>
//                     <Button type="submit" variant="continue">Save</Button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export function ElectionDuplicationSettings() {
//     return (
//         <>
//             <p>This will help you to use this election as template for another electiion</p>
//             <Button>Duplicate</Button>
//         </>
//     );
// }
// export default function ElectionSettings() {
//     const [selectedSetting, setSelectedSetting] = useState(ElectionSetting.General);

//     const renderSelectedSetting = () => {
//         switch (selectedSetting) {
//             case ElectionSetting.Dates:
//                 return <ElectionDatesSettings />;
//             case ElectionSetting.Voters:
//                 return <ElectionVotersSettings />;
//             case ElectionSetting.Messages:
//                 return <ElectionMessagesSettings />;
//             case ElectionSetting.Email:
//                 return <ElectionEmailSettings />;
//             case ElectionSetting.Result:
//                 return <ElectionResultSettings />;
//             case ElectionSetting.Duplicate:
//                 return <ElectionDuplicationSettings />;
//             default:
//                 return <GeneralElectionSettings />;
//         }
//     };

//     return (
//         <>
//         <div className='flex h-screen'>
//             <div className='w-1/4'>
//                 <Nav />
//             </div>
//             <div className='w-3/4'>
//                 <div className="p-4 md:py-8 md:px-10 lg:px-16 xl:px-20 space-y-6">
//                     <div className="flex justify-center items-center">
//                         <Selection
//                             selectedSetting={selectedSetting}
//                             setSelectedSetting={setSelectedSetting}
//                         />
//                     </div>
//                     <div className="text-center">
//                         <h1 className="text-2xl font-semibold">{`The ${selectedSetting} Setting`}</h1>
//                     </div>
//                     <div>{renderSelectedSetting()}</div>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';

export default function ElectionSettings() {
  const accessToken = localStorage.getItem('accessToken');
  const electionId = localStorage.getItem('electionId');

  const [electionSettings, setElectionSettings] = useState(null);

  const fetchSettings = async () => {
    try {
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-type': 'application/json'
      };

      const response = await fetch(`https://votex-backend.eastasia.cloudapp.azure.com/elections/${electionId}/settings`, {
        method: 'GET',
        headers: headers
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Settings fetched successfully');
        setElectionSettings(data.data);
      } else {
        alert('Error fetching settings');
        console.log('Error fetching settings');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, [electionId]);

  return (
    <div>
      <h1>Election Settings</h1>
      {electionSettings ? (
        <div>
          {electionSettings.map((settings) => (
            <div key={settings.id} className='bg-white border border-gray-200 rounded-lg p-10 m-10'>
              <Label>{settings.title}</Label>
              {settings.setting_type === 'BOOLEAN' ? (
              <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <Input type="checkbox" value="" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
              ) : (
                <p>{settings.value}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading settings...</p>
      )}
    </div>
  );
}
