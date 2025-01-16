
const FRONT_URL = 'http://tdd-team-training.s3-website-us-east-1.amazonaws.com/';

describe('e2e flow test', () => {
  it('Add new script', () => {
    cy.visit(FRONT_URL).title('Script Manager');
    cy.contains('button','New Script').click();
    cy.get('input[placeholder="Script name"]').type("test script name");
    cy.get('input[placeholder="Script description"]').type("test script description");
    cy.get('textarea[placeholder="Write your script here.."]').type("test script code");
    cy.contains('button','Save Script').click();
  });
});