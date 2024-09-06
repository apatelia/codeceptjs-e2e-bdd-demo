@cart
Feature: Cart

    Background:
        Given I am on login page
        When I try to login with "standard_user" as username and "secret_sauce" as password
        Then I should be on Products page
        When I add "Sauce Labs Backpack" to the cart
        Then I go to the cart page

    @verify_product_details
    Scenario: Test that the correct product is added to the cart
        Then price of the "Sauce Labs Backpack" in cart must match "$29.99"
        And quantity of the "Sauce Labs Backpack" in cart must match 1

    @remove_from_cart
    Scenario: Test removal of a product from the cart
        When I remove "Sauce Labs Backpack" from the cart
        Then the cart item badge must not be displayed

    @continue_shopping
    Scenario: Test that clicking on 'Continue Shopping' button takes back to Products page
        When I click on the Continue Shopping button
        Then I should be on Products page

    @begin_checkout
    Scenario: Test that clicking on `Checkout` button starts checkout
        When I click on the Checkout button
        Then I should be on Your Information page

    @logout
    Scenario: Test that the user is able to log out from the cart page
        When I click Log out from hamburger menu
        Then I must be logged out

    @cart_footer @social_media_links
    Scenario Outline: Test Social Media links in footer
        Given that "<Social Media>" link in footer is visible
        When I click "<Social Media>" link from footer
        Then it should open correct "<URL>" in a new tab

        # title-format: <Social Media> link in footer should work
        Examples:
        | Social Media | URL                                         |
        | Twitter/X    | https://x.com/saucelabs                     |
        | Facebook     | https://www.facebook.com/saucelabs          |
        | LinkedIn     | https://www.linkedin.com/company/sauce-labs |

    @cart_footer @copyright
    Scenario: Test that the copyright text in footer is visible
        Then copyright text in footer should be visible
        And the copyright text contents should be correct
