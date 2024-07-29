import { useRoom } from "@/context/roomContext"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useWeatherAPI } from "./useWeatherAPI"
import { Weather } from "@/types/weather"

type SetData = Dispatch<SetStateAction<Weather>> | Dispatch<SetStateAction<Weather[]>>

export const useWeather = (setData: SetData, isLatest: boolean) => {
    const { room, setRoom } = useRoom()
    const { get, post } = useWeatherAPI(isLatest)

    useEffect(() => {
        console.log(room)
        const handleRequest = async () => {
            const postData = await post(room)
            const getData = await get(room)

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