/// <reference types="Cypress" />


describe('my second test suite',function()
{

  
  it('my second test case', function()
  {
 
 //cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
 cy.visit(Cypress.env('url')+"/AutomationPractice/")

   
   cy.get('#opentab').then(function(el)
   {
       const url=el.prop('href')
       cy.log(url)
       cy.visit(url)
   })
    


  })
})