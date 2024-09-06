const { I } = inject();

export class footerFragment {
  private readonly twitterLink: CodeceptJS.LocatorOrString;
  private readonly facebookLink: CodeceptJS.LocatorOrString;
  private readonly linkedInLink: CodeceptJS.LocatorOrString;
  private readonly copyrightText: CodeceptJS.LocatorOrString;

  constructor() {
    this.twitterLink = "a[data-test='social-twitter']";
    this.facebookLink = "a[data-test='social-facebook']";
    this.linkedInLink = "a[data-test='social-linkedin']";
    this.copyrightText = "div.footer_copy";
  }

  async clickTwitterLink(): Promise<void> {
    await I.click(this.twitterLink);
  }

  async clickFacebookLink(): Promise<void> {
    await I.click(this.facebookLink);
  }

  async clickLinkedInLink(): Promise<void> {
    await I.click(this.linkedInLink);
  }
}

module.exports = new footerFragment();
