"use client";

import { useAppSelector } from "@/store/hooks";
import React from "react";
import FormLabel from "@/components/Form/FormLabel";
import FormInput from "@/components/Form/FormInput";
import FormTextInput from "@/components/Form/FormTextInput";
import { PrimaryButton } from "@/components/Button/PrimaryButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  address: z.string().min(2, "Address is required"),
  city: z.string().min(1, "Street is required"),
  country: z.string().min(1, "Country is required"),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function HouseholdAddEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  // Fetch the selected household from redux state.
  const selectedHousehold = useAppSelector(
    (state) => state.household.selectedHousehold,
  );

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex grow flex-col min-w-full min-h-full shadow-md rounded p-4">
      <h1 className="font-semibold">
        {selectedHousehold ? selectedHousehold.address : ""} -{" "}
        {selectedHousehold ? selectedHousehold.city : ""}
      </h1>
      <form
        className="flex flex-col min-h-full p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 max-w-fit">
          <FormLabel htmlFor="address">Address</FormLabel>
          <FormInput
            id="address"
            type="text"
            placeholder="Address"
            register={register}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>
        <div className="flex flex-row">
          <div className="mb-4 max-w-fit">
            <FormLabel htmlFor="city">City</FormLabel>
            <FormTextInput id="city" placeholder="City" {...register("city")} />
            {errors.city && <span>{errors.city.message}</span>}
          </div>
          <div className="ml-4 mb-4 max-w-fit">
            <FormLabel htmlFor="country">Country</FormLabel>
            <FormTextInput
              id="country"
              placeholder="Country"
              {...register("country")}
            />
          </div>
        </div>
        <PrimaryButton className="w-fit" type="submit">
          Save
        </PrimaryButton>
      </form>
    </div>
  );
}
