"use client"
import { LogCom } from "@/components/log/Log";
import { DIRECTORY } from "@/constants/pass_dir";
import { URL_PATH } from "@/constants/urls";
import { Weather } from "@/types/weather";
import { useEffect, useState } from "react";

export default function Log() {
    //TODO 後でスイッチできるようにする
    const switchPath = URL_PATH.ROOM1

    useEffect(() => {
        const fetchWeatherData = async () => {
            const res = await fetch(DIRECTORY.API + switchPath, {
                cache: "no-store"
            })
            if (!res.ok) {
                throw new Error("データを取得できませんでした")
            }

            const data = await res.json()

            console.log(data)

            setWeatherData(data)
        }

        fetchWeatherData()
    }, [])

    const [weatherData, setWeatherData] = useState<Weather[]>([])

    return (
        <LogCom weatherData={weatherData}/>
    );
}