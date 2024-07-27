"use client"

import { RoomContextType, RoomNumber, RoomProviderProps } from "@/types/roomContext"
import { createContext, useContext, useState } from "react"

const RoomContext = createContext<RoomContextType>({
    room: 1,
    setRoom: () => {}
})

export const RoomProvider = ({children}: RoomProviderProps) => {
    const [room, setRoom] = useState<RoomNumber>(1)

    return (
        <RoomContext.Provider value={{ room, setRoom }}>
            {children}
        </RoomContext.Provider>
    )
}

export const useRoom = () => useContext(RoomContext)