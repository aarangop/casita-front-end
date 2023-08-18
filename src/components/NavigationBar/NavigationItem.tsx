import { LinkHTMLAttributes, ReactNode } from "react";

interface NavigationItemProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode;
}

export default function NavigationItem(props: NavigationItemProps) {
  return (
    <a className="p-4" href={props.href}>
      {props.children}
    </a>
  );
}
