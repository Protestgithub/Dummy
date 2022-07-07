/// <reference types="Cypress" />


describe('my first test suite',function()
{
  before(function(){
    cy.fixture('am').then(function(data)
    {
  this.data=data
    })
  })
  it('my first test case', function()
  {
      cy.visit("https://www.amazon.in/")
      cy.get('#nav-link-accountList').click()
      cy.contains('Email or mobile phone number').should('exist')
      cy.contains('Create your Amazon account').should('exist')
      cy.get('#ap_email').type(this.data.email)
      cy.get('.a-button-inner > #continue').click()
      cy.get('#ap_password').type(this.data.password)
      cy.get('[class="a-input-text a-span12 auth-autofocus auth-required-field"]').should('have.text','')
      cy.get('[class="a-button-input"]').should('have.text','')
      cy.get('#signInSubmit').click()

      cy.get('#twotabsearchtextbox').type('redmi note 5 pro')
      cy.get('#nav-search-submit-button').click()
      cy.get('[class="a-link-normal s-no-outline"]').invoke('removeAttr','target')
      cy.get('[data-asin="B07BJZJWBK"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click()
      cy.get('[class="a-icon a-accordion-radio a-icon-radio-active"]').click()
      cy.get('#add-to-cart-button').should('have.value','Add to Cart')
      cy.get('#add-to-cart-button').click()
      cy.get('.a-size-medium-plus').should('contain','Added to Cart')
          

      cy.get('#attach-added-to-cart-message > .a-fixed-left-grid-inner > .a-col-right > :nth-child(1)').click({force: true})
      cy.get('.nav-cart-icon').click({force: true}) 
      cy.get('.sc-action-delete > .a-declarative > .a-color-link').should('have.value','Delete')
      cy.get('.sc-invisible-when-no-js > .a-checkbox > label > input').check()

    })
})
        
  
    