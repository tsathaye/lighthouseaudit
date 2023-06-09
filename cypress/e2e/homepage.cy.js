/// <reference types="cypress" />

context("The App", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("modern web applications")
  });

  it("audits the home page", () => {
    cy.lighthouse({
      accessibility: 40,
      "best-practices": 50,
      seo: 50,
      pwa: 20,
      performance: 50,
    });
  });
});
