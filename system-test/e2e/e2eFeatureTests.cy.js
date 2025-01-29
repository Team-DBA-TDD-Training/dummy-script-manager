
const FRONTEND_URL = 'http://script-manager-frontend-uat.us-east-1.elasticbeanstalk.com'; //'http://localhost:5173';
const BACKEND_URL = "http://script-manager-backend-uat.us-east-1.elasticbeanstalk.com/api/scripts/";

describe('E2E flow feature tests', () => {
  it('Add a new script', () => {
    const title = "E2E test script name POM Model";
    const description = "E2E test script description";
    const code = "E2E test script code";
    cy.visit(FRONTEND_URL).title('Script Manager');
    const scriptManagerPOM  = new ScriptManagerPOM();
    scriptManagerPOM.initiateAddingNewScript();
    scriptManagerPOM.typeInTitle(title);
    scriptManagerPOM.typeInDescription(description);
    scriptManagerPOM.typeInCode(code);
    scriptManagerPOM.saveScript();
    cy.wait(1000);
    cy.request(BACKEND_URL).then(
     (response) => {
       const obj = response.body.find(x => x.title === title);
       expect(obj).to.have.property('title', title);
       expect(obj).to.have.property('description', description);
       expect(obj).to.have.property('code', code);
     }
   )
  });

  it('Edit first script in the list', () => {
    const titleEdited = "E2E test script name edited POM Model 2";
    const descEdited = "E2E test script description edited";
    const codeEdited = "E2E test script code edited";
    const scriptManagerPOM  = new ScriptManagerPOM();
    cy.visit(FRONTEND_URL).title('Script Manager');
    scriptManagerPOM.openHistory();
    cy.wait(1000);
    scriptManagerPOM.selectFirstScript();
    scriptManagerPOM.startEditingSelectedScript();
    scriptManagerPOM.clearAndTypeInTitle(titleEdited);
    scriptManagerPOM.clearAndTypeInDescription(descEdited);
    scriptManagerPOM.clearAndTypeInCode(codeEdited);
    scriptManagerPOM.saveScript();
    cy.wait(1000);
    cy.request(BACKEND_URL).then(
      (response) => {
        const obj = response.body.find(x => x.title === titleEdited);
        expect(obj).to.have.property('title', titleEdited);
        expect(obj).to.have.property('description', descEdited);
        expect(obj).to.have.property('code', codeEdited);
      }
    )
  });
});

class ScriptManagerPOM {
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