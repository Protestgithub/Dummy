/// <reference types="cypress" />
/// <refrence types="cypress-iframe" />
//import 'cypress-iframe'

describe('the first test', function()  {
    before(function()
    {
        cy.fixture('emr').then(function(data)
        {
      this.data=data
        })
    })

    it('the first emr1', function() {

        cy.visit("http://34.232.235.205/openemr/openemr/interface/login/login.php?site=default")
         cy.get('#authUser').type(this.data.user)
        cy.get('#clearPass').type(this.data.password)
        cy.get('select').select('Default - English (Standard)')

        cy.get('#login_form').invoke('attr','target','_self')
        cy.get('#login-button').click()
        cy.get('[class="navbar-toggler-icon"]').click()
       // cy.frameLoaded('#logoutinnerframe')
       // cy.get('logoutinnerframe').then(function($iframe)
        //{
        //    $iframe.contents().find('#mainMenu')
        //})

        //cy.iframe().find("#mainMenu").should('have.length',14)
        //cy.get('.appMenu > :nth-child(1) > .menuLabel').click({force:true})
        
       cy.get('.appMenu > :nth-child(1) > .menuLabel').should('have.text','Calendar')
        cy.get('.appMenu > :nth-child(2) > .menuLabel').should('have.text','Finder')
        cy.get('.appMenu > :nth-child(3) > .menuLabel').should('have.text','Flow')
        cy.get('.appMenu > :nth-child(4) > .menuLabel').should('have.text','Recalls')
        cy.get('.appMenu > :nth-child(5) > .menuLabel').should('have.text','Messages')
        cy.get('.appMenu > :nth-child(6) > :nth-child(2) > :nth-child(1)').should('have.text','Patient')
        cy.get('.appMenu > :nth-child(7) > .menuSection > .dropdown-toggle').should('have.text','Fees')
        cy.get('.appMenu > :nth-child(8) > .menuSection > .dropdown-toggle').should('have.text','Modules')
        cy.get(':nth-child(9) > .menuSection > .dropdown-toggle').should('have.text','Procedures')
        cy.get(':nth-child(10) > :nth-child(2) > :nth-child(1)').should('have.text','Admin')
        cy.get(':nth-child(11) > :nth-child(2) > :nth-child(1)').should('have.text','Reports')
        cy.get(':nth-child(12) > :nth-child(2) > :nth-child(1)').should('have.text','Miscellaneous')
        cy.get(':nth-child(13) > .menuSection > .dropdown-toggle').should('have.text','Popups')
        cy.get('#anySearchBox').should('have.text','')





    })
})