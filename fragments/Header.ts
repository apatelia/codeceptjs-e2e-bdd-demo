const { I } = inject();

export class Header {
  readonly hamburgerMenuButton: CodeceptJS.LocatorOrString;
  readonly logoutMenuEntry: CodeceptJS.LocatorOrString;
  readonly hamburgerMenuCloseButton: CodeceptJS.LocatorOrString;
  readonly cartLink: CodeceptJS.LocatorOrString;
  readonly cartItemCount: CodeceptJS.LocatorOrString;

  constructor() {
    this.hamburgerMenuButton = "button#react-burger-menu-btn";
    this.logoutMenuEntry = "a#logout_sidebar_link";
    this.hamburgerMenuCloseButton = "button#react-burger-cross-btn";
    this.cartLink = "a.shopping_cart_link";
    this.cartItemCount = "span.shopping_cart_badge";
  }

  async doLogout(): Promise<void> {
    await I.click(this.hamburgerMenuButton);
    await I.click(this.logoutMenuEntry);
  }

  async closeMenu(): Promise<void> {
    await I.click(this.hamburgerMenuCloseButton);
  }

  async goToCart(): Promise<void> {
    await I.click(this.cartLink);
  }
}

module.exports = new Header();
