"use client"
import React, { useEffect } from 'react'
import { DataTable } from './blocking-settings-data-table';
import { columns } from "./blocking-settings-columns"
import Footer from '@/components/Footer';
import { useData } from '@/context/DataContext';
import { Loader2 } from 'lucide-react';


const Settings = () => {
    const { fetchSettingsData, settingsData, loading, error } = useData();

    useEffect(() => {
        fetchSettingsData();
    }, []);

    if (loading) {
        return <div className='flex h-screen items-center justify-center'>
            <Loader2 className='w-12 h-12 animate-spin text-primary' />
        </div>;
    }
    if (error) return <p>Error: {error}</p>;

    const data = settingsData?.banSettings?.map(click => {

        const proxyBlocking: string[] = [];

        if (click.ban_settings) {
            const { is_vpn, isProxy, isSpam, isSuspicious, isTorNode } = click.ban_settings;

            if (is_vpn) proxyBlocking.push("is_vpn");
            if (isProxy) proxyBlocking.push("isProxy");
            if (isSpam) proxyBlocking.push("isSpam");
            if (isSuspicious) proxyBlocking.push("isSuspicious");
            if (isTorNode) proxyBlocking.push("isTorNode");
        }
        return {
            googleAdsID: click.google_id || "N/A",
            googleAdsAccount: click.name || "N/A",
            proxyBlocking: proxyBlocking.length ? proxyBlocking : [],
            thresholdRule: click.threshold?.account_id?.toString() || "N/A",
            unBlockingAfter: click.threshold?.unblock_days?.toString() || "N/A",
            accountId: click?.ban_settings?.account_id?.toString() || "N/A",
        };
    });


    // console.log(data)
    console.log(settingsData)

    return (
        <div className='p-4'>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data || []} />
            </div>
            <Footer />
        </div>
    )
}

export default Settings