export const DIRECTORY = {
    HOME: "/",
    LOG: "/log",
    CHART: "/chart"
} as const satisfies Record<string, string>

export type PathDirectoryKey = keyof typeof DIRECTORY
export type PathDirectory = typeof DIRECTORY[PathDirectoryKey]