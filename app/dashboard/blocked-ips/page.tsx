"use client"
import React, { useEffect } from 'react'
import { DataTable } from './blocked-ips-data-table';
import { columns } from "./blocked-ips-columns"
import Footer from '@/components/Footer';
import { useData } from '@/context/DataContext';
import { Loader2 } from 'lucide-react';


const BlockedIps = () => {
    const { fetchBlockedIpData, blockedIpData, loading, error } = useData();

    useEffect(() => {
        fetchBlockedIpData();
    }, []);

    if (loading) {
        return <div className='flex h-screen items-center justify-center'>
            <Loader2 className='w-12 h-12 animate-spin text-primary' />
        </div>;
    }
    if (error) return <p>Error: {error}</p>;

    const data = blockedIpData?.block_ip.map(click => ({
        blockedOn: click.created_at.toString(),
        blockReason: "N/A",
        ip: click.ip_address.ip,
        googleAdsAccount: click.account.email || "N/A",
        campaign: click.campaign_id?.toString() || "N/A",
        blockCount: click.count_block,
    }));

    // console.log(blockedIpData)
    return (
        <div className='p-4'>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data || []} />
            </div>
            <Footer />
        </div>
    )
}

export default BlockedIps