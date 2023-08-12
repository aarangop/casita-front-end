import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Casita',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <NavigationBar/>
            {children}
        </Providers>
        </body>
        </html>
    )
}
