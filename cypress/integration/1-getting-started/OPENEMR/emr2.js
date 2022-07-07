/// <reference types="cypress" />
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
        cy.get('#login_form').invoke('attr','target','_self')
        cy.get('#login-button').click()





    })
})