"use client"
import React from 'react'

import { Area, AreaChart, CartesianGrid, Label, XAxis, YAxis } from "recharts"

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
import { AtmoPresChartData } from '@/types/chartConfig'

const chartConfig = {
    pressure: {
        label: "Pressure",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export const AtmoPresChart = ({ chartData }: { chartData: AtmoPresChartData[] }) => {
    return (
        <Card className='h-fit w-full'>
            <CardHeader>
                <CardTitle>気圧</CardTitle>
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
                            dataKey="pressure"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={3}
                        >
                            <Label position={'bottom'}>hPa</Label>
                        </YAxis>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            dataKey="pressure"
                            type="linear"
                            fill="var(--color-pressure)"
                            fillOpacity={0.4}
                            stroke="var(--color-pressure)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
