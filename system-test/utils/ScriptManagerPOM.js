export class ScriptManagerPOM {
  initiateAddingNewScript() {
    cy.contains('button', 'New Script').click();
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
    cy.get('.showHistory').click()
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
    cy.get('input[placeholder="Script name"]').clear().type(titleEdited);
  }

  clearAndTypeInDescription(descEdited) {
    cy.get('input[placeholder="Script description"]').clear().type(descEdited);
  }

  clearAndTypeInCode(codeEdited) {
    cy.get('textarea[data-testid^="script-code"]').clear().type(codeEdited);
  }
}