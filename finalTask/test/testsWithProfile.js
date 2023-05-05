const { Builder, By, until, WebElement} = require('selenium-webdriver');
const { expect } = require('chai');
const BaseElements = require('../helpers/baseElements');
const SearchComponent = require('../pageObjects/pageComponent/searchComponent');
const BasePage = require('../pageObjects/basePage');
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();
describe('chromedriver tests', () => {

    before(async()=>{
        await driver.manage().window().setRect({ width: 1920, height: 1080 });      //выставляется разрешение перед тестом
    });
    after(async() => {
        await BasePage.close();
    });
    it (`should throw test when login is denied`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.loginButton);
        await baseElements.click(searchComponent.loginByEmail);
        await baseElements.sendKeys(searchComponent.loginField, 'pupa@mail.ru');
        await baseElements.sendKeys(searchComponent.passwordField, 'lupa');
        const text = await (searchComponent.loginDeny).getText() ;
        await expect(text).to.exist;
    })
    it (`should login via mail`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.loginButton);
        await baseElements.click(searchComponent.loginByEmail);
        await baseElements.sendKeys(searchComponent.loginField, 'mfortest@inbox.ru');
        await baseElements.sendKeys(searchComponent.passwordField, 'c93rgx');
        await baseElements.click(searchComponent.logButton);
        await baseElements.click(searchComponent.profileButton);
        const profileTitle = await baseElements.getTitle()
        await expect(profileTitle).to.include("Персональный раздел");
    })
    it (`should add items to chart`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.search);
        await baseElements.sendKeys(searchComponent.search, 'Ручка');
        await baseElements.click(searchComponent.searchButton)
        await baseElements.click(searchComponent.searchItem)
        await baseElements.click(searchComponent.addItemToChartButton)
        await baseElements.click((searchComponent.chart))
        const elementInChart = await (searchComponent.elementInChart).getText()
        await expect(elementInChart.toLowerCase()).to.include('ручка')
    })
    it (`should remove item from chart`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click((searchComponent.chart))
        await searchComponent.choseAllChartItem.isEnabled()
        const choseAll = await (searchComponent.choseAllChartItem)
        choseAll.click()
        await baseElements.click(searchComponent.deleteChartItem)
        await baseElements.click(searchComponent.deleteApply)
        const elementInChart = await (searchComponent.chartTextContainer).getText()
        await expect(elementInChart.toLowerCase()).to.include('в корзине пусто')
    })
    it (`should add multiple items item to chart`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.search);
        await baseElements.sendKeys(searchComponent.search, 'Ручка')
        await baseElements.click(searchComponent.searchButton)
        for(let i = 1 ; i < 5; i++){
            await baseElements.click((searchComponent.addProduct))
            await driver.sleep(1000);
        }
        await baseElements.click((searchComponent.chart))
        const elementInChart = await (searchComponent.elementInChart).getText()
        await expect(elementInChart.toLowerCase()).to.include('ручка')
    })
    it (`should add to favourite`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.search);
        await baseElements.sendKeys(searchComponent.search, 'Благовонии');
        await baseElements.click(searchComponent.searchButton)
        await baseElements.click(searchComponent.searchItem)
        await baseElements.click(searchComponent.addToFavourite)
        await baseElements.click(searchComponent.profileButton);
        await baseElements.click(searchComponent.favouriteButton);
        const favourite = await (searchComponent.goodsList).getText();
        expect(favourite.toLowerCase()).to.contain('благовон')
    })
});