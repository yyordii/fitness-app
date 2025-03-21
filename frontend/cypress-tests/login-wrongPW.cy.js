it('Tests what happens when u log in with a wrong password', () => {
    // Load "http://localhost:3000/index.html"
    cy.visit('http://localhost:3000/index.html')

    // Resize window to 1536 x 702
    cy.viewport(1536, 702)

    // Click on <input> #loginUsername
    cy.get('#loginUsername').click()

    // Fill "yordi" on <input> #loginUsername
    cy.get('#loginUsername').type('yordi')

    // Click on <input> #loginPassword
    cy.get('#loginPassword').click()

    // Fill "abc" on <input> #loginPassword
    cy.get('#loginPassword').type('abc')

    // Click on <button> "Login"
    cy.get('button').click()

    cy.get('#errorMessage').should('be.visible')
})