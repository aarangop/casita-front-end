import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";

export const metadata = {
  title: "Casita",
  description: "My household management app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} id="root">
        {/*<div >*/}
        <Providers>{children}</Providers>
        {/*</div>*/}
      </body>
    </html>
  );
}
