import { ButtonHTMLAttributes } from "react";

export interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  dataTestId: string;
}

export default function ActionButton({
  dataTestId,
  children,
  className,
  ...rest
}: ActionButtonProps) {
  return (
    <button
      className={`rounded-full px-4 py-2 text-slate-50 font-semibold ${className}`}
      data-testid={dataTestId}
      {...rest}
    >
      {children}
    </button>
  );
}
