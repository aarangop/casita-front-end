"use client";

import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form"; // interface FormInputProps<T extends FieldValues>

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function FormInput({ register, error }: FormInputProps) {
  return (
    <div>
      <input
        className={`appearance-none ${
          error ? "bg-error bg-opacity-20 border-error" : null
        } dark:text-slate-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight`}
        {...register}
      />
      {error && <p className="text-error">{error.message}</p>}
    </div>
  );
}
