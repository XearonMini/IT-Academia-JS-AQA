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
    it (`should sort goods`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.logoOz);
        await baseElements.click(searchComponent.booksTab);
        await baseElements.click(searchComponent.newBooks);
        await baseElements.sendKeys(searchComponent.minPrice,"20")
        await baseElements.sendKeys(searchComponent.maxPrice,"25")
        await baseElements.click(searchComponent.priceApplyButton)
        await baseElements.click(searchComponent.sortButton)
        await baseElements.click(searchComponent.sortByPrice)
        const price = await (searchComponent.firstItemPrice).getText();
        await expect(price.toLowerCase()).to.contain('24,95')
    })
    it (`should show unavalible content`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.search);
        await baseElements.sendKeys(searchComponent.search, 'Ручка');
        await baseElements.click(searchComponent.searchButton)
        await baseElements.click(searchComponent.checkedInStockFilter)
        await baseElements.click(searchComponent.checkedStorageFilter)
        await baseElements.click(searchComponent.priceApplyButton)
        await baseElements.click(searchComponent.listViewButton)
        const lossOfStock = await (searchComponent.filteredGoodsList).getText();
        expect(lossOfStock.toLowerCase()).to.contain('нет в продаже')
    })
    it (`should sort comments by stars`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.logoOz);
        await baseElements.click(searchComponent.booksTab);
        await baseElements.click(searchComponent.newBooks);
        await baseElements.click(searchComponent.searchedBook)
        await baseElements.click(searchComponent.sortByNewButton)
        const newDate = (searchComponent.newestDate).getText()
        expect(newDate.toLowerCase()).to.contain('сегодня')
    })
    it('should show avalible soon elements', async()=>{
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.logoOz);
        await baseElements.click(searchComponent.comingSoon);
        await baseElements.click(searchComponent.listViewButton)
        const lossOfStock = await (searchComponent.searchedStuff).getText();
        expect(lossOfStock.toLowerCase()).to.contain('нет в продаже')
    })

});