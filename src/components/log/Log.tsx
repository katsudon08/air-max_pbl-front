import React from 'react'
import { DataTable } from './data-table'
import { Weather } from '@/types/weather'
import { columns } from "./columns";

export const LogCom = ({ weatherData }: { weatherData: Weather[] }) => {
    return (
        <main className='h-[92%] w-full fixed bottom-0 p-2'>
            <DataTable columns={columns} data={weatherData} />
        </main>
    )
}
