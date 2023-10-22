import React from "react";
import HouseholdListItem from "@/components/Household/HouseholdListItem";
import { Household } from "@/store/casitaApi";

export default function HouseholdList({
  households,
  activeHousehold,
  className,
}: {
  households: Household[];
  activeHousehold: Household | null;
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-col grow overflow-hidden">
        <h2 className="grow-0 p-4 sticky top-0 font-semibold text-slate-50">
          My Households
        </h2>
        <div className="flex-col grow overflow-hidden">
          {households.map((household: Household, index: number) => (
            <HouseholdListItem
              isActiveHousehold={
                activeHousehold ? activeHousehold.id === household.id : false
              }
              household={household}
              key={`household-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="grow-0"></div>
    </div>
  );
}
