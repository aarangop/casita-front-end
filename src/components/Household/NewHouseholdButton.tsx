import { PrimaryButton } from "@/components/Button/PrimaryButton";
import React from "react";
import { useAppDispatch } from "@/store/hooks";
import { Household, useCreateHouseholdMutation } from "@/store/casitaApi";
import { v4 as uuidv4 } from "uuid";
import { setSelectedHousehold } from "@/store/features/householdSlice";

export default function NewHouseholdButton() {
  const dispatch = useAppDispatch();

  const [createHousehold, _] = useCreateHouseholdMutation();

  const createNewHousehold = () => {
    let newHousehold: Household = {
      id: uuidv4(),
      city: "Minas Tirith",
      country: "Gondor",
      houseNumber: "42",
      householdMembers: [],
      street: "New Street",
      zipCode: "4242",
    };
    createHousehold({ household: newHousehold }).then((result) => {
      if ("data" in result) {
        dispatch(setSelectedHousehold(result.data));
      }
    });
  };
  return (
    <PrimaryButton className="min-w-full" onClick={createNewHousehold}>
      New Household
    </PrimaryButton>
  );
}
