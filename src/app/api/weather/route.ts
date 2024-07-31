import { NewWeatherMap, WeatherMap } from "@/types/weatherMap"

const API_KEY = "c2b9033ceba646e956d926619a2556ad"
const DEFAULT_CITY = "Tokyo"

export async function GET() {
    const res = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + DEFAULT_CITY + ",jp&units=metric&appid=" + API_KEY, {
        cache: "no-store"
    })

    const data = await res.json()
    const list = data.list

    const filteredData: WeatherMap[] = list.filter((_: WeatherMap, i: number) => i % 8 === 0)

    const newData = filteredData.map((v: WeatherMap) => {
        const regex = /(\d{4})-(\d{2})-(\d{2})/
        const match = v.dt_txt.match(regex)
        if (match) {
            const [_, year, month, day] = [...match]
            console.log(year, month, day)
            return {
                date: month + "/" + day,
                temperature: v.main.temp,
                humidity: v.main.humidity,
                pressure: v.main.pressure
            }
        } else {
            return {
                date: "",
                temperature: 0,
                humidity: 0,
                pressure: 0
            }
        }
    })

    return Response.json(newData)
}