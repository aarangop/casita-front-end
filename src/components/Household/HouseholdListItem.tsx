import { Household } from "@/types/Household";
import { store } from "@/store";
import { useAppDispatch } from "@/store/hooks";
import React from "react";
import { setSelectedHousehold } from "@/store/features/householdSlice";

function ActiveHouseholdMarker() {
  return <div className="rounded-full bg-primary h-4 w-4 m-2" />;
}

export default function HouseholdListItem({
  household,
}: {
  household: Household;
}) {
  const dispatch = useAppDispatch();
  const activeHousehold = store.getState().household.activeHousehold;

  const handleClick = () => {
    dispatch(setSelectedHousehold(household));
  };

  return (
    <button
      onClick={handleClick}
      className="grow flex flex-row w-full items-center p-4 bg-tertiary rounded-lg my-2 hover:bg-lime-100 hover:cursor-pointer"
    >
      <h3 className="text-left dark:text-slate-900">{`${household.address} - ${household.city}`}</h3>
      {activeHousehold ? (
        activeHousehold.id === household.id ? (
          <ActiveHouseholdMarker />
        ) : null
      ) : null}
    </button>
  );
}
