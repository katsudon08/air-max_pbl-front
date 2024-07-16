"use client"
import React from 'react'

import { Area, AreaChart, CartesianGrid, Label, LineChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { TempHumChartData } from '@/types/chartConfig'

const chartConfig = {
    temperature: {
        label: "Temperature",
        color: "hsl(var(--chart-1))",
    },
    humidity: {
        label: "Humidity",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export const TempHumChart = ({ chartData }: { chartData: TempHumChartData[] }) => {
    return (
        <Card className='h-fit w-full'>
            <CardHeader>
                <CardTitle>気温 湿度</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -20,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="week"
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            dataKey="temperature"
                            yAxisId={1}
                            orientation='left'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={3}
                        >
                            <Label position={'bottom'}>℃</Label>
                        </YAxis>
                        <YAxis
                            dataKey="humidity"
                            yAxisId={2}
                            orientation='right'
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={3}
                        >
                            <Label position={'bottom'}>%</Label>
                        </YAxis>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <LineChart accessibilityLayer />
                        <Area
                            yAxisId={1}
                            dataKey="temperature"
                            type="linear"
                            fill="var(--color-temperature)"
                            fillOpacity={0.4}
                            stroke="var(--color-temperature)"
                            stackId="a"
                        />
                        <Area
                            yAxisId={2}
                            dataKey="humidity"
                            type="linear"
                            fill="var(--color-humidity)"
                            fillOpacity={0.4}
                            stroke="var(--color-humidity)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
