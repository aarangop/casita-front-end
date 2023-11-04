"use client";

import HouseholdList from "@/features/Household/HouseholdList";
import { useGetHouseholdsQuery } from "@/store/casitaApi";
import NewHouseholdButton from "@/features/Household/NewHouseholdButton";
import { useAppSelector } from "@/store/hooks";
import NewHouseholdDialog from "@/features/Household/NewHouseholdDialog";
import { useState } from "react";
import HouseholdForm from "@/features/Household/HouseholdForm";

export default function HouseholdRoot() {
  const {
    data: households,
    // isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetHouseholdsQuery();
  const [newHouseholdDialogIsOpen, setNewHouseholdDialogIsOpen] =
    useState(false);

  const activeHousehold = useAppSelector(
    (state) => state.household.activeHousehold,
  );
  const selectedHousehold = useAppSelector(
    (state) => state.household.selectedHousehold,
  );

  const saveHousehold = () => {};
  const discardChanges = () => {};
  const deleteHousehold = () => {};

  const selectedHouseholdHeaderText = useAppSelector((state) =>
    state.household.selectedHousehold
      ? `${state.household.selectedHousehold.street} ${state.household.selectedHousehold.houseNumber} - ${state.household.selectedHousehold.city}`
      : null,
  );
  return (
    <main className="flex grow flex-row p-4 min-h-full space-x-2">
      <div className="flex flex-col min-h-full min-w-20 bg-secondary p-2 rounded-lg shadow-md">
        {isSuccess && (
          <HouseholdList
            className="flex-grow min-w-[20]"
            activeHousehold={activeHousehold}
            households={households || []}
          ></HouseholdList>
        )}
        <NewHouseholdButton
          dataTestId="household-new-household-button"
          onClick={() => {
            setNewHouseholdDialogIsOpen(true);
            console.log("Opening dialog!");
          }}
        />
      </div>
      <div className="flex grow p-4 rounded-lg bg-dark-2">
        <div className="flex w-fit flex-col bg-dark-2">
          <h2 className="h-4 mb-4 font-semibold">
            {selectedHouseholdHeaderText}
          </h2>
          <HouseholdForm
            onSubmit={saveHousehold}
            onDiscard={discardChanges}
            onDelete={deleteHousehold}
          />
        </div>
      </div>
      <NewHouseholdDialog
        dataTestId="household-new-household-dialog"
        isOpen={newHouseholdDialogIsOpen}
        onClose={() => setNewHouseholdDialogIsOpen(false)}
      />
    </main>
  );
}
