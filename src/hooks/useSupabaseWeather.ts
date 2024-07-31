import { useRoom } from "@/context/roomContext"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useWeatherAPI } from "./useWeatherAPI"
import { Weather } from "@/types/weather"
import { supabase } from "@/utils/supabase"

type SetData = Dispatch<SetStateAction<Weather>> | Dispatch<SetStateAction<Weather[]>>

export const useSupabaseWeather = (setData: SetData, isLatest: boolean) => {
    const { room, setRoom } = useRoom()

    useEffect(() => {
        console.log(room)
        const handleRequest = async () => {
            const data = room === 1 ?
                (await supabase.from("room1").select("*")).data :
                (await supabase.from("room2").select("*")).data

            if (handleIsWeatherCaution(getData, isLatest)) {
                toast({
                    variant: "destructive",
                    title: "快適な温度を保つために、冷房のご使用をお勧めいたします"
                })
            }

            if (data !== null) {
                setData(isLatest ? data.slice(-1)[0] : data)
            }
        }

        handleRequest()

        const intervalRequest = setInterval(() => {
            handleRequest()
        }, 30000)

        return () => clearInterval(intervalRequest)
    }, [room])
}