import React from "react";
import HouseholdListItem, {
  householdListItemDisplayText,
} from "@/features/Household/HouseholdListItem";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders } from "../utils/test-utils";
import DeleteHouseholdButton from "@/features/Household/DeleteHouseholdButton";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/dom";
import HouseholdList from "@/features/Household/HouseholdList";
import HouseholdRoot from "@/app/household/page";
import { Household } from "@/store/casitaApi";

const household1 = {
  id: "42",
  street: "Test Street",
  houseNumber: "42",
  city: "Test City",
  zipCode: "12345",
  country: "Test Country",
  householdMembers: [],
} as Household;

const household2 = {
  id: "43",
  street: "Test Street 2",
  houseNumber: "",
  city: "Another City",
  zipCode: "4343",
  country: "Another Country",
  householdMembers: [],
} as Household;
export const handlers = [
  rest.get("http://localhost:8001/api/households", (req, res, ctx) => {
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
    expect(buttonText).toHaveTextContent(
      `${household1.street} ${household1.houseNumber}`,
    );
  });
});

describe("HouseholdDeleteButton", () => {
  it("Is disabled when no household is selected", async () => {
    renderWithProviders(
      <DeleteHouseholdButton
        dataTestId={"test-delete-household-button"}
        household={null}
      />,
    );

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("Is enabled when a household is selected", async () => {
    renderWithProviders(
      <DeleteHouseholdButton
        household={household1}
        dataTestId={"test-delete-household-button"}
      />,
    );

    expect(screen.getByRole("button")).not.toBeDisabled();
  });
});
describe("New Household Button", () => {
  it("Check that a 'new household dialog' is shown when pressed", async () => {
    const { getByTestId } = renderWithProviders(<HouseholdRoot />);
    const newHouseholdButton = getByTestId("household-new-household-button");
    fireEvent.click(newHouseholdButton);
    expect(getByTestId("household-new-household-dialog")).toBeVisible();
  });
});
describe("Household page HouseholdForm", () => {
  it("Checks that the household form is populated when a household is selected from the household list", async () => {
    renderWithProviders(<HouseholdRoot />);
    const household1Button = await screen.findByText(
      householdListItemDisplayText(household1),
    );
    fireEvent.click(household1Button);
    expect(screen.getByDisplayValue(household1.street)).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(household1.houseNumber),
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue(household1.city)).toBeInTheDocument();
    expect(screen.getByDisplayValue(household1.zipCode)).toBeInTheDocument();
    expect(screen.getByDisplayValue(household1.country)).toBeInTheDocument();
  });

  it("Check that a new household button appears when a new household is saved", () => {
    renderWithProviders(<HouseholdRoot />);
  });
});
