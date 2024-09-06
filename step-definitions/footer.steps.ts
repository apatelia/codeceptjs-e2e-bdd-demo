const { I, footerFragment } = inject();

Then("copyright text in footer should be visible", async () => {
  await I.seeElement(footerFragment.copyrightText);
});

Then("the copyright text contents should be correct", async () => {
  await I.seeTextEquals("© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy", footerFragment.copyrightText);
});

Given("that {string} link in footer is visible", async (link: string) => {
  switch (link) {
    case "Twitter/X":
      await I.seeElement(footerFragment.twitterLink);
      break;
    case "Facebook":
      await I.seeElement(footerFragment.facebookLink);
      break;
    case "LinkedIn":
      await I.seeElement(footerFragment.linkedInLink);
      break;
    default:
      break;
  }
});

When("I click {string} link from footer", async (socialMedia: string) => {
  switch (socialMedia) {
    case "Twitter/X":
      await footerFragment.clickTwitterLink();
      break;
    case "Facebook":
      await footerFragment.clickFacebookLink();
      break;
    case "LinkedIn":
      await footerFragment.clickLinkedInLink();
      break;
    default:
      break;
  }
});

Then("it should open correct {string} in a new tab", async (url: string) => {
  await I.wait(2);
  await I.switchToNextTab();
  await I.seeInCurrentUrl(url);
});
