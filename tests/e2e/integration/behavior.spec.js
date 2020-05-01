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

  it('converts an input CSS snippet to the React Native equivalent', () => {
    const inputCSSRule = 'transform: translate(10px, 5px) scale(5);';
    const result = {
      transform: [
        { scale: 5 },
        { translateY: 5 },
        { translateX: 10 },
      ]
    };
    cy.visit("/").get(".code--input").type(inputCSSRule).get(".code--output").should("have.value", JSON.stringify(result, null, 2));
  });

  it('converts an input CSS snippet to the JSS equivalent', () => {
    const inputCSSRule = 'margin: 5px 7px 2px;';
    const result = {
      "margin": "5px 7px 2px"
    };
    cy.visit("/").get('select').select('JSS').get(".code--input").type(inputCSSRule).get(".code--output").should("have.value", JSON.stringify(result, null, 2));
  });
});
