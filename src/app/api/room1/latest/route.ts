import { URL_PATH, URLS } from "@/constants/urls";

export async function GET() {
    const res = await fetch(URLS.SERVER+URL_PATH.ROOM1LATEST, {
        cache: "no-store"
    })

    const data = await res.json()

    console.log("api:", data)

    return Response.json(data)
}