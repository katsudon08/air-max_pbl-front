import { DIRECTORY } from "@/constants/pass_dir"
import { URL_PATH } from "@/constants/urls"
import { useRoom } from "@/context/roomContext"
import { useCallback } from "react"

export const useAPI = (latestFlag: boolean) => {
    const { room, setRoom } = useRoom()
    const latest = latestFlag ? URL_PATH.LATEST : ""

    const get = useCallback(async () => {
        const res = await fetch(DIRECTORY.API + URL_PATH.ROOM + room + latest, {
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error("データを取得できませんでした")
        }

        const data = await res.json()

        return data
    }, [])

    const post = useCallback(async () => {
        const res = await fetch(DIRECTORY.API + URL_PATH.ROOM + room + latest, {
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