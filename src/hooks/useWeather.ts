import { useRoom } from "@/context/roomContext"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useAPI } from "./useAPI"
import { Weather } from "@/types/weather"

type SetData = Dispatch<SetStateAction<Weather>> | Dispatch<SetStateAction<Weather[]>>

export const useWeather = (setData: SetData, isLatest: boolean) => {
    const { room, setRoom } = useRoom()
    const { get, post } = useAPI(isLatest)

    useEffect(() => {
        const handleRequest = async () => {
            const postData = await post()
            const getData = await get()

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