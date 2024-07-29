import { DIRECTORY } from "@/constants/pass_dir"
import { URL_PATH } from "@/constants/urls"
import { useCallback } from "react"

type Room = 1 | 2

export const useWeatherAPI = (latestFlag: boolean) => {
    const latest = latestFlag ? URL_PATH.LATEST : ""

    const get = useCallback(async (room: Room) => {
        const res = await fetch(DIRECTORY.API + URL_PATH.ROOM + room + latest, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("データを取得できませんでした")
        }

        const data = await res.json()

        return data
    }, [])

    const post = useCallback(async (room: Room) => {
        const res = await fetch(DIRECTORY.API + URL_PATH.ROOM + room, {
            method: "POST",
        })
        if (!res.ok) {
            throw new Error("データを送信できませんでした")
        }

        const data = await res.json()

        return data
    }, [])

    return { get, post }
}