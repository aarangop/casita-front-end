import { PrimaryButton } from "@/components/Button/PrimaryButton";
import React, { MouseEventHandler } from "react";

interface NewHouseholdButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  dataTestId: string;
}

export default function NewHouseholdButton({
  onClick,
  dataTestId,
}: NewHouseholdButtonProps) {
  return (
    <PrimaryButton
      dataTestId={dataTestId}
      className="min-w-full"
      onClick={onClick}
    >
      New Household
    </PrimaryButton>
  );
}
