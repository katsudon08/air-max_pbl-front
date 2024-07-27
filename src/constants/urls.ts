export const URLS = {
    SERVER: "http://localhost:8000",
    DATABASE: ""
} as const satisfies Record<string, string>

export const URL_PATH = {
    ROOM1: "/room1",
    ROOM2: "/room2",
    ROOM: "/room",
    ROOM1LATEST: "/room1/latest",
    ROOM2LATEST: "/room2/latest",
    LATEST: "/latest"
} as const satisfies Record<string, string>