const { I } = inject();

export class ProductsPage {
  private findProductByName(productName: string): CodeceptJS.Locator {
    return locate("div.inventory_item").withDescendant("div.inventory_item_name ").withText(productName);
  }

  async addProductToCart(productName: string): Promise<void> {
    const product = this.findProductByName(productName);

    const addToCartButton = product.find("button");
    await I.click(addToCartButton);
  }

  async removeProductFromCart(productName: string): Promise<void> {
    const product = this.findProductByName(productName);

    const removeButton = product.find("button");
    await I.click(removeButton);
  }
}

module.exports = new ProductsPage();
