"use client"
import { ChartCom } from "@/components/chart/Chart";
import { DIRECTORY } from "@/constants/pass_dir";
import { URL_PATH } from "@/constants/urls";
import { Weather } from "@/types/weather";
import { useEffect, useState } from "react";

export default function Chart() {
    //TODO 後でスイッチできるようにする
    const switchPath = URL_PATH.ROOM1LATEST

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
        <ChartCom />
    );
}
