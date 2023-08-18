"use client";

import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({ children, className, ...rest }: IButtonProps) {
  return (
    <button
      className={`rounded-full px-4 py-2 bg-emerald-700 hover:bg-emerald-600 hover:cursor-pointer text-slate-50 font-semibold ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
