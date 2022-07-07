/// <reference types="Cypress" />


describe('my second test suite',function()
{

  
  it('my second test case', function()
  {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/ ")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //selenium get hit url in browser,cypress get acts like findelements of selenium
   
       //parent child chaining
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {
         const textVeg=$el.find('h4.product-name').text()
         if(textVeg.includes('Cashews'))
         {
            cy.wrap( $el).find('button').click()
         }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
  })
})