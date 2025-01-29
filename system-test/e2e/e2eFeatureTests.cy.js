import { ScriptManagerPOM } from '../utils/ScriptManagerPOM'

const FRONTEND_URL = process.env.FRONTEND_URL ?? 'http://localhost:3000/';
const BACKEND_URL = process.env.BACKEND_URL ?? 'http://localhost:4000/api/scripts';

const scriptManagerPOM = new ScriptManagerPOM();
describe('E2E flow feature tests', () => {
  it('Add a new script', () => {
    const title = "E2E test script name POM Model";
    const description = "E2E test script description";
    const code = "E2E test script code";
    cy.visit(FRONTEND_URL).title('Script Manager');
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

  it('Show history button should show history panel', () => {
    cy.visit("/")
    scriptManagerPOM.openHistory();
    cy.get('.history').should('be.visible');
    scriptManagerPOM.openHistory();
    cy.get('.history').should('not.exist');
  })

  it('Delete script', () => {
    cy.visit("/")
    scriptManagerPOM.openHistory();
    scriptManagerPOM.selectFirstScript();
    scriptManagerPOM.deleteSelectedScript();
  })
});