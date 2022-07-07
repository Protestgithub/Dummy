/// <reference types="Cypress" />


describe('my first test suite',function()
{

  
  it('my second test case', function()
  {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/ ")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    //selenium get hit url in browser,cypress get acts like findelements of selenium
    cy.get('.product').should('have.length',5)
    cy.get('.product:visible').should('have.length',4)
    //parent child chaining
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').should('have.length',4)

    cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('sfd')
    })
  console.log('sf')
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {
         const textVeg=$el.find('h4.product-name').text()
         if(textVeg.includes('Cashews'))
         {
            cy.wrap( $el).find('button').click()
         }
    })
    //asser if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')

    //this is to print in logs
    cy.get('.brand').then(function(logoelement)
     {
         cy.log(logoelement.text())

     })


})

} )