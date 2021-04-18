/// <reference types="cypress" />

describe('/weather', () => {
  it('returns JSON', () => {
    cy.request(`/weather?lat=47.6038321&lon=-122.3300624`)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  });

  it('returns 16 items', () => {
    cy.request('/weather?lat=47.6038321&lon=-122.3300624')
      .its('body')
      .should('have.length', 16)
  });
});
