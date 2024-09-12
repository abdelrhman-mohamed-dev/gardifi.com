"use client"
import { BarChartCard } from '@/components/charts/BarChartCard'
import { IconBan, IconCheck, IconMouse, IconUsers } from "@tabler/icons-react"; // Import necessary icons
import React, { useEffect } from 'react'
import { DataTable } from './accounts-data-table';
import { columns } from "./accounts-columns"
import Footer from '@/components/Footer';
import { useData } from '@/context/DataContext';
import { Loader2 } from 'lucide-react';

const Accounts = () => {
    const { fetchAccountData, accountData, loading, error } = useData();
    useEffect(() => {
        // Fetch the account data when this page is visited
        fetchAccountData();
    }, []);

    const data = accountData?.account.map(account => ({
        id: account.id.toString(),
        userId: account.user_id.toString(),
        googleAdsID: account.google_id || "N/A",
        googleAdsAccount: account.email,
        status: account.is_verified ? "Linked" : "Removed",
        adClicks: account.click,
        blockedIp: account.block_ip.toString(),
        savedBudget: "200" // Replace with actual data if available
    }));

    if (loading) {
        return <div className='flex h-screen items-center justify-center'>
            <Loader2 className='w-12 h-12 animate-spin ' />
        </div>;
    }
    if (error) return <p>Error: {error}</p>;

    console.log(accountData)
    return (
        <div className='p-4'>
            <div className="flex flex-col md:flex-row gap-1.5">
                <BarChartCard title="Blocked clicks" earnings={accountData?.blocked_clicks || 0} chartColor="4" icon={<IconBan />} />
                <BarChartCard title="Successful clicks" earnings={accountData?.successful_clicks || 0} chartColor="3" icon={<IconCheck />} />
                <BarChartCard title="Total Clicks" earnings={accountData?.total_clicks || 0} chartColor="2" icon={<IconMouse />} />
                <BarChartCard title="Total Accounts" earnings={accountData?.account_count || 0} chartColor="5" icon={<IconUsers />} />
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data || []} />
            </div>
            <Footer />
        </div>
    )
}

export default Accounts