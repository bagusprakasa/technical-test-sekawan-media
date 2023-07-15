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
      
    });
  });