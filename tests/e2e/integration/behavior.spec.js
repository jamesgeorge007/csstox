describe("behavior", () => {
  it("is possible to enter text to the textarea intended to receive input CSS snippet", () => {
    const cssSnippet = "padding: 10px;";
    cy.visit("/")
      .get(".code--input")
      .type(cssSnippet)
      .should("have.value", cssSnippet);
  });

  it("expects to find readonly attribute associated with the textarea intended to display the result", () => {
    cy.visit("/").get(".code--output").should("have.attr", "readonly");
  });
});
