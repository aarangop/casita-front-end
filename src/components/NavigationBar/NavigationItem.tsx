import { LinkHTMLAttributes, ReactNode } from "react";

interface NavigationItemProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
  dataTestId: string;
}

export default function NavigationItem(props: NavigationItemProps) {
  return (
    <a className="p-4" data-test-id={props.dataTestId} href={props.href}>
      {props.children}
    </a>
  );
}
