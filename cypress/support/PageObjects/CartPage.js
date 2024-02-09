// <reference types="cypress" />

class CartPage{

    getProductName(){
        return cy.get('td.item > div.product-item-details')
    }
    getProductPrice(){
        return cy.get('td.price > span')
    }

}

export default CartPage;