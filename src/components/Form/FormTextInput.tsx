"use client";

import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form"; // interface FormInputProps<T extends FieldValues>

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError;
  dataTestId?: string;
}

export default function FormTextInput({
  register,
  error,
  defaultValue,
  dataTestId,
  role,
  ...rest
}: FormInputProps) {
  return (
    <div>
      <input
        {...rest}
        role={role}
        data-testid={dataTestId}
        defaultValue={defaultValue}
        className={`appearance-none shadow-dark-1 shadow ${
          error ? "bg-error bg-opacity-20 border-error" : null
        } dark:bg-dark-3 rounded-lg w-full py-2 px-3 dark:text-light-2 text-dark-1 leading-tight`}
        {...register}
      />
      <p
        data-testid={`${dataTestId}-error`}
        role={`${role}-error-message`}
        className="text-error h-4 mb-2 text-left"
      >
        {error?.message}
      </p>
    </div>
  );
}
