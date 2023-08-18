"use client";

import { PrimaryButton } from "@/components/Button/PrimaryButton";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import { Household } from "@/types/Household";
import HouseholdListItem from "@/components/Household/HouseholdListItem";

export default function HouseholdList() {
  const households = useAppSelector((state) => state.household.households);

  return (
    <div className="grow flex min-h-full flex-col bg-secondary rounded-lg p-2">
      <div className="flex flex-col grow overflow-hidden">
        <h2 className="grow-0 p-4 sticky top-0 font-semibold text-slate-50">
          My Households
        </h2>
        <div className="flex-col grow">
          {households.map((household: Household, index: number) => (
            <HouseholdListItem
              household={household}
              key={`household-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="grow-0">
        <PrimaryButton className="min-w-full" onClick={() => null}>
          New Household
        </PrimaryButton>
      </div>
    </div>
  );
}
