import FormInput from "@/components/Form/FormInput";
import { InputHTMLAttributes } from "react";

export default function FormTextInput({
  children,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FormInput {...rest} type="text">
      {children}
    </FormInput>
  );
}
