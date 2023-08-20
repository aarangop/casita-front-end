import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import { Providers } from "@/app/providers";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Preloader from "@/components/Preloader";
import { store } from "@/store";
import {
  setActiveHousehold,
  setHouseholds,
} from "@/store/features/householdSlice";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casita",
};

export interface ILayoutProps {
  children: ReactNode;
}

export default async function RootLayout(props: ILayoutProps) {
  const req = await fetch("http://localhost:8080/households.json");
  const data = await req.json();
  const activeHousehold = data[0];
  store.dispatch(setHouseholds(data));
  store.dispatch(setActiveHousehold(activeHousehold));
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*Funnel state through the Preloader component!*/}
        <Preloader activeHousehold={activeHousehold} households={data} />
        <Providers>
          <div className="min-h-screen flex flex-col justify-between">
            <NavigationBar />
            {props.children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
