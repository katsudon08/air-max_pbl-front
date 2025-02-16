import { useRoom } from "@/context/roomContext"
import { Dispatch, SetStateAction, useEffect } from "react"
import { Weather } from "@/types/weather"
import { supabase } from "@/utils/supabase"
import { handleIsWeatherCaution } from "@/utils/handleIsWeatherCaution"
import { useToast } from "@/components/ui/use-toast"
import { useSound } from "use-sound";
import Sound from "./alert.mp3"

type SetData = Dispatch<SetStateAction<Weather>> | Dispatch<SetStateAction<Weather[]>>

export const useSupabaseWeather = (setData: SetData, isLatest: boolean) => {
    const { room, setRoom } = useRoom()
    const { toast } = useToast()
    const [ playSound ] = useSound(Sound)

    useEffect(() => {
        console.log(room)
        const handleRequest = async () => {
            const data = room === 1 ?
                (await supabase.from("room1").select("*")).data :
                (await supabase.from("room2").select("*")).data

            if (data !== null) {
                if (handleIsWeatherCaution(data.slice(-1)[0], isLatest)) {
                    toast({
                        variant: "destructive",
                        title: "快適な温度を保つために、冷房のご使用をお勧めいたします"
                    })
                    playSound()
                }

                setData(isLatest ? data.slice(-1)[0] : data)
            }
        }

        handleRequest()

        const intervalRequest = setInterval(() => {
            handleRequest()
        }, 30000)

        return () => clearInterval(intervalRequest)
    }, [room])
}