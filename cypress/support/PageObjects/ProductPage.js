// <reference types="cypress" />

class ProductPage{

    verifyInstallments(expectedInstallments){
        return cy.get('p.financing').should('contain', `${expectedInstallments} cuotas sin interés`)
    }
    calculateInstallments(bank, card){
        cy.get('#open-installments-modal').click()
        cy.wait(2000)

        cy.get('#bankSelector > input').type(bank)
        cy.get('#selectBank li > div').contains(bank).click()
        
        cy.get('#cardSelector > input').click()
        cy.get('[data-card=Visa]').click()
        
        cy.get('#calculate_btn > button').click()
    }

    getInstallmentsWithBank(){
        return cy.get('#bodyTable > tr > td ')
    }

    buyButtonClick(){
        cy.get('#swatch_attribute_bill').click({force: true})
    }


}

export default ProductPage