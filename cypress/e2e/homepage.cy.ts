describe("Home Page", () => {
  it("should render the homepage correctly", () => {
    cy.visit("/");
    cy.contains("Find Your Perfect Therapist Today");
  });
});
