const SCRIPT_URL = `/api/scripts`

describe('Backend spec', () => {
  it('Basic health check', () => {
    cy.visit("/")
  })

  it('Script List', () => {
    cy.request(SCRIPT_URL)
  })
})