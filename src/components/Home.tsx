"use client"
import React from 'react'
import { Header } from './ui/Header'
import { RagialGauge } from './ui/RagialGauge';

export const HomeCom = () => {
    return (
        <>
            <Header />
            <main className='h-full w-full pt-8 flex flex-col md:flex-row justify-center items-center'>
                <RagialGauge name='気温' value={25} min={-30} max={50}/>
                <RagialGauge name='湿度' value={40} min={0} max={100}/>
                <RagialGauge name='気圧' value={1054} min={980} max={1060}/>
            </main>
        </>
    )
}
