describe('behavior', () => {
  it('is possible to enter text to the textarea intended to receive input CSS snippet', () => {
    const cssSnippet = 'padding: 10px;';
    cy.visit('/')
    .get('.code--input')
    .type(cssSnippet)
    .should('have.value', cssSnippet)
  })
});
