import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React from "react";
import { setSelectedHousehold } from "@/store/features/householdSlice";
import { Household } from "@/store/casitaApi";

function ActiveHouseholdMarker() {
  return <div className="rounded-full bg-primary w-3 h-3 m-2" />;
}

export default function HouseholdListItem({
  household,
  isActiveHousehold = false,
}: {
  household: Household;
  isActiveHousehold?: boolean;
}) {
  const dispatch = useAppDispatch();
  const selectedHousehold = useAppSelector(
    (state) => state.household.selectedHousehold,
  );
  const handleClick = () => {
    if (selectedHousehold?.id == household.id) {
      dispatch(setSelectedHousehold(null));
    } else {
      dispatch(setSelectedHousehold(household));
    }
  };
  return (
    <button
      onClick={handleClick}
      data-testid={`household-item-button-${household.id}`}
      className={`grow flex flex-row w-full items-center p-4 ${
        selectedHousehold?.id === household.id ? "bg-lime-200" : "bg-tertiary"
      } rounded-lg my-2 hover:bg-lime-100 hover:cursor-pointer`}
    >
      <h3 className="text-left flex-grow dark:text-slate-900">{`${household.street} ${household.houseNumber} - ${household.city}`}</h3>
      {isActiveHousehold ? <ActiveHouseholdMarker /> : null}
    </button>
  );
}
