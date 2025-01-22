const SCRIPT_URL = `/api/scripts`

describe('Backend spec', () => {
  it('Basic health check', () => {
  cy.visit("http://localhost:4000/c")
  })

  it('Script List', () => {
    cy.request("http://localhost:4000/api/scripts")
  })
})