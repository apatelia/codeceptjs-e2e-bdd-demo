const { I, productsPage } = inject();

Then("I should be on Products page", async () => {
  await I.seeInCurrentUrl("/inventory.html");
});

When("I add {string} to the cart", async (productName: string) => {
  await productsPage.addProductToCart(productName);
});

Then("I should be able to remove {string} from the cart, using the Remove button", async (productName: string) => {
  await productsPage.removeProductFromCart(productName);
});
