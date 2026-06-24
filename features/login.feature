Feature: Login functionality 
 
Background: 
  Given user is on login page

@smoke
Scenario: Successful login with valid credentials 
  When user enters username "tomsmith" and password "SuperSecretPassword!" 
  Then user should be navigated to dashboard 
 
@regression
Scenario: Invalid login with wrong username
  When user enters username "WrongUser" and password "SuperSecretPassword!"
  Then invalid username message should be displayed 

@regression
Scenario: Invalid login with wrong password
  When user enters username "tomsmith" and password "wrongPassword"
  Then invalid password message should be displayed

@smoke
Scenario: Logout Successfully
    When user enters username "tomsmith" and password "SuperSecretPassword!"
    And user clicks logout button
    Then user should be redirected to login page

@datadriven
 
Scenario Outline: Login with multiple credentials
    Given user is on login page
    When user enters "<username>" and "<password>"
    Then login result should be "<result>"

Examples:
    | username     | password              | result   |
    | tomsmith     | SuperSecretPassword!  | success  |
    | invalidUser  | SuperSecretPassword!  | invalidUsername  |
    | tomsmith     | wrongPassword         | invalidPassword  |
    
    