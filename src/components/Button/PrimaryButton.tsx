"use client";

import ActionButton, {
  ActionButtonProps,
} from "@/components/Button/ActionButton";

export function PrimaryButton({
  children,
  className,
  dataTestId,
  ...rest
}: ActionButtonProps) {
  return (
    <ActionButton
      dataTestId={dataTestId}
      className={`rounded-full px-4 py-2 bg-emerald-700 hover:bg-emerald-600 hover:cursor-pointer  ${className}`}
      {...rest}
    >
      {children}
    </ActionButton>
  );
}
