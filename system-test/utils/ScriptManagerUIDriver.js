const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class ScriptManagerUIDriver {

  visitFrontendURL(URL) {
    cy.visit(URL).title('Script Manager');
  }

  initiateAddingNewScript() {
    cy.get('button[data-testid^="new-script"]').click();
  }

  typeInScriptData(title, description, code) {
    cy.get('input[data-testid^="script-name"]').clear().type(title);
    cy.get('input[data-testid^="script-description"]').clear().type(description);
    cy.get('textarea[data-testid^="script-code"]').clear().type(code);
  }

  saveScript() {
    cy.get('button[data-testid^="save-script"]').click();
    cy.wait(1000);
  }

  openHistory() {
    cy.get('button[data-testid^="show-history"]').click();
    cy.wait(1000);
  }

  askAI(message, expectation) {
    cy.get('[data-testid^="askAIButton"]').click()
    cy.get('textarea[data-testid^="aiInput"]').type(message)
    cy.get('button[data-testid^="aiGenerateScript"]').click()
    this.shouldHaveScriptWithCode(expectation)
  }

  startEditingFirstScript() {
    cy.get('[data-testid^="checkbox-test-id"]').eq(0).check({ force: true });
    cy.get('[data-testid^=edit-icon-test-id]').click();
  }

  async getWebsiteTitle(FRONT_END_URL) {
    const response = await fetch(FRONT_END_URL);
    const htmlText = await response.text();
    const jsdom = new JSDOM(htmlText);
    return jsdom.window.document.querySelector('title')?.textContent || 'No title found';
  }

  shouldHaveScriptWithTitle(title) {
    cy.get('div').contains(title);
  }
  shouldHaveScriptWithDescription(description) {
    cy.get('div[aria-label^="' + description + '"]');
  }
  shouldHaveScriptWithCode(code) {
    cy.get('div').contains(code);
  }
}

module.exports = { ScriptManagerUIDriver };
