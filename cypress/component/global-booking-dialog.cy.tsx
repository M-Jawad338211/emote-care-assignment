/// <reference types="cypress" />
import { TestProvider } from "../support/test-provider";
import { GlobalBookingDialog } from "../../src/components/global-booking-dialog";
import { mount } from "cypress/react"; // Import the mount command

// Add mount to Cypress commands if not already done globally
Cypress.Commands.add("mount", mount);

describe("<GlobalBookingDialog />", () => {
  beforeEach(() => {
    cy.mount(
      <TestProvider>
        <GlobalBookingDialog />
      </TestProvider>
    );
  });

  it("renders the form correctly", () => {
    cy.get('[data-testid="booking-form"]').should("exist");
    cy.get('[data-testid="name-input"]').should("exist");
    cy.get('[data-testid="day-select"]').should("exist");
    cy.get('[data-testid="reason-textarea"]').should("exist");
    cy.get('[data-testid="submit-button"]').should(
      "contain",
      "Request Session"
    );
  });

  it("allows form submission", () => {
    cy.get('[data-testid="name-input"]').type("Usama");
    cy.get('[data-testid="day-select"]').click();
    cy.get('[data-testid="day-option-monday"]').click();
    cy.get('[data-testid="reason-textarea"]').type("Need help with anxiety");

    cy.get('[data-testid="submit-button"]').click();

    cy.contains("Booking Request Sent!").should("exist");
  });
});
