import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import { Header } from "@/components/Header";
import { RoomProvider } from "@/context/roomContext";

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
                    "h-svh w-full bg-background font-sans antialiased",
                    fontSans.variable
                )
            }>{
                    <div className="h-full w-full">
                        <RoomProvider>
                            <Header />
                            {children}
                        </RoomProvider>
                    </div>
                }</body>
        </html>
    );
}
