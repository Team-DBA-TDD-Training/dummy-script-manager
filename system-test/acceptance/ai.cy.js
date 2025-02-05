import { ScriptManagerDsl } from '../utils/ScriptManagerDsl'
const scriptManager = new ScriptManagerDsl();

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
    cy.visit('/')
    scriptManager.askAi('List all movies in the collection', 'db.movies.find({})')
  })
})