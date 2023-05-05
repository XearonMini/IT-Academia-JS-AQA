const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../pageObjects/basePage');

class BaseElements extends BasePage {
    constructor() {
        super();
    }

    async click(element, waitTime){
        await driver.wait(until.elementIsVisible(element), waitTime);
        await element.click();
    }

    async sendKeys(element, text, waitTime = 5000) {
        await driver.wait(until.elementIsVisible(element), waitTime);
        await element.sendKeys(text);
    }

    async getTitle(){
        return await driver.getTitle();
    }
    async getText(){
        return await driver.getText();
    }
}

module.exports = BaseElements