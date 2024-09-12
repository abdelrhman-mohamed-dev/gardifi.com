/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
    IconBrandTabler,
    IconUserBolt,
    IconMouse,
    IconBan,
    IconListCheck,
    IconSettings,
    IconPhoneSpark,
    IconLogout
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
    const { logout, user } = useAuth()
    const links = [
        {
            label: "لوحه التحكم",
            href: "/dashboard",
            icon: (
                <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "الحسابات",
            href: "/dashboard/accounts",
            icon: (
                <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "الحملات",
            href: "/dashboard/campaigns",
            icon: (
                <IconPhoneSpark className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "النقرات",
            href: "/dashboard/clicks",
            icon: (
                <IconMouse className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "عنوان ال (IP) المحظور",
            href: "/dashboard/blocked-ips",
            icon: (
                <IconBan className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "قائمه ال (IP) المسموحه",
            href: "/dashboard/allowed-ips",
            icon: (
                <IconListCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "اعدادات الحظر",
            href: "/dashboard/blocking-settings",
            icon: (
                <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "تسجيل الخروج",
            href: "/logout",
            onclick: () => logout(),
            icon: (
                <IconLogout
                    className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"
                    strokeWidth={2}
                />
            ),
        },

    ];
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-neutral-100 dark:bg-slate-900 w-full flex-1  mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
            )}
        >
            <Sidebar open={open} setOpen={setOpen}>
                <SidebarBody className="justify-between gap-10">
                    <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                        {open ? <Logo setOpen={setOpen} /> : <LogoIcon />}
                        <div onClick={() => setOpen(false)} className="mt-8 flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink key={idx} link={link} onClick={link.onclick} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <SidebarLink
                            onClick={() => setOpen(false)}
                            link={{
                                label: `${user?.name}`,
                                href: "/dashboard/profile",
                                icon: (
                                    <Image
                                        src="https://github.com/shadcn.png"
                                        className="h-7 w-7 flex-shrink-0 rounded-full"
                                        width={50}
                                        height={50}
                                        alt="Avatar"
                                    />
                                ),
                            }}
                        />
                    </div>
                </SidebarBody>
            </Sidebar>
            {children}
            {/* <Dashboard /> */}
        </div>
    );
}
export const Logo = ({ setOpen }: { setOpen: any }) => {
    return (
        <Link
            onClick={() => setOpen(false)}
            href="/dashboard"
            className="font-normal flex gap-5 space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
            <Image className="hidden dark:block" src="/assets/imgs/dark-logo.png" width={50} height={50} alt="Logo" />
            <Image className="dark:hidden" src="/assets/imgs/white-logo.png" width={50} height={50} alt="Logo" />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-2xl mr-2 text-black dark:text-white whitespace-pre"
            >
                Gardify
            </motion.span>
        </Link>
    );
};
export const LogoIcon = () => {
    return (
        <Link
            href="/dashboard"
            className="font-normal flex space-x-2 items-center text-md text-black py-1 relative z-20"
        >
            <Image className="hidden dark:block" src="/assets/imgs/dark-logo.png" width={80} height={80} alt="Logo" />
            <Image className="dark:hidden" src="/assets/imgs/white-logo.png" width={80} height={80} alt="Logo" />

            {/* <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" /> */}
        </Link>
    );
};

