export function get(selector) {
  return cy.get(selector);
}

export function fillFilled(selector, value) {
  return cy.get(selector).type(value).should("have.value", value);
}

export function fillFilledClear(selector, value) {
  return cy.get(selector).clear().type(value).should("have.value", value);
}

export function fillSelect(selector, value) {
  return cy.get(selector).select(value).should("have.value", value);
}

export function fillFile(selector, value) {
  return cy.get(selector).selectFile(value);
}

export function click(selector, ...args) {
  return cy.get(selector).click(...args);
}
