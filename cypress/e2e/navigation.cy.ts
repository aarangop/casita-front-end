describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Navigate to households page via header button", () => {
    cy.get("[data-cy='header-navigation-household']").click();
    cy.url().should("include", "household");
  });
});
