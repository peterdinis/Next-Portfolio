import axios from "axios";

describe("Homepage tests", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
  });
});
