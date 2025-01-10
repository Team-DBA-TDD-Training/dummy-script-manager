
const FRONT_URL = 'http://tdd-team-training.s3-website-us-east-1.amazonaws.com/';

describe('Front-end spec', () => {
  it('Basic health check', () => {
    cy.visit(FRONT_URL).title('Script Manager')
  })

  // it('Click show history and check History panel', () => {
  //   cy.visit(FRONT_URL);
  //   cy.get('.showHistory').click()
  //   cy.get('.history')
  // })
})