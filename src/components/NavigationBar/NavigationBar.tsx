"use client"; // Define as client component since we're using `useTheme`, which requires context

import React from "react";
import Image from "next/image";
import NavigationItem from "@/components/NavigationBar/NavigationItem";

export default function NavigationBar() {
  return (
    <div className="flex flex-col sticky top-0 max-h-24 dark:bg-dark-1 bg-light-1">
      <div className="flex flex-row p-2 items-center justify-between bg-gradient-to-br">
        <div className="px-2">
          <Image
            src="/logo-no-background.png"
            alt="Casita logo"
            width={130}
            height={60}
          />
        </div>
        <div className="px-2 flex-grow flex flex-row align-middle justify-center">
          <NavigationItem dataTestId="header-navigation-home" href="/">
            Home
          </NavigationItem>
          <NavigationItem
            dataTestId="header-navigation-household"
            href="/household"
          >
            Households
          </NavigationItem>
          <NavigationItem
            dataTestId="header-navigation-item-expenses"
            href="/expenses"
          >
            Expenses
          </NavigationItem>
        </div>
      </div>
      <div className="px-4">
        <hr />
      </div>
    </div>
  );
}
