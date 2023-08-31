"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps<TFormValues extends FieldValues> {
  register: UseFormRegister<TFormValues>;
}

export default function FormInput({
  register,
  ...rest
}: FormInputProps<FieldValues>) {
  return (
    <input
      {...register("name")}
      className="appearance-none dark:text-slate-50 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
}
