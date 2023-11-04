"use client";

import {useAppDispatch, useAppSelector} from "@/store/hooks";
import React, {useEffect} from "react";
import FormLabel from "@/components/Form/FormLabel";
import {PrimaryButton} from "@/components/Button/PrimaryButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import FormTextInput from "@/components/Form/FormTextInput";
import {Household, useCreateHouseholdMutation} from "@/store/casitaApi";
import HouseholdMemberSelect from "@/features/Household/HouseholdMemberSelect";
import {setSelectedHousehold} from "@/store/features/householdSlice";

// Define a validation schema for Household
export const newHouseholdValidationSchema = z.object({
  id: z.string().optional(),
  street: z.string().min(2, "Address is required"),
  houseNumber: z.string().min(1, "A street number is required"),
  zipCode: z.string().min(4, "Zip code is required"),
  city: z.string().min(1, "Street is required"),
  country: z.string().min(1, "Country is required"),
});

type HouseholdSchema = z.infer<typeof newHouseholdValidationSchema>;

export default function HouseholdAddEdit({
  selectedHousehold,
}: {
  selectedHousehold: Household | null;
}) {
  // Use RTK Query hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HouseholdSchema>({
    resolver: zodResolver(newHouseholdValidationSchema),
    defaultValues: selectedHousehold || undefined,
  });
  const [createNewHousehold] = useCreateHouseholdMutation();

  // Redux dispatcher and selectors
  const dispatch = useAppDispatch();
  const formHeader = useAppSelector((state) =>
    state.household.selectedHousehold
      ? `${state.household.selectedHousehold.street} ${state.household.selectedHousehold.houseNumber} - ${state.household.selectedHousehold.city}`
      : "",
  );

  const onSubmit: SubmitHandler<HouseholdSchema> = async (data) => {
    const householdId = selectedHousehold ? selectedHousehold.id : "";
    const householdMembers = selectedHousehold
      ? selectedHousehold.householdMembers
      : [];
    await createNewHousehold({
      household: {
        id: householdId,
        householdMembers: householdMembers,
        ...data,
      },
    }).then((result) => {
      if ("data" in result) {
        dispatch(setSelectedHousehold(result.data));
      } else {
        console.log(result);
      }
    });
  };

  // Form is rendered initially without the default values.
  // Need to reset the form when the default value changes for the fields to be populated.
  useEffect(() => {
    if (selectedHousehold) reset(selectedHousehold);
  }, [reset, selectedHousehold]);

  return (
    <div className="flex flex-col min-w-full shadow-md rounded p-4 space-y-2">
      <h1
        className="font-semibold"
        data-testid="household-add-edit-selected-household"
      >
        {formHeader}
      </h1>
      <form
        className="flex flex-col min-h-full p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row space-x-4">
          <div className="mb-4 max-w-fit flex flex-col">
            <FormLabel htmlFor="street">Street</FormLabel>
            <FormTextInput
              id="street"
              name="street"
              register={register("street")}
              error={errors.street}
            />
          </div>
          <div className="mb-4 max-w-fit">
            <FormLabel htmlFor="house-number">House Number</FormLabel>
            <FormTextInput
              id="house-number"
              name="address"
              register={register("houseNumber")}
              error={errors.houseNumber}
            />
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="mb-4 max-w-fit">
            <FormLabel htmlFor="city">City</FormLabel>
            <FormTextInput
              id="city"
              name="city"
              register={register("city")}
              error={errors.city}
            />
          </div>
          <div className="mb-4 max-w-fit">
            <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
            <FormTextInput
              id="zipCode"
              name="zipCode"
              register={register("zipCode")}
              error={errors.zipCode}
            />
          </div>
        </div>
        <div className="mb-4 max-w-fit">
          <FormLabel htmlFor="country">Country</FormLabel>
          <FormTextInput
            id="country"
            register={register("country")}
            error={errors.country}
          />
        </div>
        <div className="flex flex-row space-x-4">
          <PrimaryButton
            dataTestId="save-household-button"
            className="w-fit"
            type="submit"
          >
            Save
          </PrimaryButton>
          {/*<DeleteHouseholdButton household={null}></DeleteHouseholdButton>*/}
        </div>
      </form>
      <hr className="mb-4" />
      {selectedHousehold && (
        <div>
          <h2 className="font-semibold mb-4">Household Members</h2>
          <HouseholdMemberSelect household={selectedHousehold} />
        </div>
      )}
    </div>
  );
}
