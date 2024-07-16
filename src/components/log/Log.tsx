import React from 'react'
import { Header } from '../Header'
import { DataTable } from './data-table'
import { Weather } from '@/types/weather'
import { columns } from "./columns";

export const data: Weather[] = Array.from({ length: 10 }).map((_, i) => {
    return {
        id: 'aiueo',
        room: 1,
        date: '2024-7-15',
        temperature: (30/(i+1) + 12),
        humidity: 40,
        pressure: 1014
    }

})

export const LogCom = () => {
    return (
        <main className='h-full w-full'>
            <Header />
            <div className='h-[92%] w-full fixed bottom-0 p-2'>
                <DataTable columns={columns} data={data} />
            </div>
        </main>
    )
}
