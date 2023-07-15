  import * as element from "@helpers/elements";
  import * as route from "@helpers/route";
  import { ROUTES } from "@tests/const/routes";
  import * as pemilihanTetapPage from "@tests/pages/pemilihan-tetap.page";
  import * as assert from "@helpers/assert";
  import * as data from "@tests/data/pemilihan-tetap.data";
  beforeEach(() => {
    route.visit(ROUTES.login);
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  describe("Pemilihan tetap test", () => {
    it("Test Scenario", () => {
      // Login Test
      element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
      element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
      element.click(pemilihanTetapPage.loginButton);
      assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
      cy.wait(3000);
      
      // Redirect ke menu pemilihan tetap
      element.click(pemilihanTetapPage.menuPemilihanTetap);
      
      // Pencarian pemilihan tetap dengan data valid
      element.fillFilled(pemilihanTetapPage.searchInput, data.SEARCH_DATA.valid);
      assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.valid);
      cy.wait(3000)
      
      // Pencarian pemilihan tetap dengan data valid
      element.fillFilledClear(pemilihanTetapPage.searchInput, data.SEARCH_DATA.invalid);
      assert.shouldContainText(pemilihanTetapPage.assertionEmptySearch, 'Nothing found - sorry');
      cy.wait(3000)
      
      // Pencarian pemilihan tetap dengan data blank
      element.fillFilledClear(pemilihanTetapPage.searchInput, data.SEARCH_DATA.blank);
      assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.blank);
      cy.wait(3000)
    });
  });