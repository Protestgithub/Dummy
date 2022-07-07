Feature: End to end Ecommerce validation

     application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total price
    Then select the country submit and verify thankyou


        @Smoke
      Scenario:Filling the form to shop
      Given I open Ecommerce page
      When I fill the form detials
     |name | gender |
     |bobz | Female |
      Then validate the forms behaviour
      And select the shop page

