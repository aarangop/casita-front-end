import {MouseEventHandler, useEffect} from "react";
import FormLabel from "@/components/Form/FormLabel";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import FormTextInput from "@/components/Form/FormTextInput";
import {PrimaryButton} from "@/components/Button/PrimaryButton";
import {DestructorButton} from "@/components/Button/DestructorButton";
import {Household} from "@/store/casitaApi";
import {DestructorButtonSecondary} from "@/components/Button/DestructorButtonSecondary";

// Define a validation schema for Household
export const newHouseholdValidationSchema = z.object({
  id: z.string().optional(),
  street: z.string().min(2, "A street is required"),
  houseNumber: z.string().min(1, "A house number is required"),
  zipCode: z.string().min(4, "A zip code is required"),
  city: z.string().min(1, "A city is required"),
  country: z.string().min(1, "A country is required"),
});

export type HouseholdSchema = z.infer<typeof newHouseholdValidationSchema>;

interface HouseholdFormProps {
  className?: string;
  onSubmit: (data: HouseholdSchema) => void;
  onDiscard?: () => void | null;
  onDelete?: (() => void) | null;
  household?: Household;
}

export default function HouseholdForm({
  className,
  onSubmit,
  onDiscard,
  onDelete,
  household,
}: HouseholdFormProps) {
  // React-hook-form hook call.
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<HouseholdSchema>({
    resolver: zodResolver(newHouseholdValidationSchema),
    defaultValues: household,
  });
  useEffect(() => {
    setValue("street", household?.street || "");
    setValue("houseNumber", household?.houseNumber || "");
    setValue("city", household?.city || "");
    setValue("zipCode", household?.zipCode || "");
    setValue("country", household?.country || "");
  }, [household, setValue]);
  const discard: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    reset();
    if (onDiscard) onDiscard();
  };
  const submit: SubmitHandler<HouseholdSchema> = (data) => {
    reset();
    onSubmit(data);
  };
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    reset();
    if (onDelete) onDelete();
  };
  return (
    <form
      className={`flex flex-col space-y-10 dark:bg-dark-2 p-2 w-fit rounded-lg ${className}`}
      onSubmit={handleSubmit(submit)}
    >
      <div className="flex flex-row space-x-2 ">
        <div className="flex flex-col ">
          <FormLabel htmlFor="street">Street</FormLabel>
          <FormTextInput
            dataTestId="household-street"
            register={register("street")}
            error={errors.street}
          />
        </div>
        <div className="flex flex-col">
          <FormLabel htmlFor="houseNumber">House Number</FormLabel>
          <FormTextInput
            register={register("houseNumber")}
            error={errors.houseNumber}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="flex flex-col">
          <FormLabel htmlFor="city">City</FormLabel>
          <FormTextInput register={register("city")} error={errors.city} />
        </div>
        <div className="flex flex-col">
          <FormLabel htmlFor="zipCode">ZIP Code</FormLabel>
          <FormTextInput
            register={register("zipCode")}
            error={errors.zipCode}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="flex flex-col">
          <FormLabel htmlFor="country">Country</FormLabel>
          <FormTextInput
            register={register("country")}
            error={errors.country}
          />
        </div>
      </div>
      <div className="flex min-w-full space-x-2 justify-end">
        <PrimaryButton
          className="w-32"
          type="submit"
          dataTestId="household-new-household-dialog-save-button"
        >
          Save
        </PrimaryButton>
        {onDiscard && (
          <DestructorButton
            className="w-32"
            onClick={discard}
            dataTestId={"household-new-household-dialog-discard-button"}
          >
            Discard
          </DestructorButton>
        )}
        {onDelete && (
          <DestructorButtonSecondary
            className="w-32"
            onClick={handleDelete}
            dataTestId="household-new-household-dialog-delete-button"
          >
            Delete
          </DestructorButtonSecondary>
        )}
      </div>
    </form>
  );
}
