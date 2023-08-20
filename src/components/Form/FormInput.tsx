"use client";
import { InputHTMLAttributes } from "react";

export default function FormInput({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="appearance-none dark:text-slate-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      {...rest}
    />
  );
}
