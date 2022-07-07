/// <reference types="Cypress" />


describe('my first test suite',function()
{
  
  it('my first test case', function()
  {
      cy.visit("https://www.amazon.in/")
      cy.get('#nav-link-accountList').click()
      cy.contains('Email or mobile phone number').should('exist')
      cy.contains('Create your Amazon account').should('exist')
      cy.get('#ap_email').type("7483877236")
      cy.get('.a-button-inner > #continue').click()
      cy.get('#ap_password').type("Raju@66")
      cy.get('#signInSubmit').click()
      //cy.get(".twotabsearchtextbox")
      cy.get('#twotabsearchtextbox').type('redmi note 5 pro')
      cy.get('#nav-search-submit-button').click()
      cy.get('[class="a-link-normal s-no-outline"]').invoke('removeAttr','target')
      // cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').invoke('removeAttr','target')
      cy.get('[data-asin="B07BJZJWBK"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click()
     //cy.get('[class="a-link-normal s-no-outline"]').invoke('removeAttr','target')
    // cy.visit("https://www.amazon.in/Xiaomi-Redmi-Note-Pro-Storage/dp/B07BJZJWBK/ref=sr_1_3?crid=DI2II2SGN6HB&keywords=redmi+note+5+pro&qid=1654080763&sprefix=redmi+note+5+pro%2Caps%2C1156&sr=8-3")
     cy.get('[class="a-icon a-accordion-radio a-icon-radio-active"]').click()
      cy.get('#add-to-cart-button').click()
     cy.get('#attach-accessory-proceed-to-checkout-text').click({force: true})
     cy.get('#address-ui-widgets-enterAddressLine1').type("155/4 kb sandra")
     

     // cy.get('[class="a-button-input"]').click()
      //cy.get('[class="a-button-inner"]').click()
      //cy.get('[data-asin="B07BJZJWBK"] ').click()
  })
})