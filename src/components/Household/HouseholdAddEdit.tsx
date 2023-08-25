"use client";

import { useAppSelector } from "@/store/hooks";
import React, { useEffect, useState } from "react";
import FormLabel from "@/components/Form/FormLabel";
import FormInput from "@/components/Form/FormInput";
import FormTextInput from "@/components/Form/FormTextInput";
import { PrimaryButton } from "@/components/Button/PrimaryButton";
import { householdApi } from "@/store/features/householdApi";
import { Household } from "@/types/Household";

export default function HouseholdAddEdit() {
  // Fetch the selected household from redux state.
  const selectedHousehold = useAppSelector(
    (state) => state.household.selectedHousehold,
  );

  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [addNewHousehold] = householdApi.usePostNewHouseholdMutation();
  const [updateHousehold] = householdApi.useUpdateHouseholdMutation();

  const onSave = () => {
    const household = {
      id: selectedHousehold ? selectedHousehold.id : null,
      address,
      city,
    } as Household;
    if (!household.id) {
      addNewHousehold(household);
    } else {
      updateHousehold(household);
    }
  };

  useEffect(() => {
    if (selectedHousehold) {
      setAddress(selectedHousehold.address);
      setCity(selectedHousehold.city);
    }
  }, [selectedHousehold]);

  return (
    <div className="flex grow flex-col min-w-full min-h-full shadow-md rounded p-4">
      <h1 className="font-semibold">
        {address} - {city}
      </h1>
      <form className="flex flex-col min-h-full p-4">
        <div className="mb-4 max-w-fit">
          <FormLabel htmlFor="address">Address</FormLabel>
          <FormInput
            id="address"
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="mb-4 max-w-fit">
          <FormLabel htmlFor="city">City</FormLabel>
          <FormTextInput
            id="city"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="mb-4 max-w-fit"></div>
        <PrimaryButton className="w-fit" onClick={onSave}>
          Save
        </PrimaryButton>
      </form>
    </div>
  );
}
