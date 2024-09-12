"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { IconMail, IconPhoneCall, IconPlanet } from '@tabler/icons-react'
import Footer from '@/components/Footer'
import { useAuth } from '@/context/AuthContext'
import ChangePasswordCard from '@/components/ChangePasswordCard'
import ChangePresonalCard from '@/components/ChangePresonalCard'



const Profile = () => {


    const { user } = useAuth()
    return (
        <div className='p-4'>
            <Card>
                <Tabs defaultValue="profile" >
                    <CardHeader>
                        <CardTitle>

                            <TabsList className="flex w-full gap-4 items-center justify-start">
                                <TabsTrigger value="profile">Profile</TabsTrigger>
                                <TabsTrigger value="personal">Presonal</TabsTrigger>
                                <TabsTrigger value="changePassword">Change Password</TabsTrigger>
                            </TabsList>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>

                        <TabsContent value="profile">
                            <div className='flex flex-col md:flex-row gap-4'>

                                <Card className='w-full md:w-[30%]'>
                                    <CardContent>
                                        <div className='my-4 flex flex-col gap-5 items-center justify-center'>
                                            <Image className='rounded-full bg-neutral-700' src={"/assets/imgs/profile-img.png"} width={70} height={70} alt="Logo" />
                                            <h2>{user?.name}</h2>
                                        </div>
                                        <Separator />
                                        <div className='flex flex-col gap-5'>
                                            <p className='flex gap-2 mt-4'><IconMail /> <span>{user?.email}</span></p>
                                            <p className='flex gap-2 mt-4'><IconPhoneCall /> <span>{user?.phone}</span></p>
                                            <p className='flex gap-2 mt-4'><IconPlanet /> <span>{user?.address ? user?.address : "Not Provided"}</span></p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className='w-full md:w-[70%]'>
                                    <CardContent>
                                        <div>
                                            <h2 className='text-xl p-2 mt-4'>Personal Details</h2>
                                            <Separator />
                                            <div className='flex flex-col gap-5'>

                                                <p className='flex flex-col gap-2 mt-2'><span>Name :</span> <span>{user?.name}</span></p>
                                                <Separator />
                                                <p className='flex flex-col gap-2 '><span>Gender :</span> <span>{user?.gender ? user?.gender : "Not Provided"}</span></p>
                                                <Separator />

                                                <p className='flex flex-col gap-2 '><span>Phone :</span> <span>{user?.phone}</span></p>
                                                <Separator />

                                                <p className='flex flex-col gap-2 '><span>Address :</span>
                                                    <span>{user?.address ? user?.address : "Not Provided"}</span></p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div >
                        </TabsContent>
                        <TabsContent value="personal">
                            <ChangePresonalCard />
                        </TabsContent>
                        <TabsContent value="changePassword">
                            <ChangePasswordCard />
                        </TabsContent>
                    </CardContent>
                </Tabs>
            </Card>
            <Footer />
        </div>
    )
}

export default Profile