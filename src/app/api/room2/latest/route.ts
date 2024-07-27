import { URL_PATH, URLS } from "@/constants/urls";

export async function GET() {
    const res = await fetch(URLS.SERVER+URL_PATH.ROOM2LATEST, {
        cache: "no-store"
    })

    const data = await res.json()

    return Response.json(data)
}

export async function  POST() {
    const res = await fetch(URLS.SERVER+URL_PATH.ROOM2LATEST, {
        method: "POST"
    })

    const data = await res.json()

    console.log("api:", data)

    return Response.json(data)
}