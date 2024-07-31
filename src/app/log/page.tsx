"use client"
import { LogCom } from "@/components/log/Log";
import { useSupabaseWeather } from "@/hooks/useSupabaseWeather";
import { useWeather } from "@/hooks/useWeather";
import { Weather } from "@/types/weather";
import { useState } from "react";

export default function Log() {
    const [weatherData, setWeatherData] = useState<Weather[]>([])

    useSupabaseWeather(setWeatherData, false)

    return (
        <LogCom weatherData={weatherData} />
    );
}