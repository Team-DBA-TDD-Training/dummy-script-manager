import { ScriptManagerDsl } from '../utils/ScriptManagerDsl'

const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://script-manager-frontend-uat.us-east-1.elasticbeanstalk.com";

const scriptManagerDsl = new ScriptManagerDsl();
describe('E2E flow feature tests', () => {
  it('Add a new script', () => {
    const title = "E2E test script name POM Model";
    const description = "E2E test script description";
    const code = "E2E test script code";
    cy.visit(FRONTEND_URL).title('Script Manager');
    scriptManagerDsl.addNewScript(title, description, code)
    scriptManagerDsl.openHistory();
    cy.wait(1000);
    scriptManagerDsl.getScriptWithTitle(title).should('exist');
    scriptManagerDsl.getScriptWithDescription(description).should('exist');
    scriptManagerDsl.getScriptWithCode(code).should('exist');
  });

  it('Edit first script in the list', () => {
    const titleEdited = "E2E test script name edited POM Model 2";
    const descEdited = "E2E test script description edited";
    const codeEdited = "E2E test script code edited";
    cy.visit(FRONTEND_URL).title('Script Manager');
    scriptManagerDsl.openHistory();
    cy.wait(1000);
    scriptManagerDsl.editScript(titleEdited, descEdited, codeEdited);
    cy.wait(1000);
    scriptManagerDsl.getScriptWithTitle(titleEdited).should('exist');
    scriptManagerDsl.getScriptWithDescription(descEdited).should('exist');
    scriptManagerDsl.getScriptWithCode(codeEdited).should('exist');
  });
});