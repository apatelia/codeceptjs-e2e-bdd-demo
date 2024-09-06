const { I, loginPage } = inject();

Given("I am on login page", async () => {
  await loginPage.goto();
});

When("I try to login with {string} as username and {string} as password", async (username: string, password: string) => {
  await loginPage.login(username, password);
});

Then("I should see invalid credentials error message", async () => {
  await I.seeElement(loginPage.errorMessage);
  await I.seeTextEquals("Epic sadface: Username and password do not match any user in this service", loginPage.errorMessage);
});

Then("I should see a locked out error message", async () => {
  await I.seeElement(loginPage.errorMessage);
  await I.seeTextEquals("Epic sadface: Sorry, this user has been locked out.", loginPage.errorMessage);
});

Then("I must be logged out", async () => {
  await I.seeElement(loginPage.loginButton);
});
