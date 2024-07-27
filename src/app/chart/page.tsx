"use client"
import { ChartCom } from "@/components/chart/Chart";
import { DIRECTORY } from "@/constants/pass_dir";
import { URL_PATH } from "@/constants/urls";
import { useRoom } from "@/context/roomContext";
import { Weather } from "@/types/weather";
import { useEffect, useState } from "react";

export default function Chart() {
    // TODO あとでスクレイピングで週間予報（天気）をfetchする
    const { room, setRoom } = useRoom()

    useEffect(() => {
        const fetchWeatherData = async () => {
            const res = await fetch(DIRECTORY.API + URL_PATH.ROOM + room, {
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
    }, [room])

    const [weatherData, setWeatherData] = useState<Weather[]>([])

    return (
        <ChartCom />
    );
}
