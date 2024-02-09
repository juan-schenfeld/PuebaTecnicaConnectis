// <reference types="cypress" />

class HomePage{

    getProductItemByModel(model){
        return cy.get('li.product-item > a').contains(model)
    }
    getProductItemByIndex(index){
        return cy.get('li.product-item > a').eq(index)
    }
    clickFilterButton(){
        cy.get(".filters strong[role='heading']").click()
    }
    filterByPriceRange(priceRange){
        this.clickFilterButton()
        cy.get(`[data-value=${priceRange}]`).click()
    }
    filterByStorage(storage){
        this.clickFilterButton()
        cy.contains('li > a', `${storage}GB`).click()
    }
    validateProductListLength(length){
        cy.get('.total-products > p').should('include.text', length)
    }
    getTotalProductsCount(length){
        cy.get('.products > ol > li').should('have.length', length)
    }

}

export default HomePage