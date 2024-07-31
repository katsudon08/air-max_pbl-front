import { Weather } from "@/types/weather";

export const handleIsWeatherCaution = (weather: Weather, isLatest: boolean): boolean => {
    if (!isLatest) {
        return false
    }

    if (weather.temperature >= 28 || weather.humidity >= 70) {
        return true
    }

    return false
}