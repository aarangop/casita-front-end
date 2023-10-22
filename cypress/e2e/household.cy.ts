describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/household");
  });
  
  // it("Adding a new household", () => {
  //   cy.get('[data-cy="new-household-button"]').click();
  // });
  it("Can read redux store", () => {
    cy.window().its("Cypress").its("store").invoke("getState");
  });
});
