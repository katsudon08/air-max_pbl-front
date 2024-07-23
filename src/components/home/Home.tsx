"use client"
import React from 'react'
import { RagialGauge } from './RagialGauge';
import { Weather } from '@/types/weather';

export const HomeCom = ({ weatherData }: { weatherData: Weather }) => {
    return (
        <main className='h-[92%] fixed bottom-0 w-full flex flex-col md:flex-row justify-center items-center'>
            <RagialGauge name='気温' value={weatherData.temperature} min={-30} max={50} />
            <RagialGauge name='湿度' value={weatherData.humidity} min={0} max={100} />
            <RagialGauge name='気圧' value={weatherData.pressure} min={980} max={1060} />
        </main>
    )
}
