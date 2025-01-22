const { defineConfig } = require("cypress");

module.exports = defineConfig({
  NODE_ENV: process.env.NODE_ENV || 'development', // Default to 'development'
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: [
      'acceptance/*.cy.{js,jsx,ts,tsx}'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
