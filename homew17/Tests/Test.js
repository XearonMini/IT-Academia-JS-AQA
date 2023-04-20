const {webdriver, Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const assert = require('mocha');
const {expect} = require('chai');
const mocha = require("mocha");
    describe('Site test', function () {
it('Expect title to be ChromeDriver', async () => {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.get('https://chromedriver.chromium.org/home');
    const title = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
    expect(await title.getText()).to.equal('ChromeDriver');
    await driver.sleep(10000);
    await driver.quit();
});
it('Hilight and expect new title', async () => {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.get(('https://chromedriver.chromium.org/home'), 2000);
    const button = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a'), 2000);
    await driver.executeScript('arguments[0].click()', button);
    const title = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
    driver.executeScript("arguments[0].style.background='yellow'", title);
    expect(await title.getText()).to.equal('Chrome Extensions');
    await driver.sleep(10000);
    await driver.quit();
});
it('Expect to open search', async () => {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.get(('https://chromedriver.chromium.org/home'), 2000);
    const button = await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]/div'), 2000);
    await driver.executeScript('arguments[0].click()', button);
    await driver.sleep(5000);
    await driver.findElement(By.css('.Xb9hP input')).sendKeys('driver', Key.RETURN);
    const linksWithResults = await driver.findElements(By.css('#yDmH0d a'));
    expect(await linksWithResults[0].getAttribute()).to.contains('driver');
    await driver.sleep(10000);
    await driver.quit();
});
    it('Link', async () => {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.get(('https://chromedriver.chromium.org/home'), 2000);
    const MoreButton = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[13]/div[1]'), 2000);
    await driver.executeScript('arguments[0].click()', MoreButton);
    const MobileButton = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[13]/div[2]/ul/li[10]/div/div/a'), 2000);
    await driver.executeScript('arguments[0].click()', MobileButton);
    await driver.sleep(5000);
    const URL = driver.getCurrentUrl();
    expect(await URL.to.contain('mobile-emulation'));
    await driver.sleep(10000);
    await driver.quit();
});
})
