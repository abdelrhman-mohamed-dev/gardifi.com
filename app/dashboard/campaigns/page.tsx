"use client";
import { BarChartCard } from '@/components/charts/BarChartCard'
import { IconBan, IconCheck, IconMouse, IconUsers } from "@tabler/icons-react"; // Import necessary icons
import React, { useEffect } from 'react'
import { DataTable } from './campaigns-data-table';
import { columns } from "./campaigns-columns"
import Footer from '@/components/Footer';
import { useData } from '@/context/DataContext';
import { Loader2 } from 'lucide-react';

const Campaign = () => {
    const { fetchCampaignData, campaignData, loading, error } = useData();

    useEffect(() => {
        fetchCampaignData();
    }, [])

    if (loading) {
        return <div className='flex h-screen items-center justify-center'>
            <Loader2 className='w-12 h-12 animate-spin ' />
        </div>;
    }
    if (error) return <p>Error: {error}</p>;

    // console.log(campaignData)

    const data = campaignData?.campaign.map(campaign => ({
        campaign: campaign.uuid || "N/A",
        googleAdsAccount: campaign.account.email?.toString() || "N/A",
        adClicks: campaign.click,
        blockedIp: campaign.block_ip.toString(),
        savedBudget: "200"
    }));

    return (
        <div className='p-4'>
            <div className="flex flex-col md:flex-row gap-1.5">
                <BarChartCard title="Blocked clicks" earnings={campaignData?.blocked_clicks || 0} chartColor="4" icon={<IconBan />} />
                <BarChartCard title="Successful clicks" earnings={campaignData?.successful_clicks || 0} chartColor="3" icon={<IconCheck />} />
                <BarChartCard title="Total Clicks" earnings={campaignData?.total_clicks || 0} chartColor="2" icon={<IconMouse />} />
                <BarChartCard title="Total Campaigns" earnings={campaignData?.count_campaign || 0} chartColor="5" icon={<IconUsers />} />
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data || []} />
            </div>
            <Footer />
        </div>
    )
}

export default Campaign