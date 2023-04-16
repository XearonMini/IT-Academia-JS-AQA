// @ts-check
const { test, expect } = require('@playwright/test');
test('search test', async ({page})=>{
  const search = await page.getByPlaceholder("Search docs");
  await page.goto('https://playwright.dev/');
  const SearchButton = page.getByRole('button',{name:'Search '})
  await SearchButton.click();
  await search.click()
  await search.fill("getByLabel");
  await page.keyboard.press('Enter');
  await expect(page.locator('text = getByLabel')).toHaveText(['getByLabel']);
})
test('links test', async ({page})=>{
  await page.goto('https://playwright.dev/');
  await page.getByRole('link',{name:'Community'}).click();
  await page.getByText('Live Streams', { exact: true }).click();
  await expect(page.locator('#docusaurus_skipToContent_fallback')).toContainText(['Playwright live stream']);
})
test('List test', async ({page})=>{
  await page.goto('https://playwright.dev/');
  await page.locator("#__docusaurus .navbar__item.navbar__link").filter({hasText:'Docs'}).click();
  await expect(page.locator('#__docusaurus .table-of-contents.table-of-contents__left-border')).toContainText('Test');
})
test('hover test', async ({page})=>{
  await page.goto('https://playwright.dev/');
  await page.locator("#__docusaurus .navbar__item.dropdown.dropdown--hoverable").hover();
  await page
      .locator('.dropdown__link')
      .filter({hasText: (".NET")})
      .click()
  await expect(page).toHaveTitle(/Playwright .NET/);
})
test('Keyboard usage test', async ({page})=>{
  const searchTable = page.locator('.DocSearch-Modal');
  await page.goto('https://playwright.dev/');
  const SearchButton = page.getByRole('button',{name:'Search '})
  await SearchButton.click();
  await page.keyboard.press('Escape');
  await expect(searchTable).not.toBeVisible();
})
