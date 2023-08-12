import {ReactNode} from "react";

interface NavigationItemProps {
    children: ReactNode,
    href: string
}

export default function NavigationItem(props: NavigationItemProps) {
    return (
        <a className="p-4" href={props.href}>{props.children}</a>
    )
}