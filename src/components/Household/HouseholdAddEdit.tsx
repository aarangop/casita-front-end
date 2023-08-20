"use client";

import { useAppSelector } from "@/store/hooks";
import React, { ChangeEvent, useEffect, useState } from "react";
import FormLabel from "@/components/Form/FormLabel";
import FormInput from "@/components/Form/FormInput";
import FormTextInput from "@/components/Form/FormTextInput";

export default function HouseholdAddEdit() {
  const selectedHousehold = useAppSelector(
    (state) => state.household.selectedHousehold,
  );
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const updateCity = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const updateAddress = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  useEffect(() => {
    setAddress(selectedHousehold ? selectedHousehold.address : "");
    setCity(selectedHousehold ? selectedHousehold.city : "");
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
            onChange={updateAddress}
            value={address}
          />
        </div>
        <div className="mb-4 max-w-fit">
          <FormLabel htmlFor="city">City</FormLabel>
          <FormTextInput
            id="city"
            placeholder="City"
            onChange={updateCity}
            value={city}
          />
        </div>
      </form>
    </div>
  );
}
