import React from "react";
import HouseholdListItem from "@/features/Household/HouseholdListItem";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders } from "../utils/test-utils";
import DeleteHouseholdButton from "@/features/Household/DeleteHouseholdButton";
import "@testing-library/jest-dom";
import { fireEvent, queryByTestId, screen } from "@testing-library/dom";
import HouseholdList from "@/features/Household/HouseholdList";
import HouseholdRoot from "@/app/household/page";

const household1 = {
  id: "42",
  street: "Test Street",
  houseNumber: "42",
  city: "Test City",
  zipCode: "42",
  country: "Test Country",
  householdMembers: [],
};

const household2 = {
  id: "43",
  street: "Test Street 2",
  houseNumber: "43",
  city: "Another City",
  zipCode: "4343",
  country: "Another Country",
  householdMembers: [],
};
export const handlers = [
  rest.get("/api/households", (req, res, ctx) => {
    return res(ctx.json([household1, household2]));
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("HouseholdList", () => {
  it("Renders the households from server", () => {
    const households = [household1, household2];
    const component = renderWithProviders(
      <HouseholdList households={households} activeHousehold={null} />,
    );
    households.forEach((household) => {
      const listItem = screen.getByTestId(
        `household-item-button-${household.id}`,
      );
      // @ts-ignore
      expect(listItem).toBeInTheDocument();
    });
  });
});

describe("HouseholdListItem", () => {
  it("Renders the household's street address", async () => {
    const component = renderWithProviders(
      <HouseholdListItem household={household1} />,
      {
        preloadedState: household1,
      },
    );
    const buttonText = component.getByRole("heading");
    // @ts-ignore
    expect(buttonText).toHaveTextContent(
      `${household1.street} ${household1.houseNumber}`,
    );
  });
});

describe("HouseholdDeleteButton", () => {
  it("Is disabled when no household is selected", async () => {
    const component = renderWithProviders(
      <DeleteHouseholdButton
        dataTestId={"test-delete-household-button"}
        household={null}
      />,
    );

    // @ts-ignore
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("Is enabled when a household is selected", async () => {
    const component = renderWithProviders(
      <DeleteHouseholdButton
        household={household1}
        dataTestId={"test-delete-household-button"}
      />,
    );

    // @ts-ignore
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("Should render a new household dialog when new household button is pressed", async () => {
    const { store, getByText, getByTestId, queryByTestId } =
      renderWithProviders(<HouseholdRoot />);
    const newHouseholdButton = getByTestId("household-new-household-button");
    fireEvent.click(newHouseholdButton);
    expect(getByTestId("household-new-household-dialog")).toBeVisible();
  });
});
