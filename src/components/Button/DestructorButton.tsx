import ActionButton, {
  ActionButtonProps,
} from "@/components/Button/ActionButton";

export function DestructorButton({
  children,
  className,
  dataTestId,
  ...rest
}: ActionButtonProps) {
  return (
    <ActionButton
      dataTestId={dataTestId}
      className={`rounded-full px-4 py-2 bg-error hover:opacity-60 hover:cursor-pointer  ${className}`}
      {...rest}
    >
      {children}
    </ActionButton>
  );
}
