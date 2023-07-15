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
      
      // Input Data Valid
      element.click(pemilihanTetapPage.addButton);
      assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
      element.fillFilled(pemilihanTetapPage.inputKk, data.VALID_INPUT.kk);
      element.fillFilled(pemilihanTetapPage.inputNik, data.VALID_INPUT.nik);
      element.fillFilled(pemilihanTetapPage.inputNama, data.VALID_INPUT.name);
      element.fillFilled(pemilihanTetapPage.inputAlamat, data.VALID_INPUT.address);
      element.fillFilled(pemilihanTetapPage.inputRt, data.VALID_INPUT.rt);
      element.fillFilled(pemilihanTetapPage.inputRw, data.VALID_INPUT.rw);
      element.fillSelect(pemilihanTetapPage.inputKelurahan, data.VALID_INPUT.kelurahan, {force: true});
      element.fillFilled(pemilihanTetapPage.inputTempatLahir, data.VALID_INPUT.tempatLahir);
      element.fillFilled(pemilihanTetapPage.inputTanggalLahir, data.VALID_INPUT.tanggalLahir);
      element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.VALID_INPUT.jk, {force: true});
      element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.VALID_INPUT.statusKawin, {force: true});
      element.fillSelect(pemilihanTetapPage.inputCaleg, data.VALID_INPUT.caleg, {force: true});
      element.fillSelect(pemilihanTetapPage.inputTps, data.VALID_INPUT.tps, {force: true});
      element.fillCheck(pemilihanTetapPage.inputStatus, data.VALID_INPUT.status, {force: true});
      element.click(pemilihanTetapPage.saveButton);
      cy.wait(3000)
      element.click(pemilihanTetapPage.backButton);
      
      // Input Data Duplicate
      element.click(pemilihanTetapPage.addButton);
      assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
      element.fillFilled(pemilihanTetapPage.inputKk, data.DUPLICATE_INPUT.kk);
      element.fillFilled(pemilihanTetapPage.inputNik, data.DUPLICATE_INPUT.nik);
      element.fillFilled(pemilihanTetapPage.inputNama, data.DUPLICATE_INPUT.name);
      element.fillFilled(pemilihanTetapPage.inputAlamat, data.DUPLICATE_INPUT.address);
      element.fillFilled(pemilihanTetapPage.inputRt, data.DUPLICATE_INPUT.rt);
      element.fillFilled(pemilihanTetapPage.inputRw, data.DUPLICATE_INPUT.rw);
      element.fillSelect(pemilihanTetapPage.inputKelurahan, data.DUPLICATE_INPUT.kelurahan, {force: true});
      element.fillFilled(pemilihanTetapPage.inputTempatLahir, data.DUPLICATE_INPUT.tempatLahir);
      element.fillFilled(pemilihanTetapPage.inputTanggalLahir, data.DUPLICATE_INPUT.tanggalLahir);
      element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.DUPLICATE_INPUT.jk, {force: true});
      element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.DUPLICATE_INPUT.statusKawin, {force: true});
      element.fillSelect(pemilihanTetapPage.inputCaleg, data.DUPLICATE_INPUT.caleg, {force: true});
      element.fillSelect(pemilihanTetapPage.inputTps, data.DUPLICATE_INPUT.tps, {force: true});
      element.fillCheck(pemilihanTetapPage.inputStatus, data.DUPLICATE_INPUT.status, {force: true});
      element.click(pemilihanTetapPage.saveButton);
      cy.wait(3000)
      element.click(pemilihanTetapPage.backButton);

      // Input Data Blank
      element.click(pemilihanTetapPage.addButton);
      assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
      element.click(pemilihanTetapPage.saveButton);
      assert.shouldContainText(pemilihanTetapPage.errorKk, ' No. KK  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorNik, ' No. NIK  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorNama, ' Nama  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorAlamat, ' Alamat  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorRt, ' RT  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorRw, ' RW  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorKelurahan, ' Kelurahan  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorTempatLahir, ' Tempat Lahir  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorTanggalLahir, ' Tanggal Lahir  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorJenisKelamin, 'Jenis Kelamin tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorStatusKawin, ' Status Kawin  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorCaleg, ' Caleg  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorTps, ' TPS  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorStatus, 'Status belum dipilih!');
      cy.wait(3000)
      element.click(pemilihanTetapPage.backButton);

      // Input Data Invalid
      element.click(pemilihanTetapPage.addButton);
      assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
      element.fillFilled(pemilihanTetapPage.inputKk, data.INVALID_INPUT.kk);
      element.fillFilled(pemilihanTetapPage.inputNik, data.INVALID_INPUT.nik);
      element.fillFilled(pemilihanTetapPage.inputNama, data.INVALID_INPUT.name);
      element.fillFilled(pemilihanTetapPage.inputAlamat, data.INVALID_INPUT.address);
      element.fillFilled(pemilihanTetapPage.inputRt, data.INVALID_INPUT.rt);
      element.fillFilled(pemilihanTetapPage.inputRw, data.INVALID_INPUT.rw);
      element.fillSelect(pemilihanTetapPage.inputKelurahan, data.INVALID_INPUT.kelurahan, {force: true});
      element.fillFilled(pemilihanTetapPage.inputTempatLahir, data.INVALID_INPUT.tempatLahir);
      element.fillFilled(pemilihanTetapPage.inputTanggalLahir, data.INVALID_INPUT.tanggalLahir);
      element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.INVALID_INPUT.jk, {force: true});
      element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.INVALID_INPUT.statusKawin, {force: true});
      element.fillSelect(pemilihanTetapPage.inputCaleg, data.INVALID_INPUT.caleg, {force: true});
      element.fillSelect(pemilihanTetapPage.inputTps, data.INVALID_INPUT.tps, {force: true});
      element.fillCheck(pemilihanTetapPage.inputStatus, data.INVALID_INPUT.status, {force: true});
      element.click(pemilihanTetapPage.saveButton);
      assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'Jumlah karakter KK tidak boleh lebih atau kurang dari 16 karakter');
      assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'Jumlah karakter NIK tidak boleh lebih atau kurang dari 16 karakter');
      cy.wait(3000)
      element.click(pemilihanTetapPage.backButton);
      
      // Input Data One Character
      element.click(pemilihanTetapPage.addButton);
      assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
      element.fillFilled(pemilihanTetapPage.inputKk, data.INVALID_INPUT_ONE_CHAR.kk);
      element.fillFilled(pemilihanTetapPage.inputNik, data.INVALID_INPUT_ONE_CHAR.nik);
      element.fillFilled(pemilihanTetapPage.inputNama, data.INVALID_INPUT_ONE_CHAR.name);
      element.fillFilled(pemilihanTetapPage.inputAlamat, data.INVALID_INPUT_ONE_CHAR.address);
      element.fillFilled(pemilihanTetapPage.inputRt, data.INVALID_INPUT_ONE_CHAR.rt);
      element.fillFilled(pemilihanTetapPage.inputRw, data.INVALID_INPUT_ONE_CHAR.rw);
      element.fillSelect(pemilihanTetapPage.inputKelurahan, data.INVALID_INPUT_ONE_CHAR.kelurahan, {force: true});
      element.fillFilled(pemilihanTetapPage.inputTempatLahir, data.INVALID_INPUT_ONE_CHAR.tempatLahir);
      element.fillFilled(pemilihanTetapPage.inputTanggalLahir, data.INVALID_INPUT_ONE_CHAR.tanggalLahir);
      element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.INVALID_INPUT_ONE_CHAR.jk, {force: true});
      element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.INVALID_INPUT_ONE_CHAR.statusKawin, {force: true});
      element.fillSelect(pemilihanTetapPage.inputCaleg, data.INVALID_INPUT_ONE_CHAR.caleg, {force: true});
      element.fillSelect(pemilihanTetapPage.inputTps, data.INVALID_INPUT_ONE_CHAR.tps, {force: true});
      element.fillCheck(pemilihanTetapPage.inputStatus, data.INVALID_INPUT_ONE_CHAR.status, {force: true});
      element.click(pemilihanTetapPage.saveButton);
      assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'Jumlah karakter KK tidak boleh lebih atau kurang dari 16 karakter');
      assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'Jumlah karakter NIK tidak boleh lebih atau kurang dari 16 karakter');
      cy.wait(3000)
      element.click(pemilihanTetapPage.backButton);
      
      // Input Data Space
      element.click(pemilihanTetapPage.addButton);
      assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
      element.fillFilled(pemilihanTetapPage.inputKk, data.INVALID_INPUT_SPACE.kk);
      element.fillFilled(pemilihanTetapPage.inputNik, data.INVALID_INPUT_SPACE.nik);
      element.fillFilled(pemilihanTetapPage.inputNama, data.INVALID_INPUT_SPACE.name);
      element.fillFilled(pemilihanTetapPage.inputAlamat, data.INVALID_INPUT_SPACE.address);
      cy.get(pemilihanTetapPage.inputTanggalLahir).type(data.INVALID_INPUT_SPACE.rt).should("have.value", data.INVALID_INPUT_SPACE.emptyValue);
      cy.get(pemilihanTetapPage.inputTanggalLahir).type(data.INVALID_INPUT_SPACE.rw).should("have.value", data.INVALID_INPUT_SPACE.emptyValue);
      element.fillFilled(pemilihanTetapPage.inputTempatLahir, data.INVALID_INPUT_SPACE.tempatLahir);
      cy.get(pemilihanTetapPage.inputTanggalLahir).type(data.INVALID_INPUT_SPACE.tanggalLahir).should("have.value", data.INVALID_INPUT_SPACE.emptyValue);
      element.click(pemilihanTetapPage.saveButton);
      assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'Jumlah karakter KK tidak boleh lebih atau kurang dari 16 karakter');
      assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'Jumlah karakter NIK tidak boleh lebih atau kurang dari 16 karakter');
      assert.shouldContainText(pemilihanTetapPage.errorKk, ' No. KK  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorNik, ' No. NIK  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorNama, ' Nama  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorAlamat, ' Alamat  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorRt, ' RT  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorRw, ' RW  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorKelurahan, ' Kelurahan  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorTempatLahir, ' Tempat Lahir  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorTanggalLahir, ' Tanggal Lahir  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorJenisKelamin, 'Jenis Kelamin tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorStatusKawin, ' Status Kawin  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorCaleg, ' Caleg  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorTps, ' TPS  tidak boleh kosong.');
      assert.shouldContainText(pemilihanTetapPage.errorStatus, 'Status belum dipilih!');
      cy.wait(3000)
      element.click(pemilihanTetapPage.backButton);
      
      // Pencarian pemilihan tetap dengan data valid
      // element.fillFilled(pemilihanTetapPage.searchInput, data.SEARCH_DATA.valid, {force:true});
      cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.valid);
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