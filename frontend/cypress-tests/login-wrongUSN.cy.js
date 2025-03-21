it('Tests what happens when u enter a wrong username', () => {
    // Load "http://localhost:3000/index.html"
    cy.visit('http://localhost:3000/index.html')

    // Resize window to 1536 x 702
    cy.viewport(1536, 702)

    // Click on <input> #loginUsername
    cy.get('#loginUsername').click()

    // Fill "aliboeboe" on <input> #loginUsername
    cy.get('#loginUsername').type('aliboeboe')

    // Click on <form> "Login"
    cy.get('#loginForm').click()

    // Click on <input> #loginPassword
    cy.get('#loginPassword').click()

    // Fill "123" on <input> #loginPassword
    cy.get('#loginPassword').type('123')

    // Click on <button> "Login"
    cy.get('button').click()

    cy.get('#errorMessage').should('be.visible')
})