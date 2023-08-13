'use client'

import React from "react";
import Image from "next/image";
import NavigationItem from "@/components/NavigationBar/NavigationItem";
import {useTheme} from "next-themes";
import {FaMoon, FaSun} from "react-icons/fa";
import {Avatar} from "@/components/Avatar/Avatar";

export default function NavigationBar() {

    const {theme, setTheme} = useTheme()

    return (
        <div className="flex flex-col sticky top-0">
            <div className="flex flex-row p-2 items-center justify-between bg-gradient-to-br">
                <div className="px-2">
                    Current Home
                </div>
                <div className="px-2">
                    <Image src="/logo-no-background.png" alt="Casita logo" width={140} height={60}/>
                </div>
                <div className="px-2 flex-grow flex flex-row align-middle justify-center">
                    <NavigationItem href="/">Home</NavigationItem>
                    <NavigationItem href="/household">Households</NavigationItem>
                    <NavigationItem href="/expenses">Expenses</NavigationItem>
                </div>
                <div className="flex bg-slate-100 rounded-full">
                    <a href="/profile" className="p-2 flex flex-row items-center">
                        <p className="px-2">Muergano</p>
                        <Avatar fullName="Muergan O" width={30}/>
                    </a>
                </div>
                <div>
                    <button className="block px-2 rounded-full" onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark")
                    }}>{theme === "dark" ? <FaSun/> : <FaMoon/>}</button>
                </div>
            </div>
            <div className="px-4">
                <hr/>
            </div>
        </div>
    )
}