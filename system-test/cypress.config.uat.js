const { defineConfig } = require("cypress");

module.exports = defineConfig({
  NODE_ENV: process.env.NODE_ENV || 'development', // Default to 'development'
  e2e: {
    baseUrl: 'http://script-manager-frontend-uat.us-east-1.elasticbeanstalk.com/',
    /**
     * Since we are running against actual environment without stub, tests with
     * stub should be excluded
     */
    excludeSpecPattern: [
      'acceptance/ai.cy.js'
    ],
    specPattern: [
      'acceptance/*.cy.{js,jsx,ts,tsx}'
    ],
  },
});
