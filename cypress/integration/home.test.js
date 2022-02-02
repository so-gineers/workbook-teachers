describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the login page", () => {
    cy.get('a[href*="api/auth/signin"]').click();
    cy.url().should("include", "api/auth/signin");

    cy.get('input[name="username"]').should("exist");
  });

  it("can visit reset password page", () => {
    cy.get('a[href*="teachers/passwords"]').click();
    cy.url().should("include", "teachers/passwords");
    cy.get("h1").should("contain", "Reset your password");
  });
});

describe("Home page translations", () => {
  it("Supports english locale", () => {
    cy.visit("/", {
      headers: {
        "Accept-Language": "en",
      },
    });

    cy.get("h1").should("contain", "Welcome to workbook");
    cy.get('a[href*="api/auth/signin"]').should("contain", "Login");
    cy.get('a[href*="teachers/passwords"]').should(
      "contain",
      "Forgot password"
    );
  });
  it("Supports french locale", () => {
    cy.visit("/", {
      headers: {
        "Accept-Language": "fr",
      },
    });

    cy.get("h1").should("contain", "Bienvenue sur workbook");
    cy.get('a[href*="api/auth/signin"]').should("contain", "Connexion");
    cy.get('a[href*="teachers/passwords"]').should(
      "contain",
      "Mot de passe oublié"
    );
  });
});

describe("Reset password", () => {
  beforeEach(() => {
    cy.visit("teachers/passwords");
  });

  it("can use phone number", () => {
    cy.get('input[name="identifier"]').type("+221777777777");
  });

  it("can use email address", () => {
    cy.get('input[name="identifier"]').type("teacher@work.book");
  });

  it("can use identifier", () => {
    cy.get('input[name="identifier"]').type("teacher@work.book");
  });
});
