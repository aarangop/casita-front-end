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
      className={`transition-all rounded-full border-2 px-4 py-2 border-error text-error hover:border-error-darker hover:bg-error-darker hover:text-light-1 hover:cursor-pointer disabled:opacity-70 disabled:hover:cursor-not-allowed disabled:hover:bg-error  ${className}`}
      {...rest}
    >
      {children}
    </ActionButton>
  );
}
