import React from "react";
import { render } from "@testing-library/react";
import HouseholdListItem from "@/components/Household/HouseholdListItem";

describe("HouseholdListItem", () => {
  it("Renders a button with household's address and city", () => {
    render(
      <HouseholdListItem
        household={{
          id: "42",
          street: "Test Street",
          houseNumber: "42",
          city: "Test City",
          zipCode: "42",
          country: "Test Country",
          householdMembers: [],
        }}
      />,
    );
  });
});
