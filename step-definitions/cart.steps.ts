const { I, cartPage } = inject();

Then("price of the {string} in cart must match {string}", async (productName: string, productPrice: string) => {
  const priceInCart = await cartPage.getProductPrice(productName);
  I.assertEqual(priceInCart, productPrice);
});

Then("quantity of the {string} in cart must match {int}", async (productName: string, productQuantity: number) => {
  const quantityInCart = await cartPage.getProductQuantity(productName);
  I.assertEqual(quantityInCart, productQuantity);
});

When("I remove {string} from the cart", async (productName: string) => {
  await cartPage.removeProductFromCart(productName);
});

When("I click on the Continue Shopping button", async () => {
  await I.click(cartPage.continueShoppingButton);
});

When("I click on the Checkout button", async () => {
  await I.click(cartPage.checkoutButton);
});

Then("I should be on Your Information page", async () => {
  await I.seeInCurrentUrl("checkout-step-one.html");
});
