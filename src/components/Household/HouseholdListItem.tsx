import { Household } from "@/types/Household";
import React from "react";
import { store } from "@/store";

function ActiveHouseholdMarker() {
  return <div className="rounded-full bg-primary h-4 w-4 m-2" />;
}

export default function HouseholdListItem({
  household,
}: {
  household: Household;
}) {
  const activeHousehold = store.getState().household.activeHousehold;

  return (
    <button className="grow flex flex-row w-full items-center p-4 bg-tertiary rounded-lg my-2 hover:bg-lime-100 hover:cursor-pointer">
      <h3 className="text-left">{`${household.address} - ${household.city}`}</h3>
      {activeHousehold ? (
        activeHousehold.id === household.id ? (
          <ActiveHouseholdMarker />
        ) : null
      ) : null}
    </button>
  );
}
