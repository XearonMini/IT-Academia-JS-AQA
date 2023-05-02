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
    it (`should have title`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        const profileTitle = await baseElements.getTitle()
        await expect(profileTitle).to.include("OZ");
    })
    it (`should have contacts`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        const contacts = await (searchComponent.topPanel).getText()
        await expect(contacts).to.include("25");
    })
    it (`should redirect to adv page`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        const cenTest = await baseElements.getTitle();
        await expect(cenTest.toLowerCase()).to.contain('цт')
    })
    it (`should search`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.search);
        await baseElements.sendKeys(searchComponent.search, 'Ручка');
        await baseElements.click(searchComponent.searchButton)
        const elementText = await  (searchComponent.searchItem).getText()
        await expect(elementText).to.include('Ручка')
    })
    it (`should have shop in mogilev`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.logoOz);
        await baseElements.click(searchComponent.mapSelectButton);
        await baseElements.click(searchComponent.cityChoseButton);
        const cityList = await (searchComponent.cityList).getText();
        await expect(cityList.toLowerCase()).to.include('могилев')
    })
    it (`should redirect to other tabs`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.logoOz);
        await baseElements.click(searchComponent.booksTab);
        await baseElements.click(searchComponent.newBooks);
        const way = await (searchComponent.wayString).getText();
        await expect(way.toLowerCase()).to.include('новинки')
    })
    it (`should have documents`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.refPageButton);
        await baseElements.click(searchComponent.spoilerButton);
        await baseElements.click(searchComponent.ofertaPage);
        const oferta = await baseElements.getTitle();
        await expect(oferta.toLowerCase()).to.contain('публичная оферта')
    })
    it (`should open offer link`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.logoOz);
        await baseElements.click(searchComponent.harryOffer);
        await baseElements.click(searchComponent.offerButton)
        const harryDiscount = await baseElements.getTitle();
        expect(harryDiscount.toLowerCase()).to.contain('гарри')
    })
});