import { Dispatch, SetStateAction, useEffect } from "react"
import { useWeatherMapAPI } from "./useWeatherMapAPI"
import { NewWeatherMap } from "@/types/weatherMap"

type SetData = Dispatch<SetStateAction<NewWeatherMap[]>>

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