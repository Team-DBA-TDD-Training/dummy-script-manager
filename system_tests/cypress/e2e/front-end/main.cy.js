
const FRONT_URL = 'http://localhost:5173';

describe('Front-end spec', () => {
  it('Basic health check', () => {
    cy.visit(FRONT_URL).title('Script Manager')
  })

  it('Click show history and check History panel', () => {
    cy.visit(FRONT_URL);
    cy.get('.showHistory').click()
    cy.get('.history')
  })
})