import { Household, useDeleteHouseholdMutation } from "@/store/casitaApi";
import React from "react";
import ActionButton, {
  ActionButtonProps,
} from "@/components/Button/ActionButton";

interface DeleteHouseholdButtonProps extends ActionButtonProps {
  household: Household | null;
}

export default function DeleteHouseholdButton({
  household,
}: DeleteHouseholdButtonProps) {
  const [deleteHouseholdMutation] = useDeleteHouseholdMutation();
  const deleteHousehold = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (household?.id) {
      deleteHouseholdMutation({ id: household.id });
    }
  };

  return (
    <div>
      <ActionButton
        dataTestId="delete-household-button"
        disabled={household === null}
        className="bg-error disabled:opacity-20"
        onClick={deleteHousehold}
      >
        Delete
      </ActionButton>
    </div>
  );
}
