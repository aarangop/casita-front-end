"use client";

import HouseholdList from "@/components/Household/HouseholdList";
import HouseholdAddEdit from "@/components/Household/HouseholdAddEdit";
import { useGetHouseholdsQuery } from "@/store/casitaApi";
import NewHouseholdButton from "@/components/Household/NewHouseholdButton";
import { useAppSelector } from "@/store/hooks";

export default function HouseholdRoot() {
  const {
    data: households,
    // isLoading,
    isSuccess,
    // isError,
    // error,
  } = useGetHouseholdsQuery();

  const activeHousehold = useAppSelector(
    (state) => state.household.activeHousehold,
  );
  const selectedHousehold = useAppSelector(
    (state) => state.household.selectedHousehold,
  );

  return (
    <main className="flex grow flex-row p-4 min-h-full">
      <div className="flex flex-col p-2 min-h-full min-w-20 bg-secondary p-2 rounded shadow-md">
        {isSuccess && (
          <HouseholdList
            className="flex-grow"
            activeHousehold={activeHousehold}
            households={households || []}
          ></HouseholdList>
        )}
        <NewHouseholdButton />
      </div>
      <div className="flex grow p-2 min-h-full">
        <div className="flex w-full flex-col">
          <HouseholdAddEdit selectedHousehold={selectedHousehold} />
        </div>
      </div>
    </main>
  );
}
