"use client"
import { ChartCom } from "@/components/chart/Chart";
import { useWeatherMap } from "@/hooks/useWeatherMap";
import { Weather } from "@/types/weather";
import { NewWeatherMap } from "@/types/weatherMap";
import { useEffect, useState } from "react";

export default function Chart() {
    // TODO あとでスクレイピングで週間予報（天気）をfetchする
    const [weatherData, setWeatherData] = useState<NewWeatherMap[]>([])

    useWeatherMap(setWeatherData)

    console.log(weatherData)

    return (
        <ChartCom data={weatherData}/>
    );
}
