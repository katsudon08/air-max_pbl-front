"use client"
import { HomeCom } from "@/components/home/Home";
import { useSupabaseWeather } from "@/hooks/useSupabaseWeather";
import { useWeather } from "@/hooks/useWeather";
import { Weather } from "@/types/weather";
import { useState } from "react";


export default function Home() {
    const [weatherData, setWeatherData] = useState<Weather>({
        id: 0,
        date: "",
        temperature: 0,
        humidity: 0,
        pressure: 0
    })

    useSupabaseWeather(setWeatherData, true)

    return (
        <HomeCom weatherData={weatherData} />
    );
}
