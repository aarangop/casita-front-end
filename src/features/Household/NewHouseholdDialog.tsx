import BaseDialog, { BaseDialogProps } from "@/components/Dialog/BaseDialog";
import HouseholdForm, {
  HouseholdSchema,
} from "@/features/Household/HouseholdForm";
import { SubmitHandler } from "react-hook-form";
import { useCreateHouseholdMutation } from "@/store/casitaApi";
import { useAppDispatch } from "@/store/hooks";
import { setSelectedHousehold } from "@/store/features/householdSlice";

interface NewHouseholdDialogProps extends BaseDialogProps {
  isOpen: boolean;
  dataTestId: string;
}

export default function NewHouseholdDialog({
  isOpen,
  onClose,
  dataTestId,
}: NewHouseholdDialogProps) {
  const [createHousehold, result] = useCreateHouseholdMutation();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<HouseholdSchema> = async (data) => {
    createHousehold({
      household: {
        householdMembers: [],
        ...data,
      },
    });
    if (result) dispatch(setSelectedHousehold(result.data!));
    onClose();
  };

  return (
    <BaseDialog
      title="New Household"
      description="Enter your new household's details!"
      dataTestId={dataTestId}
      onClose={onClose}
      isOpen={isOpen}
    >
      <div className="rounded-lg p-4 flex flex-col">
        <div className="mt-2 space-y-2">
          <HouseholdForm
            onDiscard={onClose}
            onSubmit={onSubmit}
            onDelete={null}
            household={{
              street: "",
              houseNumber: "",
              city: "",
              zipCode: "",
              country: "",
              householdMembers: [],
            }}
          />
        </div>
      </div>
    </BaseDialog>
  );
}
