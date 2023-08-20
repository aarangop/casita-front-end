"use client"; // Define as client component since we're using `useTheme`, which requires context

import React from "react";
import Image from "next/image";
import NavigationItem from "@/components/NavigationBar/NavigationItem";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAppSelector } from "@/store/hooks";
import ProfileButtonWithAvatar from "@/components/Avatar/ProfileButtonWithAvatar";

export default function NavigationBar() {
  const { theme, setTheme } = useTheme();

  const activeHousehold = useAppSelector(
    (state) => state.household.activeHousehold,
  );

  return (
    <div className="flex flex-col sticky top-0 max-h-24">
      <div className="flex flex-row p-2 items-center justify-between bg-gradient-to-br">
        <div className="px-2">
          <Image
            src="/logo-no-background.png"
            alt="Casita logo"
            width={130}
            height={60}
          />
        </div>
        <div className="px-2 font-semibold">
          {activeHousehold
            ? `${activeHousehold.address} - ${activeHousehold.city}`
            : "No active household"}
        </div>
        <div className="px-2 flex-grow flex flex-row align-middle justify-center">
          <NavigationItem href="/">Home</NavigationItem>
          <NavigationItem href="/household">Households</NavigationItem>
          <NavigationItem href="/expenses">Expenses</NavigationItem>
        </div>
        <ProfileButtonWithAvatar
          alias="muergano"
          fullName={"Andres Arango"}
          avatarSize={50}
        />
        <div>
          <button
            className="block px-2 rounded-full"
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
      <div className="px-4">
        <hr />
      </div>
    </div>
  );
}
