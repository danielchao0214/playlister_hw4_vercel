describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://playlister-hw4-vercel.vercel.app/')


    cy.get('.css-11iqw2i > .MuiButtonBase-root').click();
    
    cy.get('[tabindex="0"] > a').click();

    cy.url().should('include', '/login');

    cy.get('#email').type('email')
    cy.get('#email').should('have.value', 'email')

    cy.get('#password').type('12345678')
    cy.get('#password').should('have.value', '12345678')

    cy.get('.css-1y8ugea > .MuiBox-root > .MuiButtonBase-root')
   
  })
})