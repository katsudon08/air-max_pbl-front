import { useRoom } from "@/context/roomContext"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Weather } from "@/types/weather"
import { useWeatherMapAPI } from "./useWeatherMapAPI"

type SetData = Dispatch<SetStateAction<Weather>> | Dispatch<SetStateAction<Weather[]>>

export const useWeatherMap = (setData: SetData) => {
    const weather = useWeatherMapAPI()

    useEffect(() => {
        const handleRequest = async () => {
            const data = await weather()

            setData(data)
        }

        handleRequest()

        const intervalRequest = setInterval(() => {
            handleRequest()
        }, 18000000)

        return () => clearInterval(intervalRequest)
    }, [])
}