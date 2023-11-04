import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import { Providers } from "@/app/providers";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casita",
};

export interface ILayoutProps {
  children: ReactNode;
}

export default async function RootLayout(props: ILayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-dark-1`} id="root">
        {/*Funnel state through the Preloader component!*/}
        {/*<Preloader activeHousehold={activeHousehold} households={data} />*/}
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
