"use client"
import React from 'react'
import { TempHumChart } from './TempHumChart'
import { AtmoPresChart } from './AtmoPresChart'
import { AtmoPresChartData, TempHumChartData } from '@/types/chartConfig'
import { NewWeatherMap } from '@/types/weatherMap'

export const ChartCom = ({data}: {data: NewWeatherMap[]}) => {
    const tempHumChartData: TempHumChartData[] = data.map((v: NewWeatherMap, i: number) => {
        return {
            date: v.date,
            temperature: v.temperature,
            humidity: v.humidity
        }
    }).filter((_, i) => i < 3)

    const atmoPresChartData: AtmoPresChartData[] = data.map((v: NewWeatherMap) => {
        return {
            date: v.date,
            pressure: v.pressure
        }
    }).filter((_, i) => i < 3)

    return (
        <main className='h-[92%] fixed bottom-0 w-full flex justify-center items-center'>
            <div className='h-3/4 w-4/5 md:w-3/5 flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-5'>
                <TempHumChart chartData={tempHumChartData} />
                <AtmoPresChart chartData={atmoPresChartData} />
            </div>
        </main>
    )
}