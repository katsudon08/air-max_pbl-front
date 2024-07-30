"use client"
import { ChartCom } from "@/components/chart/Chart";
import { useWeatherMap } from "@/hooks/useWeatherMap";
import { Weather } from "@/types/weather";
import { useEffect, useState } from "react";

export default function Chart() {
    // TODO あとでスクレイピングで週間予報（天気）をfetchする
    const [weatherData, setWeatherData] = useState<Weather[]>([])

    // const data = useWeatherMap(setWeatherData)

    // console.log(data)

    return (
        <ChartCom />
    );
}
