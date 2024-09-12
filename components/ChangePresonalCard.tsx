"use client"
import React, { useRef, useState } from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import { Separator } from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useAuth } from '@/context/AuthContext'
import { IconUpload } from '@tabler/icons-react'

const ChangePresonalCard = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [newEmail, setNewEmail] = useState<string>('');
    const [newPhone, setNewPhone] = useState<string>('');
    const [newAddress, setNewAddress] = useState<string>('');
    const [newName, setNewName] = useState<string>('');

    const handleChangeUserData = () => {
        if (!newEmail) setNewEmail(user?.email || '');
        if (!newPhone) setNewPhone(user?.phone || '');
        if (!newAddress) setNewAddress(user?.address || '');
        if (!newName) setNewName(user?.name || '');
        updateProfile(newName, newPhone, newAddress, newEmail)
    }

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const newImageSrc = URL.createObjectURL(file);
            setImageSrc(newImageSrc);
        }
    };
    const { user, updateProfile } = useAuth()
    return (
        <div className='flex flex-col md:flex-row gap-4'>

            <Card className='w-full md:w-[30%]'>
                <CardContent>
                    <h2 className='text-xl text-left my-4'>Personal Details</h2>
                    <Separator />
                    <div className='my-4 flex flex-col gap-5 items-center justify-center relative'>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="absolute inset-0 opacity-0 cursor-pointer rounded-full"
                            onChange={handleFileChange} // Handle file change
                        />
                        <label
                            className="relative cursor-pointer"
                            onClick={handleImageClick}
                        >
                            <Image
                                className='object-cover w-[70px] h-[70px] rounded-full bg-neutral-700'
                                src={imageSrc || "/assets/imgs/profile-img.png"}
                                width={70}
                                height={70}
                                alt="Profile Image"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 rounded-full transition-opacity">
                                <div className="text-center flex flex-col items-center justify-center text-white">
                                    <IconUpload size={24} />
                                    <p className="mt-2">Upload</p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder={"Name"} onChange={(e) => setNewName(e.target.value)} defaultValue={user?.name} />
                        <Label htmlFor="address">Adress</Label>
                        <Input id="address" placeholder="Address" onChange={(e) => setNewAddress(e.target.value)} defaultValue={user?.address} />
                    </div>
                </CardContent>
            </Card>
            <Card className='w-full md:w-[70%]'>
                <CardContent>
                    <div>
                        <h2 className='text-xl my-4'>Contact Information</h2>
                        <Separator />
                        <div className='flex flex-col gap-5 mt-4'>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="Enter Phone Number" onChange={(e) => setNewPhone(e.target.value)} defaultValue={user?.phone} />
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="Enter Email Address" onChange={(e) => setNewEmail(e.target.value)} defaultValue={user?.email} />
                        </div>
                    </div>

                </CardContent>
                <CardFooter>
                    <div>
                        <Button variant={"default"} onClick={handleChangeUserData} className=" mt-4">Save Changes</Button>
                    </div>
                </CardFooter>
            </Card>
        </div >
    )
}

export default ChangePresonalCard