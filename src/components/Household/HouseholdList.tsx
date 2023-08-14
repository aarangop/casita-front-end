"use client";

import {PrimaryButton} from "@/components/Button/PrimaryButton";
import React from "react";

interface IHouseholdListProps {
    currentHouseholdId?: string
}

export default function HouseholdList(props: IHouseholdListProps) {

    const [] = React.useState();

    const newHousehold = () => {
        console.log("Creating new household");
    }

    const households = [
        {
            id: "1",
            address: "Bluecherstr. 3a",
            zipCode: "38102",
            city: "Braunschweig"
        },
        {
            "id": "2",
            address: "Deulstr. 9",
            zipCode: "14307",
            city: "Berlin"
        }
    ]
    return (
        <div className="grow flex flex-col bg-secondary rounded-lg p-2">
            <div className="flex flex-col grow overflow-hidden">
                <h2 className="grow-0 p-4 sticky top-0 font-semibold text-slate-50">My Households</h2>
                <div className="flex-col grow">
                    {households.map((household, index) => <div key={`household-${household.id}`}>
                        <div className="p-4 bg-tertiary rounded-lg my-2 hover:bg-lime-100 hover:cursor-pointer">
                            <h3>{`${household.address} - ${household.city}`}</h3>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="grow-0">
                <PrimaryButton className="min-w-full" onClick={newHousehold}>New Household</PrimaryButton>
            </div>
        </div>
    )
}