it('Should allow a user to login, let them go to their profile and add a new workout to our database', () => {
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

    // Fill "test" on <input> #loginPassword
    cy.get('#loginPassword').type('test')

    // Click on <button> "Login"
    cy.get('button').click()

    cy.get('.dropbtn').click()
    // Click on <a> "Profile"
    cy.get('[href="./profile.html"]').click()

    // Scroll wheel by X:0, Y:864
    cy.scrollTo(0, 660)

    // Click on <input> #workoutName
    cy.get('#workoutName').click()

    // Fill "test1" on <input> #workoutName
    cy.get('#workoutName').type('test1')

    // Click on <input> #muscleGroup
    cy.get('#muscleGroup').click()

    // Fill "test2" on <input> #muscleGroup
    cy.get('#muscleGroup').type('test2')

    // Click on <input> #sets
    cy.get('#sets').click()

    // Fill "4" on <input> #sets
    cy.get('#sets').type('4')

    // Click on <input> #reps
    cy.get('#reps').click()

    // Fill "5" on <input> #reps
    cy.get('#reps').type('5')

    // Click on <input> #weight
    cy.get('#weight').click()

    // Fill "10" on <input> #weight
    cy.get('#weight').type('10')

    // Fill "lbs" on <select> #unit
    cy.get('#unit').select('lbs')


    // Fill "kg" on <select> #unit
    cy.get('#unit').select('kg')

    // Click on <textarea> #notes
    cy.get('#notes').click()

    // Fill "geen" on <textarea> #notes
    cy.get('#notes').type('geen')

    // Click on <button> "Add Workout"
    cy.get('button:nth-child(8)').click()
})