import { Week } from "@/constants/week"

export type TempHumChartData = {
    week: Week
    temperature: number
    humidity: number
}

export type AtmoPresChartData = {
    week: Week
    pressure: number
}