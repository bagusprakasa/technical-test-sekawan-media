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
describe("Input Data Test", () => {
  it("Input Data Valid", () => {
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
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'Successfully add data.');
  });
  
  it("Input Data Duplikat", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
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
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'No KK and NIK Must Unique.');
  });

  it("Input Data Blank", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    
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
    cy.screenshot();
  });

  it("Input Data Invalid", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
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
    assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'No KK harus menggunakan angka');
    assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'No NIK harus menggunakan angka');
  });

  it("Input Data Satu Karakter", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
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
    assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'No KK harus menggunakan angka');
    assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'No NIK harus menggunakan angka');
  });

  it("Input Data Satu Spasi", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
  
    // Input Data Space
    element.click(pemilihanTetapPage.addButton);
    assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
    element.fillFilled(pemilihanTetapPage.inputKk, data.INVALID_INPUT_SPACE.kk);
    element.fillFilled(pemilihanTetapPage.inputNik, data.INVALID_INPUT_SPACE.nik);
    element.fillFilled(pemilihanTetapPage.inputNama, data.INVALID_INPUT_SPACE.name);
    element.fillFilled(pemilihanTetapPage.inputAlamat, data.INVALID_INPUT_SPACE.address);
    cy.get(pemilihanTetapPage.inputRt).type(data.INVALID_INPUT_SPACE.rt).should("have.value", data.INVALID_INPUT_SPACE.emptyValue);
    cy.get(pemilihanTetapPage.inputRw).type(data.INVALID_INPUT_SPACE.rw).should("have.value", data.INVALID_INPUT_SPACE.emptyValue);
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
    cy.screenshot();
  });
});

describe("Pencarian Data Test", () => {
  it("Pencarian Data Valid", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Pencarian pemilihan tetap dengan data valid
    // element.fillFilled(pemilihanTetapPage.searchInput, data.SEARCH_DATA.valid, {force:true});
    cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.valid);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.valid);
    cy.screenshot();
  });

  it("Pencarian Data Ivnalid", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Pencarian pemilihan tetap dengan data valid
    element.fillFilledClear(pemilihanTetapPage.searchInput, data.SEARCH_DATA.invalid);
    assert.shouldContainText(pemilihanTetapPage.assertionEmptySearch, 'Nothing found - sorry');
    cy.screenshot();
  });

  it('Pencarian Data Blank', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Pencarian pemilihan tetap dengan data blank
    element.fillFilledClear(pemilihanTetapPage.searchInput, data.SEARCH_DATA.blank);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.blank);
    cy.screenshot();
  });
});

describe("Filter Test", () => {
  it("Filter Data Valid", () => {
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Filter pemilihan tetap dengan data valid
    element.click(pemilihanTetapPage.filterButton);
    element.fillSelect(pemilihanTetapPage.filterProvinsi, data.FILTER_DATA.provinsi, {force: true});
    element.fillSelect(pemilihanTetapPage.filterKota, data.FILTER_DATA.kota, {force: true});
    element.fillSelect(pemilihanTetapPage.filterKecamatan, data.FILTER_DATA.kecamatan, {force: true});
    element.fillSelect(pemilihanTetapPage.filterKelurahan, data.FILTER_DATA.kelurahan, {force: true});
    element.fillSelect(pemilihanTetapPage.filterTps, data.FILTER_DATA.tps, {force: true});
    element.click(pemilihanTetapPage.buttonApply, {force: true})
    assert.shouldContainText(pemilihanTetapPage.assertionFilter, data.FILTER_DATA.assertion);
    cy.screenshot();
  });

  it("Filter Data Blank", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Filter pemilihan tetap dengan data blank
    element.click(pemilihanTetapPage.filterButton);
    cy.wait(3000)
    element.click(pemilihanTetapPage.buttonApplyShow, {force: true});
    assert.shouldContainText(pemilihanTetapPage.assertionEmptySearch, 'No records available');
    cy.wait(3000)
    cy.screenshot();
  });

  it('Filter Data Salah Satu Blank', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Filter pemilihan tetap dengan data salah satu blank
    element.click(pemilihanTetapPage.filterButton);
    element.fillSelect(pemilihanTetapPage.filterProvinsi, data.FILTER_DATA.provinsi, {force: true});
    element.fillSelect(pemilihanTetapPage.filterKota, data.FILTER_DATA.kota, {force: true});
    element.click(pemilihanTetapPage.buttonApplyShow, {force: true});
    assert.shouldContainText(pemilihanTetapPage.assertionFilter, data.FILTER_DATA.assertionBlank);
    cy.screenshot();
  });
});

describe("Edit Data Test", () => {
  it("Edit Data Valid", () => {
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Edit Data Valid
    cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.edit);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.edit);
    element.click(pemilihanTetapPage.editButton);
    assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
    element.fillFilledClear(pemilihanTetapPage.inputKk, data.VALID_INPUT.kk);
    element.fillFilledClear(pemilihanTetapPage.inputNik, data.VALID_INPUT.nik);
    element.fillFilledClear(pemilihanTetapPage.inputNama, data.VALID_INPUT.name);
    element.fillFilledClear(pemilihanTetapPage.inputAlamat, data.VALID_INPUT.address);
    element.fillFilledClear(pemilihanTetapPage.inputRt, data.VALID_INPUT.rt);
    element.fillFilledClear(pemilihanTetapPage.inputRw, data.VALID_INPUT.rw);
    element.fillSelect(pemilihanTetapPage.inputKelurahan, data.VALID_INPUT.kelurahan, {force: true});
    element.fillFilledClear(pemilihanTetapPage.inputTempatLahir, data.VALID_INPUT.tempatLahir);
    element.fillFilledClear(pemilihanTetapPage.inputTanggalLahir, data.VALID_INPUT.editTanggalLahir);
    element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.VALID_INPUT.jk, {force: true});
    element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.VALID_INPUT.statusKawin, {force: true});
    element.fillSelect(pemilihanTetapPage.inputCaleg, data.VALID_INPUT.caleg, {force: true});
    element.fillSelect(pemilihanTetapPage.inputTps, data.VALID_INPUT.tps, {force: true});
    element.fillCheck(pemilihanTetapPage.inputStatus, data.VALID_INPUT.status, {force: true});
    element.click(pemilihanTetapPage.saveButton);
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'Successfully add data.');
  });

  it("Edit Data Duplikat", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Edit Data Duplicate
    cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.edit);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.edit);
    element.click(pemilihanTetapPage.editButton,{ multiple: true });
    assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
    element.fillFilledClear(pemilihanTetapPage.inputKk, data.DUPLICATE_INPUT.kk);
    element.fillFilledClear(pemilihanTetapPage.inputNik, data.DUPLICATE_INPUT.nik);
    element.fillFilledClear(pemilihanTetapPage.inputNama, data.DUPLICATE_INPUT.name);
    element.fillFilledClear(pemilihanTetapPage.inputAlamat, data.DUPLICATE_INPUT.address);
    element.fillFilledClear(pemilihanTetapPage.inputRt, data.DUPLICATE_INPUT.rt);
    element.fillFilledClear(pemilihanTetapPage.inputRw, data.DUPLICATE_INPUT.rw);
    element.fillSelect(pemilihanTetapPage.inputKelurahan, data.DUPLICATE_INPUT.kelurahan, {force: true});
    element.fillFilledClear(pemilihanTetapPage.inputTempatLahir, data.DUPLICATE_INPUT.tempatLahir);
    element.fillFilledClear(pemilihanTetapPage.inputTanggalLahir, data.DUPLICATE_INPUT.editTanggalLahir);
    element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.DUPLICATE_INPUT.jk, {force: true});
    element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.DUPLICATE_INPUT.statusKawin, {force: true});
    element.fillSelect(pemilihanTetapPage.inputCaleg, data.DUPLICATE_INPUT.caleg, {force: true});
    element.fillSelect(pemilihanTetapPage.inputTps, data.DUPLICATE_INPUT.tps, {force: true});
    element.fillCheck(pemilihanTetapPage.inputStatus, data.DUPLICATE_INPUT.status, {force: true});
    element.click(pemilihanTetapPage.saveButton);
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'No KK and NIK Must Unique.');
  });

  it('Edit Data Blank', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    // Edit Data Blank
    cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.edit);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.edit);
    element.click(pemilihanTetapPage.editButton,{ multiple: true });
    assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
    element.click(pemilihanTetapPage.saveButton);
    cy.get(pemilihanTetapPage.inputKk).clear();
    cy.get(pemilihanTetapPage.inputNama).clear();
    cy.get(pemilihanTetapPage.inputRt).clear();
    cy.get(pemilihanTetapPage.inputRw).clear();
    cy.get('#select2-pemilih_kelurahan_id-container > .select2-selection__clear').click({force: true});
    cy.get('#select2-pemilih_status_kawin-container > .select2-selection__clear').click({force: true});
    cy.get('#select2-pemilih_caleg_id-container > .select2-selection__clear').click({force: true});
    cy.get('#select2-pemilih_tps_id-container > .select2-selection__clear').click({force: true});
    assert.shouldContainText(pemilihanTetapPage.errorKk, ' No. KK  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorNik, ' No. NIK  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorNama, ' Nama  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorAlamat, ' Alamat  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorRt, ' RT  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorRw, ' RW  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorKelurahan, ' Kelurahan  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorTempatLahir, ' Tempat Lahir  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorTanggalLahir, ' Tanggal Lahir  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorStatusKawin, ' Status Kawin  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorCaleg, ' Caleg  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorTps, ' TPS  tidak boleh kosong.');
    cy.screenshot();
  });

  it('Edit Data Invalid', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);

    // Edit Data Invalid
    cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.edit);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.edit);
    element.click(pemilihanTetapPage.editButton,{ multiple: true });
    assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
    element.fillFilledClear(pemilihanTetapPage.inputKk, data.INVALID_INPUT.kk);
    element.fillFilledClear(pemilihanTetapPage.inputNik, data.INVALID_INPUT.nik);
    element.fillFilledClear(pemilihanTetapPage.inputNama, data.INVALID_INPUT.name);
    element.fillFilledClear(pemilihanTetapPage.inputAlamat, data.INVALID_INPUT.address);
    element.fillFilledClear(pemilihanTetapPage.inputRt, data.INVALID_INPUT.rt);
    element.fillFilledClear(pemilihanTetapPage.inputRw, data.INVALID_INPUT.rw);
    element.fillSelect(pemilihanTetapPage.inputKelurahan, data.INVALID_INPUT.kelurahan, {force: true});
    element.fillFilledClear(pemilihanTetapPage.inputTempatLahir, data.INVALID_INPUT.tempatLahir);
    element.fillFilledClear(pemilihanTetapPage.inputTanggalLahir, data.INVALID_INPUT.editTanggalLahir);
    element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.INVALID_INPUT.jk, {force: true});
    element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.INVALID_INPUT.statusKawin, {force: true});
    element.fillSelect(pemilihanTetapPage.inputCaleg, data.INVALID_INPUT.caleg, {force: true});
    element.fillSelect(pemilihanTetapPage.inputTps, data.INVALID_INPUT.tps, {force: true});
    element.fillCheck(pemilihanTetapPage.inputStatus, data.INVALID_INPUT.status, {force: true});
    element.click(pemilihanTetapPage.saveButton);
    assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'Jumlah karakter KK tidak boleh lebih atau kurang dari 16 karakter');
    assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'Jumlah karakter NIK tidak boleh lebih atau kurang dari 16 karakter');
    assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'No KK harus menggunakan angka');
    assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'No NIK harus menggunakan angka');
  });

  it('Edit Data Satu Karakter', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Edit Data One
    cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.edit);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.edit);
    element.click(pemilihanTetapPage.editButton,{ multiple: true });
    assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
    element.fillFilledClear(pemilihanTetapPage.inputKk, data.INVALID_INPUT_ONE_CHAR.kk);
    element.fillFilledClear(pemilihanTetapPage.inputNik, data.INVALID_INPUT_ONE_CHAR.nik);
    element.fillFilledClear(pemilihanTetapPage.inputNama, data.INVALID_INPUT_ONE_CHAR.name);
    element.fillFilledClear(pemilihanTetapPage.inputAlamat, data.INVALID_INPUT_ONE_CHAR.address);
    element.fillFilledClear(pemilihanTetapPage.inputRt, data.INVALID_INPUT_ONE_CHAR.rt);
    element.fillFilledClear(pemilihanTetapPage.inputRw, data.INVALID_INPUT_ONE_CHAR.rw);
    element.fillSelect(pemilihanTetapPage.inputKelurahan, data.INVALID_INPUT_ONE_CHAR.kelurahan, {force: true});
    element.fillFilledClear(pemilihanTetapPage.inputTempatLahir, data.INVALID_INPUT_ONE_CHAR.tempatLahir);
    element.fillCheck(pemilihanTetapPage.inputJenisKelamin, data.INVALID_INPUT_ONE_CHAR.jk, {force: true});
    element.fillSelect(pemilihanTetapPage.inputStatusKawin, data.INVALID_INPUT_ONE_CHAR.statusKawin, {force: true});
    element.fillSelect(pemilihanTetapPage.inputCaleg, data.INVALID_INPUT_ONE_CHAR.caleg, {force: true});
    element.fillSelect(pemilihanTetapPage.inputTps, data.INVALID_INPUT_ONE_CHAR.tps, {force: true});
    element.fillCheck(pemilihanTetapPage.inputStatus, data.INVALID_INPUT_ONE_CHAR.status, {force: true});
    element.click(pemilihanTetapPage.saveButton);
    assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'Jumlah karakter KK tidak boleh lebih atau kurang dari 16 karakter');
    assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'Jumlah karakter NIK tidak boleh lebih atau kurang dari 16 karakter');
    assert.shouldContainText(pemilihanTetapPage.errorKkUnder16Char, 'No KK harus menggunakan angka');
    assert.shouldContainText(pemilihanTetapPage.errorNikUnder16Char, 'No NIK harus menggunakan angka');
  });

  it('Edit Data Satu Spasi', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);

    // Edit Data Space
    cy.get(pemilihanTetapPage.searchInput).type(data.SEARCH_DATA.edit);
    assert.shouldContainText(pemilihanTetapPage.assertionSearch, data.SEARCH_DATA.edit);
    element.click(pemilihanTetapPage.editButton,{ multiple: true });
    assert.shouldContainText(pemilihanTetapPage.assertionAdd, 'Form Input Pemilih');
    element.fillFilledClear(pemilihanTetapPage.inputKk, data.INVALID_INPUT_SPACE.kk);
    element.fillFilledClear(pemilihanTetapPage.inputNik, data.INVALID_INPUT_SPACE.nik);
    element.fillFilledClear(pemilihanTetapPage.inputNama, data.INVALID_INPUT_SPACE.name);
    element.fillFilledClear(pemilihanTetapPage.inputAlamat, data.INVALID_INPUT_SPACE.address);
    cy.get(pemilihanTetapPage.inputRt).clear().type(data.INVALID_INPUT_SPACE.rt).should("have.value", data.INVALID_INPUT_SPACE.emptyValue);
    cy.get(pemilihanTetapPage.inputRw).clear().type(data.INVALID_INPUT_SPACE.rw).should("have.value", data.INVALID_INPUT_SPACE.emptyValue);
    cy.get('#select2-pemilih_kelurahan_id-container > .select2-selection__clear').click({force: true});
    cy.get('#select2-pemilih_status_kawin-container > .select2-selection__clear').click({force: true});
    cy.get('#select2-pemilih_caleg_id-container > .select2-selection__clear').click({force: true});
    cy.get('#select2-pemilih_tps_id-container > .select2-selection__clear').click({force: true});
    element.fillFilledClear(pemilihanTetapPage.inputTempatLahir, data.INVALID_INPUT_SPACE.tempatLahir);
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
    assert.shouldContainText(pemilihanTetapPage.errorStatusKawin, ' Status Kawin  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorCaleg, ' Caleg  tidak boleh kosong.');
    assert.shouldContainText(pemilihanTetapPage.errorTps, ' TPS  tidak boleh kosong.');
    cy.screenshot();
  });
});

describe("Import Test", () => {
  it("Import Data Valid", () => {
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Import pemilihan tetap dengan data valid
    element.click(pemilihanTetapPage.dropDownImport);
    element.click(pemilihanTetapPage.modalImport);
    element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.valid);
    element.click(pemilihanTetapPage.buttonFileImport);
    element.click(pemilihanTetapPage.swalConfirm);
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'Successfully changed data.');
    cy.screenshot();
  });

  it("Import Data Invalid", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Import pemilihan tetap dengan data tidak valid
    element.click(pemilihanTetapPage.dropDownImport);
    element.click(pemilihanTetapPage.modalImport);
    element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.invalid);
    element.click(pemilihanTetapPage.buttonFileImport);
    element.click(pemilihanTetapPage.swalConfirm);
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'System error, please contact the Administrator');
  });

  it("Import Data Duplikat", () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Import pemilihan tetap dengan data duplikat
    element.click(pemilihanTetapPage.dropDownImport);
    element.click(pemilihanTetapPage.modalImport);
    element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.duplikat);
    element.click(pemilihanTetapPage.buttonFileImport);
    element.click(pemilihanTetapPage.swalConfirm);
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'System error, please contact the Administrator');
  });

  it('Import Data Blank', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Import pemilihan tetap dengan data blank
    element.click(pemilihanTetapPage.dropDownImport);
    element.click(pemilihanTetapPage.modalImport);
    element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.blank);
    element.click(pemilihanTetapPage.buttonFileImport);
    element.click(pemilihanTetapPage.swalConfirm);
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'System error, please contact the Administrator');
    cy.screenshot();
  });

  it('Import Data File Non Excel', () => {
    // Login Test
    element.fillFilled(pemilihanTetapPage.usernameInput, data.VALID_LOGIN.username);
    element.fillFilled(pemilihanTetapPage.passwordInput, data.VALID_LOGIN.password);
    element.click(pemilihanTetapPage.loginButton);
    assert.shouldContainText(pemilihanTetapPage.countDown,'Countdown');
    cy.wait(3000);
    
    // Redirect ke menu pemilihan tetap
    element.click(pemilihanTetapPage.menuPemilihanTetap);
    
    // Import pemilihan tetap dengan data non excel
    element.click(pemilihanTetapPage.dropDownImport);
    element.click(pemilihanTetapPage.modalImport);
    element.fillFile(pemilihanTetapPage.inputFileImport, data.FILE.word);
    element.click(pemilihanTetapPage.buttonFileImport);
    element.click(pemilihanTetapPage.swalConfirm);
    assert.shouldContainText(pemilihanTetapPage.swalContent, 'System error, please contact the Administrator');
    cy.screenshot();
  });
});
