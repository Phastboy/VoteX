import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ProfileSettings() {
    const [avatarFile, setAvatarFile] = useState(null);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatarFile(file);
    };

    useEffect(() => {
        return () => {
            if (avatarFile) {
                URL.revokeObjectURL(avatarFile);
            }
        };
    }, [avatarFile]);

    return (
        <>
            <div className="flex flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Profile settings
                    </h2>
                    <form className="space-y-6" action="/api" method="POST">
                        <div className="flex flex-col mx-auto sm:mx-auto sm:w-full sm:max-w-sm">
                            <Label htmlFor="avatar" className="mx-auto text-sm font-medium leading-6 text-gray-900">
                                Change avatar
                            </Label>
                            <div className="mt-2">
                                {avatarFile && (
                                    <Image
                                        src={URL.createObjectURL(avatarFile)}
                                        alt="Avatar Preview"
                                        width={100}
                                        height={100}
                                        className="rounded-full mx-auto"
                                    />
                                )}
                                <Input
                                    id="avatar"
                                    name="avatar"
                                    type="file"
                                    accept="image/png, image/jpg, image/svg, image/jpeg, image/gif"
                                    className="hidden"
                                    onChange={handleAvatarChange}
                                />
                            </div>
                        </div>
                    <div>
                        <Label 
                        htmlFor="email" 
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Change email address
                        </Label>
                        <div className="mt-2">
                            <Input id="email" 
                            name="email" type="email" 
                            placeholder="newexample@gmail.com"
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Change username
                            </Label>
                        </div>
                        <div className="mt-2">
                            <Input 
                            id="username" 
                            name="username" 
                            type="name" 
							placeholder="New username"
                            className="block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className="">
                        <Button type="submit"
                            variant="continue">
                            Update profile 
                        </Button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

function SecuritySettings() {
    return (<div className="flex flex-col justify-center px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Security settings
        </h2>
        <form className="space-y-4">
            <div>
                <Label htmlFor="current-password" className="block text-sm font-medium leading-6 text-gray-900">Current password</Label>
                <Input id="current-password" name="current-password" type="password" autoComplete="current-password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <div>
                <Label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-900">New password</Label>
                <Input id="new-password" name="new-password" type="password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <div>
                <Label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">Confirm password</Label>
                <Input id="confirm-password" name="confirm-password" type="password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <div className="my-5">
                <Button type="submit" variant="continue">Save</Button>
            </div>
        </form>
    </div>
    );
}

function AppearanceSettings() {
    return (<div className="flex flex-col justify-center px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Appearance settings
        </h2>
        <form>
            <div>
                <Label htmlFor="theme" className="block text-sm font-medium leading-6 text-gray-900">Theme</Label>
                <select id="theme" name="theme" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
                    <option>Light</option>
                    <option>Dark</option>
                </select>
            </div>
            <div className="my-5">
                <Button type="submit" variant="continue">Save</Button>
            </div>
        </form>
    </div>
    );
}

function DeactivateAccountSettings() {
    return (<div className="flex flex-col justify-center px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Deactivate settings
        </h2>
        <form>
            <div>
                <Label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</Label>
                <Input id="password" name="password" type="password" autoComplete="current-password" className="mt-1 block w-full rounded-md border-0 ps-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"/>
            </div>
            <p className="text-sm">Enter your password to deactivate your account</p>
            <div className="my-5">
                <Button type="submit" variant="continue">Deactivate</Button>
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
                <h6 onClick={() => setSelectedSetting("Appearance")} className="cursor-pointer font-semibold text-sm">
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
                {selectedSetting === "Appearance" && <AppearanceSettings />}
                {selectedSetting === "Security" && <SecuritySettings />}
                {selectedSetting === "Deactivate" && <DeactivateAccountSettings />}
                
            </div>
        </div>
    );
}

export {SettingsPage}
