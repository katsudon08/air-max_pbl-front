const API_KEY = "c2b9033ceba646e956d926619a2556ad"
const DEFAULT_CITY = "Tokyo"

export async function GET() {
    const res = await fetch("http://api.openweathermap.org/data/2.5/forecast?q="+DEFAULT_CITY+",jp&units=metric&appid="+API_KEY, {
        cache: "no-store"
    })

    const data = await res.json()
    console.log(data.list[0].weather)

    return data
}