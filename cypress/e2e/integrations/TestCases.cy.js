// <reference types="cypress" />
import HomePage from '../../support/PageObjects/HomePage'
import ProductPage from '../../support/PageObjects/ProductPage'
import CartPage from '../../support/PageObjects/CartPage'

describe('Test cases', function() {

    it('CP001 - Validar cuotas en compra de equipo -Cuotas.6 -Equipo.A14', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err.message)
            return false;
          });
        const homePage = new HomePage()
        const productPage = new ProductPage();

        cy.visit('/')
        homePage.getProductItemByModel('Galaxy A14').click()
        productPage.verifyInstallments(6)
        
    })
    
    it('CP002 - Aplicar filtro de equipos -Memoria Interna.128GB -Precio Entre 200Ky300K', function() {
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
        homePage.getTotalProductsCount(6)


    })
    
    it('CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err.message)
            return false;
          });
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit('/')
        homePage.getProductItemByIndex(2).click()
        productPage.calculateInstallments('Credicoop','Visa')
        cy.wait(1000)
        productPage.getInstallmentsWithBank().should('not.contain', '60 cuotas')
        

    })
    
    it('CP004 - Añodir equipo al carrito, -Equipo.A14', function() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err.message)
            return false;
          });
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const cartPage = new CartPage()
        
        cy.visit('/')

        homePage.getProductItemByModel('Galaxy A14').click()
        
        productPage.buyButtonClick();

        cy.wait(1000)
        cartPage.getProductName().should('contain', 'Galaxy A14');
    })
    })

