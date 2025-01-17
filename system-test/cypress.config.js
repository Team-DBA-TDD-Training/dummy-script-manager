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
    specPattern: ['cypress/e2e/front-end/**/*.cy.{js,jsx,ts,tsx}'],
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
