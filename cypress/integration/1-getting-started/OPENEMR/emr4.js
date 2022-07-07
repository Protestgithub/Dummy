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
        cy.get('#login_form').invoke('removeAttr','target')
        cy.get('#login-button').click()
        
        cy.get('#user_icon').click()
       // cy.frameLoaded('#logoutinnerframe').eq(0)
        //cy.iframe().find('[data-bind="click: logout"]').click({force:true})
        //cy.get('iframe')
        cy.get('[class="menuLabel"]').eq(5).click()
       // cy.get('[data-bind="click: logout"]').click({force:true})
         
             
         
 
        //cy.get('[data-bind="click: changePassword"]').click({force:true})
    /* cy.frameLoaded('#logoutinnerframe')
   cy.iframe().find('#mainBox')
    
        cy.get('[class="navbar-toggler-icon"]').click()
        cy.get('#user_icon').click() //invoke('show')
        cy.contains('Logout').click({force:true})
       cy.get('[data-bind="click: logout"]').click({force:true})
        cy.get('[data-bind="click: logout"]').invoke('text').then((text) =>{
            expect(text.replace(/\u00a0/g,' ')).equal(' Logout')
       })
        cy.go('back')*/
      /*  cy.get('#userdropdown').each(($el, index, $list) => {
            if($el.text() === "Logout")
            {
                cy.wrap($el).click()
            }
        })*/
       // top.restoreSession();
        //document.getElementById("logoutinnerframe").src=webroot_url+"/interface/logout.php"  
        })
    })