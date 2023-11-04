import { PropsWithChildren } from "react";

export interface BaseDialogProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  dataTestId: string;
  title?: string;
  description?: string;
}

export default function BaseDialog({
  isOpen = false,
  onClose,
  children,
  dataTestId,
  title,
  description,
}: BaseDialogProps) {
  return (
    <div className={`${isOpen ? "visible" : "invisible"} relative z-10`}>
      <div className="fixed inset-0 bg-black/50"></div>
      <div className="fixed inset-0 overflow-y-auto">
        <div
          className="flex min-h-full items-center justify-center text-center"
          data-testid={dataTestId}
        >
          <div className="min-h-fit dark:bg-dark-2 rounded-lg flex flex-col p-4">
            <h2 className="mb-2 font-semibold text-left">{title}</h2>
            <p className="text-slate-300 text-left">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
