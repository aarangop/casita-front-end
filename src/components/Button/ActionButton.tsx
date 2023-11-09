import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestId: string;
  icon?: ReactNode;
}

export default function ActionButton({
  dataTestId,
  children,
  className,
  icon,
  ...rest
}: ActionButtonProps) {
  return (
    <button
      className={`flex flex-row items-center rounded-lg px-4 py-2 font-semibold ${className}`}
      data-testid={dataTestId}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
