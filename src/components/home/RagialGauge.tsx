"use client"
import { useWindowSize } from '@/hooks/useWindowSize'
import { IgrRadialGauge, IgrRadialGaugeModule } from 'igniteui-react-gauges'
import React from 'react'

IgrRadialGaugeModule.register()

export const RagialGauge = ({ name, value, min, max }: { name: string, value: number, min: number, max: number }) => {
    const windowHeight = useWindowSize()
    console.log(windowHeight)

    return (
        <div className='h-full w-full flex justify-center items-center relative'>
            <IgrRadialGauge
                backingShape="Fitted"
                backingBrush="#fcfcfc"
                backingOutline="DodgerBlue"
                backingOversweep={5}
                backingCornerRadius={10}
                backingStrokeThickness={5}
                backingOuterExtent={0.8}
                backingInnerExtent={0.15}

                scaleStartAngle={135}
                scaleEndAngle={45}
                scaleBrush="#dddddd"

                height='100%'
                width='95%'
                minimumValue={min} value={value}
                maximumValue={max} interval={10}
            />
            <div className='absolute bottom-[15%] md:bottom-1/4 p-4 text-lg rounded-md'>
                {value}
            </div>
            <div className='absolute bottom-0 md:bottom-[10%] p-4 text-lg rounded-md'>
                {name}
            </div>
        </div>
    )
}
