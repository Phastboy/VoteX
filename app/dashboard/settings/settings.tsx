import Image from "next/image";
import { useState } from "react";

function ProfileSettings() {
    const [avatarFile, setAvatarFile] = useState(null);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatarFile(file);
    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Profile settings
                    </h2>
                    <form className="space-y-6" action="/api" method="POST">
                        <div className="flex flex-col mx-auto sm:mx-auto sm:w-full sm:max-w-sm">
                            <label htmlFor="avatar" className="mx-auto text-sm font-medium leading-6 text-gray-900">
                                Change avatar
                            </label>
                            <div className="mt-2">
                                <input
                                    id="avatar"
                                    name="avatar"
                                    type="file"
                                    accept="image/png, image/jpg, image/svg, image/jpeg, image/gif"
                                    className="hidden"
                                    onChange={handleAvatarChange}
                                />
                                {avatarFile && (
                                    <Image
                                        src={URL.createObjectURL(avatarFile)}
                                        alt="Avatar Preview"
                                        width={200}
                                        height={200}
                                    />
                                )}
                            </div>
                        </div>
                    <div>
                        <label 
                        htmlFor="email" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Change email address
                        </label>
                        <div className="mt-2">
                            <input id="email" 
                            name="email" type="email" 
                            placeholder="newexample@gmail.com"
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Change username
                            </label>
                        </div>
                        <div className="mt-2">
                            <input 
                            id="username" 
                            name="username" 
                            type="name" 
							placeholder="New username"
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit"
                        className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                           Update profile 
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

function SecuritySettings() {
    return (<div>
        <form>
            <div>
                <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-gray-900">Current password</label>
                <input id="current-password" name="current-password" type="password" autoComplete="current-password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <div>
                <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-900">New password</label>
                <input id="new-password" name="new-password" type="password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                <input id="confirm-password" name="confirm-password" type="password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <div className="">
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
    );
}

function AppearanceSettings() {
    return (<div>
        <form>
            <div>
                <label htmlFor="theme" className="block text-sm font-medium leading-6 text-gray-900">Theme</label>
                <select id="theme" name="theme" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                    <option>Light</option>
                    <option>Dark</option>
                </select>
            </div>
            <div className="">
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
    );
}

function DeactivateAccountSettings() {
    return (<div>
        <form>
            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <div className="">
                <button type="submit">Deactivate</button>
            </div>
        </form>
    </div>
    );
}

function SettingsPage() {
    const [selectedSetting, setSelectedSetting] = useState("Profile");

    return (
        <div className="flex h-screen">
            <div className="w-1/4 bg-gray-100 p-4">
                <h6 onClick={() => setSelectedSetting("Profile")} className="cursor-pointer font-semibold text-sm">
                    Profile
                </h6>
                <h6 onClick={() => setSelectedSetting("Appearence")} className="cursor-pointer font-semibold text-sm">
                    Appearance
                </h6>
                <h6 onClick={() => setSelectedSetting("Security")} className="cursor-pointer font-semibold text-sm">
                    Security
                </h6>
                <h6 onClick={() => setSelectedSetting("Deactivate")} className="cursor-pointer font-semibold text-sm">
                    Deactivate
                </h6>
            </div>
            <div className="w-3/4 p-4">
                {selectedSetting === "Profile" && <ProfileSettings />}
                {selectedSetting === "Security" && <SecuritySettings />}
            </div>
        </div>
    );
}

export { ProfileSettings, AppearanceSettings, SecuritySettings, DeactivateAccountSettings, SettingsPage}
