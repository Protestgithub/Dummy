/// <reference types="cypress" />
/// <refrence types="cypress-iframe" />
import 'cypress-iframe'

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
        cy.get('[class="navbar-toggler-icon"]').click()//invoke('show')
        cy.contains('Calendar').click({force:true})
        //cy.go('forward')
       /* cy.get('#mainMenu').each(($el, index, $list) => {
            if($el.text() === "Calendar")
            {
                cy.wrap($el).click()
            }
        })*/
        //cy.get('.appMenu > :nth-child(1) > .menuLabel').click({force:true})
       // cy.frameLoaded('#logoutinnerframe')
               // cy.iframe().find('.appMenu > :nth-child(1) > .menuLabel').click()
        //
        //cy.frameLoaded(':nth-child(1) > iframe')
        //cy.iframe().find('.body_top')
        })
    })