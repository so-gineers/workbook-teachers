import { useContext } from "react";
import { createYield, idText } from "typescript";
import AcceptLocales from "../support/accept_locales";
const autoRecord = require("cypress-autorecord");

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

  autoRecord();

  describe("With invalid credentials", function () {
    it("Will stay on the login page", function () {
      cy.get('input[name="username"]').type("pathe");
      cy.get('input[name="password"]').type("badpassword");
      cy.get("button").click();
      cy.url().should("include", "/api/auth/signin");
    });
  });

  describe("With valid credentials", function () {
    it("Can fill the form and login", function () {
      cy.get('input[name="username"]').type("gustavo@dooley.com");
      cy.get('input[name="password"]').type("workbook");
      cy.get("button").click();
      cy.location("pathname").should("equal", "/");
    });
  });
});
