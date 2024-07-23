"use client"
import { HomeCom } from "@/components/home/Home";
import { DIRECTORY } from "@/constants/pass_dir";
import { URL_PATH } from "@/constants/urls";
import { Weather } from "@/types/weather";
import { useEffect, useState } from "react";


export default function Home() {
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

    const [weatherData, setWeatherData] = useState<Weather>({
        id: "",
        room: 0,
        date: "",
        temperature: 0,
        humidity: 0,
        pressure: 0
    })

    return (
        <HomeCom weatherData={weatherData} />
    );
}
