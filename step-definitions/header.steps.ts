const { I, headerFragment } = inject();

Then("the cart item badge must show correct count of {int}", async (count: number) => {
  await I.seeTextEquals(count.toString(), headerFragment.cartItemCount);
});

Then("the cart item badge must not be displayed", async () => {
  await I.dontSee(headerFragment.cartItemCount);
});

When("I click Log out from hamburger menu", async () => {
  await headerFragment.doLogout();
});

Then("I go to the cart page", async () => {
  await I.click(headerFragment.cartLink);
  await I.seeInCurrentUrl("/cart.html");
});
