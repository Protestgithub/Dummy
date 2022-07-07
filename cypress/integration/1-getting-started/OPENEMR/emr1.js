/// <reference types="cypress" />
describe('the first test', () => {

    it('the first emr1', () => {

        cy.visit("http://34.232.235.205/openemr/openemr/interface/login/login.php?site=default")
        cy.get('#authUser').should('have.text','')
        cy.get('#clearPass').should('exist')
        cy.get(':nth-child(5) > div > .form-control').should('exist')
        cy.get('#login-button').should('have.text','Login')


     })
})