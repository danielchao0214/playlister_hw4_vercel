describe('Create Account Existing', () => {
  it('Create Account', () => {
    cy.visit('https://playlister-hw4-vercel.vercel.app/')
    
    cy.get('.css-11iqw2i > .MuiButtonBase-root').click();
    
    cy.get('[tabindex="-1"] > a').click();
    
    cy.url().should('include', '/register/');

    cy.get('#firstName').type("Name");
    cy.get('#firstName').should('have.value', 'Name')

    cy.get('#lastName').type('LastName')
    cy.get('#lastName').should('have.value', 'LastName')

    cy.get('#email').type('email')
    cy.get('#email').should('have.value', 'email')

    cy.get('#password').type('12345678')
    cy.get('#password').should('have.value', '12345678')

    cy.get('#passwordVerify').type('12345678')
    cy.get('#passwordVerify').should('have.value', '12345678')

    cy.get('.css-binzgt > .MuiBox-root > .MuiButtonBase-root')

  })
})