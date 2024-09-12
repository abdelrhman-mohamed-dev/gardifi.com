"use client";
import React, { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { IconWriting } from '@tabler/icons-react';

const announcements = [
    {
        title: 'System Maintenance',
        content: 'We will be performing scheduled maintenance on our servers on September 12th, 2024 from 12:00 AM to 4:00 AM UTC. During this time, some services may be unavailable.',
        date: 'Sept 9, 2024',
    },
    {
        title: 'New Feature Release: Dark Mode',
        content: 'We are excited to announce that Dark Mode is now available! Switch to Dark Mode from the settings menu for a better low-light experience.',
        date: 'Sept 7, 2024',
    },
    {
        title: 'Holiday Notice',
        content: 'Our offices will be closed on September 15th, 2024 for a public holiday. Regular support services will resume the next day.',
        date: 'Sept 5, 2024',
    },
];

const AnnouncementButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="relative" variant="outline" size="icon">
                    <IconWriting className="h-5 w-5 dark:text-white text-black" />
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className=" text-black dark:text-white text-left">
                <h2 className="text-xl mb-4">Latest Announcements</h2>
                <ul>
                    {announcements.map((announcement, index) => (
                        <li key={index} className="mb-4 border-b border-neutral-600 pb-4">
                            <h3 className="text-lg font-semibold">{announcement.title}</h3>
                            <p>{announcement.content}</p>
                            <small className="text-neutral-500">{announcement.date}</small>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    );
};

export default AnnouncementButton;
