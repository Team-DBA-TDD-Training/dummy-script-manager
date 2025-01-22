const SCRIPT_URL = `/api/scripts`
import {onlyOn, skipOn} from '@cypress/skip-test'

describe('External stub', () => {
  /**
   * Feature: Generate script with the suggestion from AI tool
   * Scenario 1: The user can generate a script from AI’s suggestion
      Given the AI panel is open
      When the user types the query ‘List all movies in the collection’
      And clicks ‘Ask AI’
      Then the generated script should appear in the code editor
   */

  it('Generate script with the suggestion from AI tool', () => {
    if (Cypress.env('NODE_ENV') !== 'uat-docker') {
      cy.log('Skipping this test as NODE_ENV is not uat-docker');
      return;
    }
    cy.visit('/')
    cy.get('.askAIButton').click()
    cy.get('.aiInput').type('List all movies in the collection')
    cy.get('.AIGenerateScript').click()
    cy.get('.scriptInput').should('have.value', 'db.movies.find({})')
  })
})