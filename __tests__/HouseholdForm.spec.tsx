import { render } from "@testing-library/react";
import HouseholdForm from "@/features/Household/HouseholdForm";
import { fireEvent, screen } from "@testing-library/dom";
import React from "react";
import { setupServer } from "msw/node";

export const handlers = [
  // rest.get("http://localhost:8001/api/households", (req, res, ctx) => {
  //   return res(ctx.json([household1, household2]));
  // }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("HouseholdFormTests", () => {
  it("Save button is disabled if form is not complete", () => {
    render(<HouseholdForm onSubmit={() => {}} />);
    fireEvent.input(screen.getByRole("street-input"), {
      target: { value: "" },
    });
    fireEvent.input(screen.getByRole("house-number-input"), {
      target: { value: "" },
    });
    fireEvent.input(screen.getByRole("city-input"), { target: { value: "" } });
    fireEvent.input(screen.getByRole("zip-code-input"), {
      target: { value: "" },
    });
    fireEvent.input(screen.getByRole("country-input"), {
      target: { value: "" },
    });
    expect(screen.getByRole("save-household")).toBeDisabled();
  });

  it("Discard button is disabled if no household is provided", () => {
    render(
      <HouseholdForm
        onSubmit={() => {}}
        onDiscard={() => {}}
        household={undefined}
      />,
    );
    expect(screen.getByRole("discard-household-changes")).toBeDisabled();
  });

  it("Delete button is disabled if no household is provided", () => {
    render(
      <HouseholdForm
        onSubmit={() => {}}
        onDelete={() => {}}
        household={undefined}
      />,
    );
    expect(screen.getByRole("delete-household")).toBeDisabled();
  });
});
