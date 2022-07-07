/// <refrence types="cypress" />
/// <refrence types="cypress-iframe" />
import 'cypress-iframe'

describe('frames test',function(){
   it('demo frame example',function(){
       

cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe")

cy.iframe().find("a[href='mentorship']").eq(0).click()

//cy.iframe().find("h1[class='pricing-title']").should('have.length',2)


   })
})