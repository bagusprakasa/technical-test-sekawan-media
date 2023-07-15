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
      
      // Filter pemilihan tetap dengan data valid
      element.click(pemilihanTetapPage.filterButton);
      element.fillSelect(pemilihanTetapPage.filterProvinsi, data.FILTER_DATA.provinsi, {force: true});
      element.fillSelect(pemilihanTetapPage.filterKota, data.FILTER_DATA.kota, {force: true});
      element.fillSelect(pemilihanTetapPage.filterKecamatan, data.FILTER_DATA.kecamatan, {force: true});
      element.fillSelect(pemilihanTetapPage.filterKelurahan, data.FILTER_DATA.kelurahan, {force: true});
      element.fillSelect(pemilihanTetapPage.filterTps, data.FILTER_DATA.tps, {force: true});
      element.click(pemilihanTetapPage.buttonApply)
      assert.shouldContainText(pemilihanTetapPage.assertionFilter, data.FILTER_DATA.assertion);
      cy.wait(3000)
      
      // Filter pemilihan tetap dengan data blank
      element.click(pemilihanTetapPage.filterButton);
      element.click(pemilihanTetapPage.buttonApplyShow);
      assert.shouldContainText(pemilihanTetapPage.assertionEmptySearch, 'No records available');
      cy.wait(3000)
      
      // Filter pemilihan tetap dengan data salah satu blank
      element.click(pemilihanTetapPage.filterButton);
      element.fillSelect(pemilihanTetapPage.filterProvinsi, data.FILTER_DATA.provinsi, {force: true});
      element.fillSelect(pemilihanTetapPage.filterKota, data.FILTER_DATA.kota, {force: true});
      element.click(pemilihanTetapPage.buttonApplyShow);
      assert.shouldContainText(pemilihanTetapPage.assertionFilter, data.FILTER_DATA.assertionBlank);
      cy.wait(3000)
      
      // Import pemilihan tetap dengan data valid
      element.click(pemilihanTetapPage.dropDownImport);
      element.click(pemilihanTetapPage.modalImport);
      element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.valid);
      element.click(pemilihanTetapPage.buttonFileImport);
      element.click(pemilihanTetapPage.swalConfirm);
      assert.shouldContainText(pemilihanTetapPage.swalContent, 'Successfully changed data.');
      element.click(pemilihanTetapPage.swalConfirm);
      cy.wait(3000)
      
      // Import pemilihan tetap dengan data tidak valid
      element.click(pemilihanTetapPage.dropDownImport);
      element.click(pemilihanTetapPage.modalImport);
      element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.invalid);
      element.click(pemilihanTetapPage.buttonFileImport);
      element.click(pemilihanTetapPage.swalConfirm);
      assert.shouldContainText(pemilihanTetapPage.swalContent, 'Successfully changed data.');
      element.click(pemilihanTetapPage.swalConfirm);
      cy.wait(3000)

      // Import pemilihan tetap dengan data duplikat
      element.click(pemilihanTetapPage.dropDownImport);
      element.click(pemilihanTetapPage.modalImport);
      element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.duplikat);
      element.click(pemilihanTetapPage.buttonFileImport);
      element.click(pemilihanTetapPage.swalConfirm);
      assert.shouldContainText(pemilihanTetapPage.swalContent, 'Successfully changed data.');
      element.click(pemilihanTetapPage.swalConfirm);
      cy.wait(3000)

      // Import pemilihan tetap dengan data blank
      element.click(pemilihanTetapPage.dropDownImport);
      element.click(pemilihanTetapPage.modalImport);
      element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.blank);
      element.click(pemilihanTetapPage.buttonFileImport);
      element.click(pemilihanTetapPage.swalConfirm);
      assert.shouldContainText(pemilihanTetapPage.swalContent, 'System error, please contact the Administrator');
      element.click(pemilihanTetapPage.swalConfirm);
      cy.wait(3000)

      // Import pemilihan tetap dengan data non excel
      element.click(pemilihanTetapPage.dropDownImport);
      element.click(pemilihanTetapPage.modalImport);
      element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.blank);
      element.click(pemilihanTetapPage.buttonFileImport);
      element.click(pemilihanTetapPage.swalConfirm);
      assert.shouldContainText(pemilihanTetapPage.swalContent, 'System error, please contact the Administrator');
      element.click(pemilihanTetapPage.swalConfirm);
    });
  });