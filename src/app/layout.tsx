import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Air-Max",
    description: "This app is a measurement of tmp, humi, and prs.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={
                cn(
                    "min-h-svh bg-background font-sans antialiased",
                    fontSans.variable
                )
            }>{children}</body>
        </html>
    );
}
