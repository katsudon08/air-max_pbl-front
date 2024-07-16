"use client"

import React from 'react'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from './ui/separator'
import { useRouter } from 'next/navigation'
import { DIRECTORY, PathDirectory, PathDirectoryKey } from '@/constants/pass_dir'

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

    const handleTransition = (path: PathDirectory) => {
        router.push(path)
    }

    return (
        <Sheet>
            <div className='bg-zinc-950 z-10 h-[8%] absolute top-0 flex w-full flex-row justify-end items-center'>
                <SheetTrigger asChild>
                    <Button className='bg-inherit'>Menu</Button>
                </SheetTrigger>
            </div>
            <SheetContent>
                <SheetTitle>Side Bar</SheetTitle>
                <div className='h-full flex flex-col items-center justify-start space-y-1 mt-2'>
                    {buttonItem.map((v, i) => (
                        <Button variant={"ghost"} className='w-3/4' onClick={() => handleTransition(v.buttonPath)} key={i}>
                            {v.buttonName}
                        </Button>
                    ))}
                    <Separator />
                </div>
            </SheetContent>
        </Sheet>
    )
}
