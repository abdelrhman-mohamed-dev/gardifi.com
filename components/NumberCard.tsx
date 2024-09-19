"use client"

// import { TrendingUp } from "lucide-react"
// import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    // CardContent,
    // CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import {
//     ChartConfig,
//     ChartContainer,
//     ChartTooltip,
//     ChartTooltipContent,
// } from "@/components/ui/chart"

export const description = "A bar chart"

// const chartData = [
//     { month: "January", desktop: 186 },
//     { month: "February", desktop: 305 },
//     { month: "March", desktop: 237 },
//     { month: "April", desktop: 73 },
//     { month: "May", desktop: 209 },
//     { month: "June", desktop: 214 },
//     { month: "January", desktop: 186 },
//     { month: "February", desktop: 305 },
//     { month: "March", desktop: 237 },
//     { month: "April", desktop: 73 },
//     { month: "May", desktop: 209 },
//     { month: "June", desktop: 214 },


// ]


interface NumberCardProps {
    title?: string;
    earnings?: number;
    chartColor?: string;
    icon: React.ReactNode; // Add icon as a prop

}
export function NumberCard(NumberCardProps: NumberCardProps) {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-between">

                    <div className="flex gap-2 items-center">
                        {NumberCardProps.icon && <span className="text-xl">{NumberCardProps.icon}</span>} {/* Render the icon */}
                        <CardTitle>{NumberCardProps.title}</CardTitle>

                    </div>
                    <span className="text-3xl font-bold">{NumberCardProps.earnings}</span>
                </div>
            </CardHeader>
        </Card>
    )
}
