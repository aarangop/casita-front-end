'use client'
import React from "react";
import {ThemeProvider} from "next-themes";

export default function Home() {
    return (
        <ThemeProvider>
            <main>
                <div className="p-4">Yoo this is the home page!</div>
            </main>
        </ThemeProvider>
    )
}