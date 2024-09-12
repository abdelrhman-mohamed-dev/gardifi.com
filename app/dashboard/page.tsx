"use client"

import { AreaChartCard } from "@/components/charts/AreaChartCard"
import { BarChartCard } from "@/components/charts/BarChartCard"
import { LineChartsCard } from "@/components/charts/LineChartsCard"
import { PieChartCard } from "@/components/charts/PieChartCard"
import { TransactionsCard } from "@/components/TransactionsCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import React from 'react'
import { IconDownload, IconCheck, IconEye, IconCurrencyDollar } from "@tabler/icons-react";
import Footer from "@/components/Footer"

const DashBoard = () => {

    return (
        <div style={{ direction: "ltr" }} className='p-4'>
            {/* <h1>Dashboard</h1> */}
            {/* <ChartContainer config={chartConfig} className="min-h-[120px] w-[200px]">
                <BarChart accessibilityLayer data={chartData}>
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
            </ChartContainer> */}
            <div className="flex flex-col md:flex-row gap-1.5">
                <BarChartCard title="Download" earnings={300} chartColor="4" icon={<IconDownload />} />
                <BarChartCard title="Total tasks" earnings={1568} chartColor="3" icon={<IconCheck />} />
                <BarChartCard title="Page Views" earnings={290} chartColor="2" icon={<IconEye />} />
                <BarChartCard title="All Earnings" earnings={3000} chartColor="5" icon={<IconCurrencyDollar />} />
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
                <div className="w-full md:w-[30%]">
                    <Card>
                        <CardTitle className="text-xl p-4">Project - Able Pro</CardTitle>
                        <CardContent>
                            <div className="flex justify-between">
                                <span>Release v1.2.0</span>
                                <span>72%</span>
                            </div>
                            <Progress value={72} />
                            <div className="p-2 space-y-2">
                                <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                    <span>horizontal layout</span>
                                </div>
                                <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                                    <span>horizontal layout</span>
                                </div>
                                <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    <span>horizontal layout</span>
                                </div>
                                <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                                    <span>horizontal layout</span>
                                </div>
                                <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                                    <span>horizontal layout</span>
                                </div>
                            </div>
                            <div>
                                <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">Add Task +</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <AreaChartCard />
            </div>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
                <div className="w-full md:w-[30%] ">
                    <Card className="h-[200px] justify-center flex flex-col">
                        <CardDescription className="p-4">
                            <div className="flex gap-2">
                                <Avatar >
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span>Able pro</span>
                                    <span>@ableprodevelop</span>
                                </div>
                            </div>
                        </CardDescription>
                        <CardContent>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <Avatar className="-ml-2 first:ml-0">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="-ml-4 " >
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="-ml-4" >
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="-ml-4" >
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-10 h-10 rounded-full p-4">+</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <LineChartsCard />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-4">
                <PieChartCard />
                <TransactionsCard />
            </div>
            <Footer />
        </div>
    )
}

export default DashBoard