/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
// import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
    Card,
    CardContent,
    // CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useData } from "@/context/DataContext";

export const description = "A bar chart";

// Convert date to day format (e.g., "Mon")
const formatToDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" }); // Returns "Mon", "Tue", etc.
};

interface BarChartCardProps {
    title?: string;
    earnings?: number;
    chartColor?: string;
    icon: React.ReactNode;
}

export function BarChartCard({ title, earnings, chartColor, icon }: BarChartCardProps) {
    const [chartData, setChartData] = useState<any>([]);
    const { accountData } = useData()

    useEffect(() => {
        const formattedData = accountData?.chartData?.map((item: any) => ({
            day: formatToDay(item.date),
            clicks: item.total_clicks,
        }));
        setChartData(formattedData);
    }, [])
    // useEffect(() => {
    //     // Fetch the API data
    //     fetch("https://click.gardifi.com/api/users/google-account", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: "Bearer " + localStorage.getItem("token"),
    //         }
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             // Format API data
    //             const formattedData = data.chartData.map((item: any) => ({
    //                 day: formatToDay(item.date),
    //                 clicks: item.total_clicks,
    //             }));
    //             setChartData(formattedData);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching chart data:", error);
    //         });
    // }, []);

    const chartConfig = {
        desktop: {
            label: "Users",
            color: `hsl(var(--chart-${chartColor || 1}))`,
        },
    } satisfies ChartConfig;

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-between">

                    <div className="flex gap-2 items-center">
                        {icon && <span className="text-xl">{icon}</span>}
                        <CardTitle>{title}</CardTitle>
                    </div>
                    <span className="text-3xl font-bold">{earnings}</span>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer className=" min-h-[80px] h-[190px] w-full" config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="clicks" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
