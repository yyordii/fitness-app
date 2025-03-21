it('Should be allowing us to login into the webapplication.', () => {
    // Load "http://localhost:3000/index.html"
    cy.visit('http://localhost:3000/index.html')

    // Resize window to 1536 x 702
    cy.viewport(1536, 702)

    cy.wait(3000);
    // Click on <input> #loginUsername
    cy.get('#loginUsername').click()

    // Fill "yordi" on <input> #loginUsername
    cy.get('#loginUsername').type('yordi')

    // Press Tab on input
    cy.get('#loginPassword').click()

    // Fill "test" on <input> #loginPassword
    cy.get('#loginPassword').type('test')

    // Press Enter on input
    cy.get('#loginPassword').type('{Enter}')
})