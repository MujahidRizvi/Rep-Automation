import {} from "jasmine";
import { ProductPage } from "../../pom/renewlife/product-page.pom";
import { LoginPage } from "../../pom/renewlife/login-page.pom";
import { browser } from "protractor";
import { constants } from "../../constants";

const data = browser.params.rlData;
const page = new ProductPage();
const loginPage = new LoginPage();

describe("[Renew Life] - should go to Renewlife, goto Womens probiotics, select product and add product to bag as Anonymous user", function () {
  page.open(data.homePageUrl);
  browser.sleep(constants.WAIT);
  page.open(data.productPageUrl); 
  page.clickAcceptCookieBtn();

  it("should verify deliver subscribe once is selected by default", async () => {
    page.moveToSubscribeOnceRadio();
    expect<any>(page.subscribeOnceRadioIsSelected()).toBe(true);
  });

  it("should verify that frequency drop down is disabled at the moment", async () => {
    page.moveToFrequencyDropDown();
    expect<any>(page.frequencyDropDownIsEnabled()).toBe(false);
  });

  it("should click Add to Bag button", async () => {
    page.clickAddToBag();
  });

  it("should remove added product from bag", async () => {
    page.removeProductFromBag();
  });

  it("should access Login page", async () => {
    await page.open(data.loginPageUrl);
    browser.sleep(constants.WAIT);
  });

  it("should enter valid credentials", async () => {
    await loginPage.loginUser(data.email, data.password);
  });

  it("should goto product page", async () => {
    page.open(data.productPageUrl);
  });

  it("should verify deliver subscribe once is selected by default", async () => {
    page.moveToSubscribeOnceRadio();
    expect<any>(await page.subscribeOnceRadioIsSelected()).toBe(true);
  });

  it("should verify that frequency drop down is disabled at the moment", async () => {
    page.moveToFrequencyDropDown();
    expect<any>(page.frequencyDropDownIsEnabled()).toBe(false);
  });

  it("should verify that frequency drop down gets enabled when frequency radio option is clicked", async () => {
    page.clickSubscribeRadio();
    expect<any>(page.frequencyDropDownIsEnabled()).toBe(true);
  });

  it("should click Add to Bag button", async () => {
    page.clickAddToBag();
  });

  it("should remove added product from bag", async () => {
    page.removeProductFromBag();
  });
});
