import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconBell } from '@tabler/icons-react';
import { Button } from './ui/button';
import Link from 'next/link';

const notifications = [
    { message: 'You have a new message from John Doe.', time: '2 hours ago' },
    { message: 'Your password will expire in 3 days.', time: '1 day ago' },
    { message: 'Your password will expire in 3 days.', time: '1 day ago' },
    { message: 'Reminder: Meeting with Marketing Team at 3:00 PM.', time: '1 day ago' },
];

const NotificationDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-md">
                <Button className="relative" variant="outline" size="icon">
                    <IconBell className="text-black dark:text-white h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='max-sm:w-[87%]' align="start">
                <div className='p-2'>
                    <div className='flex items-center justify-between p-4'>

                        <Link href="/" className='text-sm text-orange-600 hover:underline'>Mark all Read</Link>
                        <h2>Notifications</h2>
                    </div>
                    <div className='flex flex-col gap-5'>
                        {notifications.map((notification, index) => (
                            <DropdownMenuItem key={index} className="flex justify-between items-center p-4 border w-full ">
                                <span className='text-sm text-wrap '>{notification.message}</span>
                                <small className="text-neutral-500">{notification.time}</small>
                            </DropdownMenuItem>
                        ))}
                    </div>
                    <div className='mt-8 flex items-start justify-center'>
                        <Button className="text-orange-700" variant="link">View all</Button>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default NotificationDropdown;
