"use client";

import { PrimaryButton } from "@/components/Button/PrimaryButton";
import React from "react";
import HouseholdListItem from "@/components/Household/HouseholdListItem";
import { Household, useGetHouseholdsQuery } from "@/store/casitaApi";

export default function HouseholdList() {
  const fetchNewHousehold = async () => {
    try {
      const req = await fetch("http://localhost:3000/api/household");
      return await req.json();
    } catch (err) {
      console.log("Error fetching dummy household:", err);
    }
  };
  const {
    data: households,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetHouseholdsQuery();

  const createNewHousehold = () => {};
  return (
    <div className="grow flex min-h-full flex-col bg-secondary p-2 rounded shadow-md">
      <div className="flex flex-col grow overflow-hidden">
        <h2 className="grow-0 p-4 sticky top-0 font-semibold text-slate-50">
          My Households
        </h2>
        <div className="flex-col grow">
          {households?.map((household: Household, index: number) => (
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
