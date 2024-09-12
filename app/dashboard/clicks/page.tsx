"use client"
import { BarChartCard } from '@/components/charts/BarChartCard'
import { IconBan, IconCheck, IconMouse } from "@tabler/icons-react"; // Import necessary icons
import React, { useEffect } from 'react'
import { DataTable } from './clicks-data-table';
import { columns } from "./clicks-columns"
import Footer from '@/components/Footer';
import { useData } from '@/context/DataContext';
import { Loader2 } from 'lucide-react';


const Clicks = () => {

    const { fetchClicksData, clicksData, loading, error } = useData();

    useEffect(() => {
        fetchClicksData();
    }, []);

    if (loading) {
        return <div className='flex h-screen items-center justify-center'>
            <Loader2 className='w-12 h-12 animate-spin text-primary' />
        </div>;
    }
    if (error) return <p>Error: {error}</p>;

    const data = clicksData?.click.map(click => ({
        clickedOn: click.created_at.toString(),
        status: click.status,
        device: click.deviceType,
        ip: click.ip_address.ip,
        os: click.operatingSystem,
        deviceModel: click.deviceModel,
        GCLID: click.click_id,
        googleAdsAccount: click.account.email || "N/A",
        campaign: click.campaign.uuid || "N/A",
        network: click.network,
        keyword: click.keyword,
    }));


    // console.log(clicksData)
    return (
        <div className='p-4'>
            <div className="flex flex-col md:flex-row gap-1.5">
                <BarChartCard title="Blocked clicks" earnings={clicksData?.blocked_clicks || 0} chartColor="4" icon={<IconBan />} />
                <BarChartCard title="Successful clicks" earnings={clicksData?.successful_clicks || 0} chartColor="3" icon={<IconCheck />} />
                <BarChartCard title="Total Clicks" earnings={clicksData?.total_clicks || 0} chartColor="2" icon={<IconMouse />} />
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data || []} />
            </div>
            <Footer />
        </div>
    )
}

export default Clicks