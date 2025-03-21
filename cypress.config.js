const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add any node event listeners here
    },
    specPattern: '**/*.cy.{js,jsx,ts,tsx}', // Look through the whole project for test files
  },
});