"use client"; // Browser extensions mess with the dom

import { LabelHTMLAttributes } from "react";

export default function FormLabel({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="block text-left dark:text-slate-200 text-slate-700 text-sm font-bold mb-2"
      {...props}
    >
      {children}
    </label>
  );
}
