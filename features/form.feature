Feature: Text Box Form

Background: Given user is on form page

@smoke
Scenario: Submit form with multiple fields
    Given user is on form page 
    When user fills the form with following data: 
        | field | value | 
        | name  | John  | 
        | email | john@test.com | 
        |address| newYork|
    Then form should be submitted successfully