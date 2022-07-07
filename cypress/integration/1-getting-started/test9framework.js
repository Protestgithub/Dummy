/// <refrence types="cypress" />
/// <refrence types="cypress-iframe" />
//import 'cypress-iframe
import Homepage from '../../support/pageObjects/Homepage'
import Productpage from '../../support/pageObjects/Productpage'

describe('frames test',function(){
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
      })
    
   it('demo frame example',function(){

    const homepage=new Homepage()
    const productpage=new Productpage()

    cy.visit(Cypress.env('url')+"/angularpractice/")


//cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
homepage.getEditBox().type(this.data.name)

//cy.get('select').select(this.data.gender)
homepage.getGender().select(this.data.gender)

//cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
homepage.getTwoWayDataBinding().should('have.value',this.data.name)

//cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)
homepage.getEditBox().should('have.attr','minlength',2)

//cy.get('#inlineRadio3').should('be.disabled')
homepage.getEntrepreneaur().should('be.disabled')

//Cypress.config('defaultCommandTimeout',8000)

//cy.get(':nth-child(2) > .nav-link').click()
homepage.getShopTab().click()

this.data.productName.forEach(function(element) {
     cy.selectProduct(element)
});
//cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
productpage.checkOutButton().click()
var sum=0

cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
  const amount=$el.text()
  var res=amount.split(" ")
  res=res[1].trim()
  sum=Number(sum)+Number(res)

}).then(function()
{
cy.log(sum)
})
cy.get('h3 strong').then(function(element)
{
  const amount=element.text()
  var res=amount.split(" ")
  var total=res[1].trim()
 expect(Number(total)).to.equal(sum)

})
cy.contains('Checkout').click()
cy.get('#country').type('India')
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').click({force:true})
cy.get('input[type="submit"]').click()
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element)
{
    const actualText=element.text()
    
    expect(actualText.includes("Success")).to.be.true
   
  
})

 })
})