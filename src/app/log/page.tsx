"use client"
import { LogCom } from "@/components/log/Log";
import { useWeather } from "@/hooks/useWeather";
import { Weather } from "@/types/weather";
import { useState } from "react";

export default function Log() {
    const [weatherData, setWeatherData] = useState<Weather[]>([])

    useWeather(setWeatherData, false)

    return (
        <LogCom weatherData={weatherData} />
    );
}