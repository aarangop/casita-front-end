import { LinkHTMLAttributes, ReactNode } from "react";

interface NavigationItemProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
  dataCy: string;
}

export default function NavigationItem(props: NavigationItemProps) {
  return (
    <a className="p-4" data-cy={props.dataCy} href={props.href}>
      {props.children}
    </a>
  );
}
