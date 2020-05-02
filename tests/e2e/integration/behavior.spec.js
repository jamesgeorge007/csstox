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

  it("converts an input CSS snippet to the React Native equivalent", () => {
    const inputCSSRule = "transform: translate(10px, 5px) scale(5);";
    const result = {
      transform: [{ scale: 5 }, { translateY: 5 }, { translateX: 10 }],
    };
    cy.visit("/")
      .get(".code--input")
      .type(inputCSSRule)
      .get(".code--output")
      .should("have.value", JSON.stringify(result, null, 2));
  });

  it("converts an input CSS snippet to the JSS equivalent", () => {
    const inputCSSRule = "margin: 5px 7px 2px;";
    const result = {
      margin: "5px 7px 2px",
    };
    cy.visit("/")
      .get("select")
      .select("JSS")
      .get(".code--input")
      .type(inputCSSRule)
      .get(".code--output")
      .should("have.value", JSON.stringify(result, null, 2));
  });

  it("shows an error message for invalid CSS snippet", () => {
    const inputCSSRule = "margin: 5";
    const result = `Error translating CSS`;
    cy.visit("/")
      .get(".code--input")
      .type(inputCSSRule)
      .get(".code--output")
      .should((el) => {
        expect(el).to.contain(result);
      });
  });

  it("generates the React Native equivalent of default CSS rule available as placeholder", () => {
    const result = {
      fontSize: 18,
      lineHeight: 24,
      color: "red",
    };
    cy.visit("/")
      .get(".code--output")
      .should((el) => {
        expect(el).to.contain.text(JSON.stringify(result, null, 2));
      });
  });

  it("generates the JSS equivalent of default CSS rule available as placeholder", () => {
    const result = {
      fontSize: "18px",
      lineHeight: "24px",
      color: "red",
    };
    cy.visit("/")
      .get(".select")
      .select("JSS")
      .get(".code--output")
      .should((el) => {
        expect(el).to.contain.text(JSON.stringify(result, null, 2));
      });
  });
});
