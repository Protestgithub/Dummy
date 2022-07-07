/// <reference types="Cypress" />


describe('my second test suite',function()
{

  
  it('my second test case', function()
  {
 
 cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
 
 //cy.get('div.mouse-hover-content').invoke('show')
 cy.contains('Top').click({force:true})
 cy.url().should('include','top')
 



  })
})