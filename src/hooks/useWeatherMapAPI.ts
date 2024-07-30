import { DIRECTORY } from "@/constants/pass_dir"
import { URL_PATH } from "@/constants/urls"
import { useCallback } from "react"

export const useWeatherMapAPI = () => {
    const weather = useCallback(async () => {
        const res = await fetch(DIRECTORY.API + URL_PATH.WEATHER, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("データを取得できませんでした")
        }

        const data = await res.json()

        return data
    }, [])

    return weather
}