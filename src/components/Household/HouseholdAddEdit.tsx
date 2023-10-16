"use client";

import { useAppSelector } from "@/store/hooks";
import React from "react";
import FormLabel from "@/components/Form/FormLabel";
import { PrimaryButton } from "@/components/Button/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormTextInput from "@/components/Form/FormTextInput";
import { useCreateHouseholdMutation } from "@/store/casitaApi";
import { householdValidationSchema } from "@/schemas/Household";

type HouseholdSchema = z.infer<typeof householdValidationSchema>;

export default function HouseholdAddEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HouseholdSchema>({
    resolver: zodResolver(householdValidationSchema),
  });

  // Fetch the selected household from redux state.
  const selectedHousehold = useAppSelector(
    (state) => state.household.selectedHousehold,
  );

  const [createNewHousehold, result] = useCreateHouseholdMutation();

  const onSubmit: SubmitHandler<HouseholdSchema> = async (data) => {
    const payload = await createNewHousehold({ household: data });
    console.log(payload);
  };

  return (
    (result.isLoading && <div>loading...</div>) || (
      <div className="flex grow flex-col min-w-full min-h-full shadow-md rounded p-4">
        <h1 className="font-semibold">
          {selectedHousehold ? selectedHousehold.street : ""} -{" "}
          {selectedHousehold ? selectedHousehold.city : ""}
        </h1>
        <form
          className="flex flex-col min-h-full p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 max-w-fit">
            <FormLabel htmlFor="address">Address</FormLabel>
            <FormTextInput
              id="address"
              name="address"
              register={register("street")}
              error={errors.address}
            />
          </div>
          <div className="flex flex-row">
            <div className="mb-4 max-w-fit">
              <FormLabel htmlFor="city">City</FormLabel>
              <FormTextInput
                id="city"
                name="city"
                register={register("city")}
                error={errors.city}
              />
            </div>
            <div className="ml-4 mb-4 max-w-fit">
              <FormLabel htmlFor="country">Country</FormLabel>
              <FormTextInput
                id="country"
                register={register("country")}
                error={errors.country}
              />
            </div>
          </div>
          <PrimaryButton className="w-fit" type="submit">
            Save
          </PrimaryButton>
        </form>
      </div>
    )
  );
}
