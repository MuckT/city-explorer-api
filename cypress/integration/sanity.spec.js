/// <reference types="cypress" />
describe('/weather', () => {
  it('returns JSON', () => {
    cy.request('/weather')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  });

  it('returns 16 items', () => {
    cy.request('/weather')
      .its('body')
      .should('have.length', 16)
  });
});