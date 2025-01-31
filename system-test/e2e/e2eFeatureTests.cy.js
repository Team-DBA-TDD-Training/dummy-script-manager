import { ScriptManagerPage } from '../utils/ScriptManagerPage'

const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://script-manager-frontend-uat.us-east-1.elasticbeanstalk.com";

const scriptManagerPage = new ScriptManagerPage();
describe('E2E flow feature tests', () => {
  it('Add a new script', () => {
    const title = "E2E test script name POM Model";
    const description = "E2E test script description";
    const code = "E2E test script code";
    cy.visit(FRONTEND_URL).title('Script Manager');
    scriptManagerPage.initiateAddingNewScript();
    scriptManagerPage.typeInTitle(title);
    scriptManagerPage.typeInDescription(description);
    scriptManagerPage.typeInCode(code);
    scriptManagerPage.saveScript();
    scriptManagerPage.openHistory();
    cy.wait(1000);
    scriptManagerPage.getScriptWithTitle(title).should('exist');
    scriptManagerPage.getScriptWithDescription(description).should('exist');
    scriptManagerPage.getScriptWithCode(code).should('exist');
  });

  it('Edit first script in the list', () => {
    const titleEdited = "E2E test script name edited POM Model 2";
    const descEdited = "E2E test script description edited";
    const codeEdited = "E2E test script code edited";
    cy.visit(FRONTEND_URL).title('Script Manager');
    cy.wait(1000);
    scriptManagerPage.openHistory();
    cy.wait(1000);
    scriptManagerPage.selectFirstScript();
    scriptManagerPage.startEditingSelectedScript();
    scriptManagerPage.clearAndTypeInTitle(titleEdited);
    scriptManagerPage.clearAndTypeInDescription(descEdited);
    scriptManagerPage.clearAndTypeInCode(codeEdited);
    scriptManagerPage.saveScript();
    cy.wait(1000);
    scriptManagerPage.getScriptWithTitle(titleEdited).should('exist');
    scriptManagerPage.getScriptWithDescription(descEdited).should('exist');
    scriptManagerPage.getScriptWithCode(codeEdited).should('exist');
  });
});