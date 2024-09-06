const { I } = inject();

export class LoginPage {
  private readonly usernameTextBox: CodeceptJS.LocatorOrString;
  private readonly passwordTextBox: CodeceptJS.LocatorOrString;
  private readonly loginButton: CodeceptJS.LocatorOrString;
  private readonly errorMessage: CodeceptJS.LocatorOrString;

  constructor() {
    this.usernameTextBox = "#user-name";
    this.passwordTextBox = "#password";
    this.loginButton = "#login-button";
    this.errorMessage = "[data-test='error']";
  }

  async goto(): Promise<void> {
    await I.amOnPage("/");
  }

  async login(username: string, password: string): Promise<void> {
    await I.fillField(this.usernameTextBox, username);
    await I.fillField(this.passwordTextBox, password);
    await I.click(this.loginButton);
  }
}

module.exports = new LoginPage();
