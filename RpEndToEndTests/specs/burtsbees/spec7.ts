import {} from "jasmine";
import { ProductPage } from "../../pom/burts-bees/product-page.pom";
import { SubscriptionPage } from "../../pom/burts-bees/subscription-page.pom";
import { browser } from "protractor";

const data = browser.params.bbData;
const page = new ProductPage();
const subPage = new SubscriptionPage();

describe("[Burts Bees] - should access Burts Bees Subscription page, goto Next Order tab, Change order date and revert", function () {
  var msi: any = subPage.msiWidget;

  page.open(data.homePageUrl).clickOneTrustAccept();

  it("should open login screen", async () => {
    page.clickSignInIcon();
  });

  it("should enter valid credentials", async () => {
    await page.loginUser(data.productionEmail, data.productionPassword);
  });

  it("should goto My Subscriptions page", async () => {
    page.open(data.mySubscriptionsUrl);
  });

  it("should click Change Order Date Link", async () => {
    msi.clickChangeOrderDateLnk();
  });

  it("should change / set date to some future date and compare old and new order dates", async () => {
    var oldChangeOrderDate = msi.getChangeOrderDate();
    msi.clickCurrentDate();
    expect<any>(oldChangeOrderDate).toBeLessThanOrEqual(
      msi.getChangeOrderDate()
    );
  });

  it("should click on Manage link on the page", async () => {
    msi.clickManageLnk();
  });

  it("should click on Change My Next Delivery Date Picker option", async () => {
    msi.clickChangeNextDelivery();
  });

  it("should set reverted date again and save", async () => {
    msi.setRevertedDate();
  });
});
