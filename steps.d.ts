/// <reference types='codeceptjs' />
type steps_file = typeof import("./steps_file");
type ChaiWrapper = import("codeceptjs-chai");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    current: any;
    loginPage: loginPage;
    productsPage: productsPage;
    cartPage: cartPage;
    headerFragment: headerFragment;
    footerFragment: footerFragment;
  }

  interface Methods extends PlaywrightTs, ChaiWrapper, MochawesomeTs {}

  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}

  namespace Translation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface Actions {}
  }
}
