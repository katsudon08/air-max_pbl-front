import { Dispatch, ReactNode, SetStateAction } from "react"

export type RoomNumber = 1 | 2

export interface RoomContextType {
    room: RoomNumber
    setRoom: Dispatch<SetStateAction<RoomNumber>>
}

export interface RoomProviderProps {
    children: ReactNode
}