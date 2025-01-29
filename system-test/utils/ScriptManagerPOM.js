export class ScriptManagerPOM {
  initiateAddingNewScript() {
    cy.contains('button','New Script').click();
  }
  typeInTitle(title){
    cy.get('input[placeholder="Script name"]').type(title);
  }

  typeInDescription(description){
    cy.get('input[placeholder="Script description"]').type(description);
  }
  typeInCode(code){
    cy.get('textarea[placeholder="Write your script here.."]').type(code);
  }
  saveScript() {
    cy.contains('button','Save Script').click();
  }
  openHistory() {
    cy.contains('button','Show History').click();
  }

  selectFirstScript() {
    cy.get('[data-testid^="checkbox-test-id"]').eq(0).check({ force: true });
  }
  startEditingSelectedScript() {
    cy.get('[data-testid^=edit-icon-test-id]').click();
  }
  clearAndTypeInTitle(titleEdited){
    cy.get('input[placeholder="Script name"]').clear().type(titleEdited);
  }
  clearAndTypeInDescription(descEdited){
    cy.get('input[placeholder="Script description"]').clear().type(descEdited);
  }
  clearAndTypeInCode(codeEdited){
    cy.get('textarea[placeholder="Write your script here.."]').clear().type(codeEdited);
  }
}