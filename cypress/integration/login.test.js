import AcceptLocales from "../support/accept_locales";

describe("With localization", () => {
  describe("English", () => {
    it.skip("localizes the username label", () => {
      const labelSelector =
          'label[for="input-username-for-credentials-provider"]',
        labelText = "Username, email or phone number";
      cy.visit("/api/auth/signin", AcceptLocales.en);
      cy.get(labelSelector).contains(labelText);
    });
  });

  describe("French", () => {
    it.skip("localizes the username label", () => {
      cy.visit("/api/auth/signin", AcceptLocales.fr);
      cy.get('label[for="input-username-for-credentials-provider"]').contains(
        "Identifiant, email ou téléphone"
      );
    });
  });
});

describe("Login specs", function () {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/api/auth/signin");
  });

  describe("With invalid credentials", function () {
    it("Will stay on the login page", function () {
      cy.intercept("POST", "/api", {
        statusCode: 422,
      });
      cy.get('input[name="username"]').type("pathe");
      cy.get('input[name="password"]').type("badpassword");
      cy.get("button").click();
      cy.url().should("include", "/api/auth/signin");
    });
  });

  describe("With valid credentials", function () {
    it("Can fill the form and login", function () {
      cy.intercept("POST", "/api", {
        statusCode: 201,
        body: {
          user: {
            name: "Mr SENE",
            apiToken:
              "eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJ3YmsvY2xpZW50L21vYmlsZS10ZXN0IiwiZXhwIjoxNjUxNzc2NDU1LCJpYXQiOjE2NDMyMjI4NTUsImlkIjoiMmQ0MzI3M2ItMjE0Yy00NTVhLThjY2EtNzk1NzljMGNjOTc0IiwiaXNzIjoid2JrL2FwaS9ydWJ5LXRlc3QifQ.-xrmpaEm_FoLl-_TQz0DRfGoPI7BBOtZ_OhpKv0-EV6FkedbKxffjyFP9C-ryxJ9GNayFLqpgZ83Xq0v1Tpd_w",
          },
          expires: "2022-02-25T18:47:37.200Z",
        },
      });
      cy.get('input[name="username"]').type("antone_mcglynn@ohara.biz");
      cy.get('input[name="password"]').type("workbook");
      cy.get("button").click();
      cy.location("pathname").should("equal", "/");
    });
  });
});
