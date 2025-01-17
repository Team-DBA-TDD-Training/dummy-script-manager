
const FRONTEND_URL = 'http://script-manager-frontend-uat.us-east-1.elasticbeanstalk.com'; //'http://localhost:5173';
const BACKEND_URL = "http://script-manager-backend-uat.us-east-1.elasticbeanstalk.com/api/scripts/";

describe('E2E flow feature tests', () => {
  it('Add a new script', () => {
    const title = "E2E test script name";
    const description = "E2E test script description";
    const code = "E2E test script code";

    cy.visit(FRONTEND_URL).title('Script Manager');
    cy.contains('button','New Script').click();
    cy.get('input[placeholder="Script name"]').type(title);
    cy.get('input[placeholder="Script description"]').type(description);
    cy.get('textarea[placeholder="Write your script here.."]').type(code);
    cy.contains('button','Save Script').click();
    cy.request(BACKEND_URL);
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
    const titleEdited = "E2E test script name edited";
    const descEdited = "E2E test script description edited";
    const codeEdited = "E2E test script code edited";

    cy.visit(FRONTEND_URL).title('Script Manager');
    cy.contains('button','Show History').click();
    cy.wait(1000);
    cy.get('[id^="checkbox-test-id"]').eq(0).check({ force: true });
    cy.get('[id^=edit-icon-test-id]').click();
    cy.get('input[placeholder="Script name"]').clear().type(titleEdited);
    cy.get('input[placeholder="Script description"]').clear().type(descEdited);
    cy.get('textarea[placeholder="Write your script here.."]').clear().type(codeEdited);
    cy.contains('button','Save Script').click();
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