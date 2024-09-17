import React from 'react'
import { ModeToggle } from './ui/mode-toggle'
import NotificationDropdown from './NotificationDropdown'
import AnnouncementButton from './AnnouncementButton'
import LanguageToggle from './LanguageToggle'
import { SheetMenu } from './admin-panal/sheet-menu'

const Header = () => {
    return (
        <div className=' border-b border-neutral-200 dark:border-gray-700 z-10 w-full px-4 py-1 flex gap-5 justify-end items-center top-0 left-0 '>
            <div className='flex justify-start w-full'>
                <SheetMenu />
            </div>

            <ModeToggle />
            <NotificationDropdown />
            <AnnouncementButton />
            <LanguageToggle />
        </div>
    )
}

export default Header