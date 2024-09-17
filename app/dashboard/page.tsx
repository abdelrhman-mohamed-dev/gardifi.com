"use client"

import { AreaChartCard } from "@/components/charts/AreaChartCard"
// import { BarChartCard } from "@/components/charts/BarChartCard"
// import { LineChartsCard } from "@/components/charts/LineChartsCard"
// import { PieChartCard } from "@/components/charts/PieChartCard"
// import { TransactionsCard } from "@/components/TransactionsCard"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
import React from 'react'
// import { IconDownload, IconCheck, IconEye, IconCurrencyDollar, IconArrowUp } from "@tabler/icons-react";
// import { IconArrowUp } from "@tabler/icons-react"
import Footer from "@/components/Footer"
// import { PriceProgressBar } from "@/components/PriceProgressBar"
import PriceProgessBarCard from "@/components/ProgessBarCard"
import TotalClicksProgressCard from "@/components/TotalClicksProgressCard"
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip"
// import { HelpCircle } from "lucide-react"
// import WorldMap from "@/components/WorldMap/WorldMap"
import WorldMapCard from "@/components/WorldMapCard"
import TotalExclutions from "@/components/TotalExclutions"
import NotesCard from "@/components/NotesCard"
import CampignProgressCard from "@/components/CampignProgressCard"


const DashBoard = () => {



    return (
        <div className='p-4'>
            {/* <h1>Dashboard</h1> */}
            {/* <ChartContainer config={chartConfig} className="min-h-[120px] w-[200px]">
                <BarChart accessibilityLayer data={chartData}>
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer> */}
            {/* <div className="flex flex-col md:flex-row gap-1.5">
                <BarChartCard title="Download" earnings={300} chartColor="4" icon={<IconDownload />} />
                <BarChartCard title="Total tasks" earnings={1568} chartColor="3" icon={<IconCheck />} />
                <BarChartCard title="Page Views" earnings={290} chartColor="2" icon={<IconEye />} />
                <BarChartCard title="All Earnings" earnings={3000} chartColor="5" icon={<IconCurrencyDollar />} />

            </div> */}





            <div className="flex flex-col md:flex-row gap-2 mb-4" >

                <div className="flex flex-col gap-2">

                    <PriceProgessBarCard />
                    <TotalExclutions className="" />
                </div>
                <div className="flex flex-col gap-2">

                    <TotalClicksProgressCard />
                    <CampignProgressCard />
                </div>

                <WorldMapCard />
            </div>





            <div className="flex flex-col md:flex-row gap-2 mt-4">
                <AreaChartCard />
                <NotesCard />
            </div>

            <Footer />
        </div>
    )
}

export default DashBoard