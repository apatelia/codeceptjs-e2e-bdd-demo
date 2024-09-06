@login
Feature: Login

  Background:
    Given I am on login page

  @valid_creds
  Scenario Outline: I can login with valid credentials
    When I try to login with "<username>" as username and "<password>" as password
    Then I should be on Products page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | error_user    | secret_sauce |
      | visual_user   | secret_sauce |
      | problem_user  | secret_sauce |

  @invalid_creds
  Scenario Outline: I must not be able to login with invalid credentials
    When I try to login with "<username>" as username and "<password>" as password
    Then I should see invalid credentials error message

    Examples:
      | username         | password         |
      | invalid_username | secret_sauce     |
      | standard_user    | invalid_password |
      | invalid_username | invalid_password |

  @locked_out_user
  Scenario: I, a Locked out user, is not able to login despite using valid login credentials
    When I try to login with "locked_out_user" as username and "secret_sauce" as password
    Then I should see a locked out error message
