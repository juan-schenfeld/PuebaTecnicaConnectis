// <reference types="cypress" />
import HomePage from '../../support/PageObjects/HomePage'
describe('Bug case', function() {
  it('BUG001 - al usar filtros el numero de equipos es erroneo', function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Uncaught exception:', err.message)
        return false;
      });
    const homePage = new HomePage()

    cy.visit('/')
    homePage.filterByPriceRange("0_1000000")
    homePage.filterByPriceRange('200000_300000')
    homePage.filterByStorage(128)
    cy.wait(1500)
    let length = 6
    homePage.getTotalProductsCount(length)
    homePage.validateProductListLength(length)

    cy.screenshot()
    
  })
})