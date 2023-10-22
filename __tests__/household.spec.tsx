import React from "react";
import HouseholdListItem from "@/components/Household/HouseholdListItem";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders } from "../utils/test-utils";

const testHousehold = {
  id: "42",
  street: "Test Street",
  houseNumber: "42",
  city: "Test City",
  zipCode: "42",
  country: "Test Country",
  householdMembers: [],
};

export const handlers = [
  rest.get("/api/households", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: "42",
          street: "Test Street",
          houseNumber: "42",
          city: "Test City",
          zipCode: "42",
          country: "Test Country",
          householdMembers: [],
        },
      ]),
    );
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("HouseholdListItem", () => {
  it("Renders the household's street address", async () => {
    const initalHousehold = {
      selectedHousehold: testHousehold,
    };
    const component = renderWithProviders(
      <HouseholdListItem household={testHousehold} />,
      {
        preloadedState: testHousehold,
      },
    );
    const button = component.getByRole("heading");
    // @ts-ignore
    expect(button).toHaveTextContent(
      `${testHousehold.street} ${testHousehold.houseNumber}`,
    );
  });
});
