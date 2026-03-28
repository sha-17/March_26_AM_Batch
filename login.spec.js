import {test,expect} from '@playwright/test';

test("login", async ({page}) => {

  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.click("#HTML9 > div.widget-content > button")
});
