
const FRONT_END_URL = 'http://tdd-team-training.s3-website-us-east-1.amazonaws.com/';

describe('Front-end spec', () => {
  it('Basic health check', () => {
    cy.visit(FRONT_END_URL).title('Script Manager')
  })
})