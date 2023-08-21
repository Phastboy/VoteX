import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ElectionSetting {
  id: string;
  title: string;
  setting_type: string;
  value: string;
  category: string;
  description: string;
}

interface SelectionProps {
  selectedSetting: string;
  setSelectedSetting: (settingId: string) => void;
}

function Selection({ selectedSetting, setSelectedSetting }: SelectionProps) {
  const accessToken = localStorage.getItem('accessToken');
  const electionId = localStorage.getItem('electionId');

  const [electionSettings, setElectionSettings] = useState<ElectionSetting[]>([]);

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
    <select
      value={selectedSetting}
      onChange={(e) => setSelectedSetting(e.target.value)}
      className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
    >
      <option value="">Select an option</option>
      {electionSettings.map((setting) => (
        <option key={setting.id} value={setting.id} className="py-1">
          {setting.title}
        </option>
      ))}
    </select>
  );
}

export default function ElectionSettings() {
  const accessToken = localStorage.getItem('accessToken');
  const electionId = localStorage.getItem('electionId');

  const [electionSettings, setElectionSettings] = useState<ElectionSetting[]>([]);
  const [selectedSetting, setSelectedSetting] = useState<string>("");
  const [selectedSettingData, setSelectedSettingData] = useState<ElectionSetting | null>(null);

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


  useEffect(() => {
    const setting = electionSettings.find((s) => s.id === selectedSetting);
    setSelectedSettingData(setting || null);
  }, [selectedSetting, electionSettings]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSettingData) {
      alert('Please select a setting.');
      return;
    }

    try {
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-type': 'application/json'
      };

      const response = await fetch(`https://votex-backend.eastasia.cloudapp.azure.com/elections/${electionId}/settings`, {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(selectedSettingData),
      });

      if (response.ok) {
        alert('Setting updated successfully');
      } else {
        alert('Setting update failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, checked, value } = event.target;

    let updatedValue: string | boolean = type === 'checkbox' ? checked : event.target.value;

    setSelectedSettingData((prevFormData) => ({
        ...prevFormData,
        [name]: updatedValue,
    }));
  };

  

  return (
    <div className="container mx-auto px-4 py-8">
      <Selection
        selectedSetting={selectedSetting}
        setSelectedSetting={setSelectedSetting}
      />
      {selectedSettingData ? (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 md:flex md:space-x-4 bg-gray-100 p-4 my-10 rounded-md shadow-md">
          <div key={selectedSettingData.id} className='bg-white border border-gray-200 rounded-md p-4 my-4'>
            <Label className="font-semibold mb-2">{selectedSettingData.title}</Label>
            {selectedSettingData.setting_type === 'BOOLEAN' ? (
              <>
                <div>
                  <label className="inline-flex items-center space-x-2 mb-2">
                    <input
                        type="checkbox"
                        name="value"
                        className="form-checkbox text-green-500 border-gray-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        checked={selectedSettingData.value === 'true'}
                        onChange={handleChange}
                    />
                    <span className="text-sm">Enable</span>
                  </label>
                </div>
                <div className='my-4'>
                  <Label className="inline-flex items-center space-x-2 m-2">Description</Label>
                  <Input
                    type="text"
                      name="description"
                      value={selectedSettingData.description}
                      onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <p className="text-gray-700">{selectedSettingData.value}</p>
            )}
            <Button type="submit" variant="continue">Save</Button>
          </div>
        </form>
      ) : (
        <p className="text-gray-600">Select a setting to view its details.</p>
      )}
    </div>
  );
}
