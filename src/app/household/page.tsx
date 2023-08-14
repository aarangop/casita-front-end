import HouseholdList from "@/components/Household/HouseholdList";

export default function MyHomeRoot() {
    return (
        <div className="flex grow flex-row p-4 min-h-full">
            <div className="flex p-2 min-h-full min-w-20">
                <HouseholdList></HouseholdList>
            </div>
            <div className="flex grow p-2 min-h-full">

            </div>
        </div>
    )
}