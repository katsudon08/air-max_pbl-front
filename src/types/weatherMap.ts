export type WeatherMap = {
    dt: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number
        temp_kf:number
    },
    weather: Object[][]
    clouds: Object
    wind: Object
    visibility: number
    pop: number
    rain: Object
    sys: Object
    dt_txt: string
}

export type NewWeatherMap = {
    date: string
    temperature: number
    humidity: number
    pressure: number
}