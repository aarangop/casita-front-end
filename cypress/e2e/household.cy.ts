describe("Household E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/household");
  });

  // it("Adding a new household", () => {
  //   cy.get('[data-cy="new-household-button"]').click();
  // });
  it("Can read redux store", () => {
    cy.window().its("Cypress").its("store").invoke("getState");
  });

  it("Opens a 'New Household' dialog when new household button is pressed", () => {
    cy.dataTestId("household-new-household-button").click();
    cy.dataTestId("household-new-household-dialog").should("be.visible");
  });

  it("Creates a new household via the household form", () => {
    cy.dataTestId("household-new-household-button").click();
    cy.dataTestId("household-new-household-dialog")
      .find('input[name="street"]')
      .type("Street");
    cy.dataTestId("household-new-household-dialog")
      .find('input[name="houseNumber"]')
      .type("5");
    cy.dataTestId("household-new-household-dialog")
      .find('input[name="city"]')
      .type("City");
    cy.dataTestId("household-new-household-dialog")
      .find('input[name="zipCode"]')
      .type("10000");
    cy.dataTestId("household-new-household-dialog")
      .find('input[name="country"]')
      .type("Country");
    cy.dataTestId("household-new-household-dialog")
      .find("button")
      .contains("Save")
      .click();
  });
});
