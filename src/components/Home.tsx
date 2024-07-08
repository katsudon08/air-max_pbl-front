import React from 'react'
import { Header } from './ui/Header'
import { Content } from './ui/Content'

export const HomeCom = () => {
    return (
        <main className='h-full w-full'>
            <Header/>
            <Content>
                Home
            </Content>
        </main>
    )
}
