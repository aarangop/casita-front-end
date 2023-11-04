import ActionButton, {
  ActionButtonProps,
} from "@/components/Button/ActionButton";
import { FaTrashCan } from "react-icons/fa6";

export function DestructorButtonSecondary({
  children,
  className,
  dataTestId,
  ...rest
}: ActionButtonProps) {
  return (
    <ActionButton
      dataTestId={dataTestId}
      icon={<FaTrashCan />}
      className={`rounded-full border-2 px-4 py-2 border-error text-error hover:opacity-60 hover:cursor-pointer  ${className}`}
      {...rest}
    >
      {children}
    </ActionButton>
  );
}
