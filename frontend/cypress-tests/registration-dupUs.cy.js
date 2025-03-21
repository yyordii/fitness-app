it('Tests the reaction of the register with a duplicate username', () => {
    // Load "http://localhost:3000/index.html"
    cy.visit('http://localhost:3000/index.html')

    // Resize window to 1536 x 702
    cy.viewport(1536, 702)

    // Click on <a> "Register"
    cy.get('[href="register.html"]').click()

    // Click on <input> #registerUsername
    cy.get('#registerUsername').click()

    // Fill "yordi" on <input> #registerUsername
    cy.get('#registerUsername').type('yordi')

    // Click on <input> #registerPassword
    cy.get('#registerPassword').click()

    // Fill "test123" on <input> #registerPassword
    cy.get('#registerPassword').type('test123')

    // Click on <button> "Register"
    cy.get('button').click()
})