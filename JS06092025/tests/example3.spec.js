import { test, expect } from '@playwright/test';
const { BrowserUtils } = require('../utils/browserutils');
const { HomePage } =require('../pages/homepage');
const { WelcomePage } =require('../pages/welcomepage');
const { Common } =require('../appcommon/common');

test('test', async ({ page }) => {
  const homePage=new HomePage(page);
  const welcomePage=new WelcomePage(page);

  await BrowserUtils.invokeApp(page);
  await homePage.verifyHomepage();
  await homePage.navigateToLoginPage();
  await new Common(page).performlogin();
  page.waitForTimeout(2000);
  await homePage.verifyHomepage();
  page.waitForTimeout(2000);
  page.waitForTimeout(2000);
  page.waitForTimeout(2000);

});
