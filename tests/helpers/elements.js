export function get(selector) {
  return cy.get(selector);
}

export function fillFilled(selector, value) {
  return cy.get(selector).type(value).should("have.value", value);
}

export function fillFilledClear(selector, value) {
  return cy.get(selector).clear().type(value).should("have.value", value);
}

export function fillSelect(selector, value, ...args) {
  return cy.get(selector).select(value, ...args).should("have.value", value);
}

export function fillCheck(selector, value, ...args) {
  return cy.get(selector).check(value, ...args).should("have.value", value);
}

export function fillUncheck(selector, ...args) {
  return cy.get(selector).uncheck(...args);
}

export function fillFile(selector, value) {
  return cy.get(selector).selectFile(value);
}

export function click(selector, ...args) {
  return cy.get(selector).click(...args);
}
