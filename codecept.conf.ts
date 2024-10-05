export const config: CodeceptJS.MainConfig = {
  name: "bdd-codeceptjs",
  tests: "./*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.saucedemo.com",
      show: false,
    },
    ChaiWrapper: {
      require: "codeceptjs-chai",
    },
  },
  plugins: {
    cucumberJsonReporter: {
      require: "codeceptjs-cucumber-json-reporter",
      enabled: true, // if false, pass --plugins cucumberJsonReporter
      attachScreenshots: true, // true by default
      attachComments: true, // true by default
      // outputFile: 'file.json',     // cucumber_output.json by default
      uniqueFileNames: false, // if true outputFile is ignored in favor of unique file names in the format of `cucumber_output_<UUID>.json`.  Useful for parallel test execution
      includeExampleValues: true, // if true incorporate actual values from Examples table along with variable placeholder when writing steps to the report
      timeMultiplier: 1000000, // Used when calculating duration of individual BDD steps.  Defaults to nanoseconds
    },
  },
  include: {
    I: "./steps_file",
    loginPage: "./pages/LoginPage.ts",
    productsPage: "./pages/ProductsPage.ts",
    cartPage: "./pages/CartPage.ts",
    headerFragment: "./fragments/Header.ts",
    footerFragment: "./fragments/Footer.ts",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./step-definitions/login.steps.ts",
      "./step-definitions/products.steps.ts",
      "./step-definitions/cart.steps.ts",
      "./step-definitions/header.steps.ts",
      "./step-definitions/footer.steps.ts",
    ],
  },
  fullPromiseBased: true,
};
