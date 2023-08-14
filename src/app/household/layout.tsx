import NavigationBar from "@/components/NavigationBar/NavigationBar";
import {ILayoutProps} from "@/app/layout";

export default function HouseholdLayout(props: ILayoutProps) {
    return <main className="flex flex-col min-h-screen">
        <NavigationBar/>
        {props.children}
    </main>
}