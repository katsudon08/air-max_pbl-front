"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import { Separator } from './ui/separator'
import { useRouter } from 'next/navigation'
import { DIRECTORY, PathDirectory, PathDirectoryKey } from '@/constants/pass_dir'
import { useRoom } from '@/context/roomContext'
import { Switch } from './ui/switch'
import { Label } from './ui/label'


const buttonNames: PathDirectoryKey[] = ['HOME', 'LOG', 'CHART']
const buttonPaths: PathDirectory[] = [DIRECTORY.HOME, DIRECTORY.LOG, DIRECTORY.CHART]

const buttonItem = Array.from({ length: 3 }).map((_, i) => {
    return {
        buttonName: buttonNames[i],
        buttonPath: buttonPaths[i]
    }
})

export const Header = () => {
    const router = useRouter()

    const { room, setRoom } = useRoom()

    const handleTransition = (path: PathDirectory) => {
        router.push(path)
    }

    const handleToggleRoom = () => {
        setRoom(prevRoom => prevRoom === 1 ? 2 : 1)
    }

    return (
        <Sheet>
            <div className='bg-zinc-800 z-10 h-[8%] pl-2 absolute top-0 flex w-full flex-row justify-between items-center'>
                <Switch id='room-number' onClick={handleToggleRoom} />
                <Label className='text-white' htmlFor='room-number'>room{room}</Label>
                <SheetTrigger asChild>
                    <Button className='bg-inherit'>Menu</Button>
                </SheetTrigger>
            </div>
            <SheetContent>
                <SheetTitle>Side Bar</SheetTitle>
                <div className='h-full flex flex-col items-center justify-start space-y-1 mt-2'>
                    {buttonItem.map((v, i) => (
                        <SheetClose asChild>
                            <Button variant={"ghost"} className='w-3/4' onClick={() => handleTransition(v.buttonPath)} key={i}>
                                {v.buttonName}
                            </Button>
                        </SheetClose>
                    ))}
                    <Separator />
                </div>
            </SheetContent>
        </Sheet>
    )
}
