import { useRoom } from "@/context/roomContext"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useWeatherAPI } from "./useWeatherAPI"
import { Weather } from "@/types/weather"
import { handleIsWeatherCaution } from "@/utils/handleIsWeatherCaution"
import { useToast } from "@/components/ui/use-toast"

type SetData = Dispatch<SetStateAction<Weather>> | Dispatch<SetStateAction<Weather[]>>

export const useWeather = (setData: SetData, isLatest: boolean) => {
    const { room, setRoom } = useRoom()
    const { get, post } = useWeatherAPI(isLatest)
    const { toast } = useToast()

    useEffect(() => {
        const handleRequest = async () => {
            const postData = await post(room)
            const getData = await get(room)

            if (handleIsWeatherCaution(getData, isLatest)) {
                toast({
                    variant: "destructive",
                    title: "快適な温度を保つために、冷房のご使用をお勧めいたします"
                })
            }

            console.log(postData)
            setData(getData)
        }

        handleRequest()

        const intervalRequest = setInterval(() => {
            handleRequest()
        }, 30000)

        return () => clearInterval(intervalRequest)
    }, [room])
}