import { render } from "@testing-library/react";
import HouseholdForm from "@/features/Household/HouseholdForm";
import { fireEvent, screen } from "@testing-library/dom";

describe("HouseholdFormTests", () => {
  it("Shows error message when street is not provided", () => {
    render(<HouseholdForm onSubmit={() => {}} />);
    const streetInput = screen.getByTestId("household-street");
    fireEvent.change(streetInput, {
      target: { value: "" },
    });
    fireEvent.click(screen.getByText("Save"));
    expect(screen.getByTestId("household-street-error")).toHaveTextContent(
      "A street is required",
    );
  });
});
