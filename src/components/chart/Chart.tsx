"use client"
import React from 'react'
import { Header } from '../Header'
import { TempHumChart } from './TempHumChart'
import { AtmoPresChart } from './AtmoPresChart'
import { AtmoPresChartData, TempHumChartData } from '@/types/chartConfig'
import { WEEK } from '@/constants/week'

export const ChartCom = () => {
    const tempHumChartData: TempHumChartData[] = [
        { week: WEEK.MONDAY, temperature: 25, humidity: 40 },
        { week: WEEK.TUESDAY, temperature: 20, humidity: 40 },
        { week: WEEK.WEDNESDAY, temperature: 32, humidity: 50 },
        { week: WEEK.THURSDAY, temperature: 29, humidity: 30 },
        { week: WEEK.FRIDAY, temperature: 28, humidity: 70 },
        { week: WEEK.SATURDAY, temperature: 30, humidity: 60 },
        { week: WEEK.SUNDAY, temperature: 35, humidity: 50 }
    ]

    const atmoPresChartData: AtmoPresChartData[] = [
        { week: WEEK.MONDAY, pressure: 1014 },
        { week: WEEK.TUESDAY, pressure: 1020 },
        { week: WEEK.WEDNESDAY, pressure: 1010 },
        { week: WEEK.THURSDAY, pressure: 1012 },
        { week: WEEK.FRIDAY, pressure: 1015 },
        { week: WEEK.SATURDAY, pressure: 1016 },
        { week: WEEK.SUNDAY, pressure: 1013 },
    ]

    return (
        <main className='h-[92%] fixed bottom-0 w-full flex justify-center items-center'>
            <div className='h-3/4 w-4/5 md:w-3/5 flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-5'>
                <TempHumChart chartData={tempHumChartData} />
                <AtmoPresChart chartData={atmoPresChartData} />
            </div>
        </main>
    )
}