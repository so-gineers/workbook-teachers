describe("Dashboard", () => {
  beforeEach(() => {
    cy.login("antone_mcglynn@ohara.biz", "workbook");
    cy.visit("/");
  });

  it("can see the list of french essay topics", () => {
    cy.get('input[name="identifier"]').type("+221777777777");
  });
});
