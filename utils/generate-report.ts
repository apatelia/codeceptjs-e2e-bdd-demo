const reporter = require("cucumber-html-reporter"); // eslint-disable-line @typescript-eslint/no-require-imports

const options = {
  theme: "bootstrap",
  jsonFile: "output/cucumber_output.json",
  // jsonDir: "output",
  output: "report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    SUT: "https://www.saucedemo.com",
    "Test Environment": "DEMO",
    Browser: "Chromium"
  },
  failedSummaryReport: true
};

reporter.generate(options);
