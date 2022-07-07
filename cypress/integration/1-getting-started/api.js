/// <reference types="Cypress" />

const { times } = require("lodash")


describe('my first test suite',function()
{
  
  it('my second test case', function()
  {
  cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
      "name":"Learn Appium Automation with Java",
      "isbn":"bcggsss",
      "aisle":"22s7",
      "author":"John foe"
  }).then(function(response)
  {
      expect(response.body).to.have.property("Msg","successfully added")
      expect(response.status).to.eq(200)
  })


  })
})