"use client"
import React, { useEffect } from 'react'
import { DataTable } from './allowed-ips-data-table';
import { columns } from "./allowed-ips-columns"
import Footer from '@/components/Footer';
import { useData } from '@/context/DataContext';
import { Loader2 } from 'lucide-react';


const AllowedIps = () => {
    const { fetchAllowedIpData, allowedIpData, loading, error } = useData();

    useEffect(() => {
        fetchAllowedIpData();
    }, []);

    if (loading) {
        return <div className='flex h-screen items-center justify-center'>
            <Loader2 className='w-12 h-12 animate-spin text-primary' />
        </div>;
    }
    if (error) return <p>Error: {error}</p>;

    const data = allowedIpData?.list.map(click => ({
        ip: click.ip_address.ip.toString() || "N/A",
        blockCount: click.count_block.toString() || "N/A",
    }));

    console.log(allowedIpData)
    return (
        <div className='p-4'>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data || []} />
            </div>
            <Footer />
        </div>
    )
}

export default AllowedIps