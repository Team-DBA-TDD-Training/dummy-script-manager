class HistoryPage {
  selectFirstScript() {
    cy.get('[data-testid^="checkbox-test-id"]').eq(0).check({ force: true });
  }

  deleteSelectedScript() {
    cy.get('[data-testid^="delete-script"]').click()
  }

  clickEditIcon() {
    cy.get('[data-testid^=edit-icon-test-id]').click();
  }
}

module.exports = {HistoryPage };
