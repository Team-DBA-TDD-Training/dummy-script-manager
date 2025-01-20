const { defineConfig } = require("cypress");

/**
 * @behavior We are gonna pass NODE_ENV from pipeline to run on different
 * environment.
 */
const getBaseUrl = () => {
  switch(process.env.NODE_ENV) {
    case 'production':
      return "http://prod_url";
    case 'uat':
      return 'http://script-manager-backend-uat.us-east-1.elasticbeanstalk.com/';
    default:
      return 'http://localhost:3000'
  }
}

module.exports = defineConfig({
  e2e: {
    baseUrl: getBaseUrl(),
    specPattern: [
      'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'smoke/*.cy.{js,jsx,ts,tsx}',
      'acceptance/*.cy.{js,jsx,ts,tsx}'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
