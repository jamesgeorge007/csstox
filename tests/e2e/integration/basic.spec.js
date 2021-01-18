describe("basic workflow", () => {
  it("renders without crashing", () => {
    cy.visit("/");
  });

  it("expects to find the select box defaulting to React Native", () => {
    cy.visit("/")
      .get("[data-testid=select]")
      .should("have.value", "React Native");
  });
});
