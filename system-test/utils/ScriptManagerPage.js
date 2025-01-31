export class ScriptManagerPage {
  initiateAddingNewScript() {
    cy.get('button[data-testid^="new-script"]').click();
  }

  typeInTitle(title) {
    cy.get('input[data-testid^="script-name"]').clear().type(title);
  }

  typeInDescription(description) {
    cy.get('input[data-testid^="script-description"]').clear().type(description);
  }

  typeInCode(code) {
    cy.get('textarea[data-testid^="script-code"]').clear().type(code);
  }
  
  saveScript() {
    cy.get('button[data-testid^="save-script"]').click();
  }

  openHistory() {
    cy.get('button[data-testid^="show-history"]').click()
  }

  selectFirstScript() {
    cy.get('[data-testid^="checkbox-test-id"]').eq(0).check({ force: true });
  }

  deleteSelectedScript() {
    cy.get('[data-testid^="delete-script"]').click()
  }

  startEditingSelectedScript() {
    cy.get('[data-testid^=edit-icon-test-id]').click();
  }

  clearAndTypeInTitle(titleEdited) {
    cy.get('input[data-testid^="script-name"]').clear().type(titleEdited);
  }

  clearAndTypeInDescription(descEdited) {
    cy.get('input[data-testid^="script-description"]').clear().type(descEdited);
  }

  clearAndTypeInCode(codeEdited) {
    cy.get('textarea[data-testid^="script-code"]').clear().type(codeEdited);
  }

  getWebsiteTitle(jsdom){
   return jsdom.window.document.querySelector('title')?.textContent || 'No title found';
  }

  getScriptWithTitle(title){
    return cy.get('div').contains(title);
  }
  getScriptWithDescription(description){
    return cy.get('div[aria-label^="'+description+'"]');
  }
  getScriptWithCode(code){
   return cy.get('div').contains(title);
  }
}