"use client";

import { PrimaryButton } from "@/components/Button/PrimaryButton";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Household } from "@/types/Household";
import HouseholdListItem from "@/components/Household/HouseholdListItem";
import { setSelectedHousehold } from "@/store/features/householdSlice";

export default function HouseholdList() {
  const dispatch = useAppDispatch();

  const households = useAppSelector((state) => state.household.households);
  const createNewHousehold = () => {
    const newHousehold = {
      id: "newHouseholdId",
      city: "New City",
      address: "New Street 1",
      members: [],
    } as Household;
    dispatch(setSelectedHousehold(newHousehold));
  };
  return (
    <div className="grow flex min-h-full flex-col bg-secondary p-2 rounded shadow-md">
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
        <PrimaryButton className="min-w-full" onClick={createNewHousehold}>
          New Household
        </PrimaryButton>
      </div>
    </div>
  );
}
