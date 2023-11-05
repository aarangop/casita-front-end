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
      className={`transition-all 
      rounded-full px-4 py-2 bg-error hover:bg-error-darker hover:cursor-pointer disabled:opacity-70 disabled:hover:bg-error disabled:hover:cursor-not-allowed  ${className}`}
      {...rest}
    >
      {children}
    </ActionButton>
  );
}
