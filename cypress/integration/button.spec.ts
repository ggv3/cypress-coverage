describe("MyButton", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the button", () => {
    cy.contains("button", "Click me").should("be.visible");
  });

  it("should display alert when button is clicked", () => {
    cy.contains("Click me").click();
    cy.on("window:alert", (text) => {
      expect(text).equal("Button clicked!");
    });
  });

  it("should have the correct button text", () => {
    cy.contains("button", "Click me").should("have.text", "Click me");
  });
});
