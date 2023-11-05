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
      className={`transition-all rounded-full px-4 py-2 bg-primary hover:bg-primary-darker hover:cursor-pointer disabled:opacity-80 disabled:hover:bg-primary disabled:hover:cursor-not-allowed  ${className}`}
      {...rest}
    >
      {children}
    </ActionButton>
  );
}
