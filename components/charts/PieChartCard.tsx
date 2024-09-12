"use client"

import React, { useState } from "react";
// import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with an active sector";

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export function PieChartCard() {
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const onPieClick = (index: number) => {
        if (activeIndex === index) return setActiveIndex(-1);
        setActiveIndex(index);
    };

    return (
        <Card className="flex w-full md:w-[50%] flex-col">
            <CardHeader className=" pb-0">
                <CardTitle>Total Income</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({
                                outerRadius = 0,
                                ...props
                            }: PieSectorDataItem) => (
                                <Sector {...props} outerRadius={outerRadius + 10} />
                            )}
                            onClick={(_, index) => onPieClick(index)}
                        />
                    </PieChart>
                </ChartContainer>
                <div className="mt-4 mb-8 grid grid-cols-2 gap-4">
                    {chartData.map(({ browser, visitors }, index) => (
                        <div
                            key={browser}
                            className="flex justify-between border border-white/20 shadow-lg items-center p-4 rounded-lg"
                        >
                            <div className="flex items-center gap-3">
                                <div>
                                    <div
                                        className="w-3 h-3 rounded-full"
                                        style={{
                                            backgroundColor: `hsl(var(--chart-${index + 1}))`, // Adjust to dynamically set the color
                                        }}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium  dark:text-white">{browser}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm font-medium dark:text-white">{visitors}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </CardContent>

        </Card>
    );
}
