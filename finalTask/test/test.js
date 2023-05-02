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
    it (`should search`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.search);
        await baseElements.sendKeys(searchComponent.search, 'Ручка');
        await baseElements.click(searchComponent.searchButton)
        const elementText = await  (searchComponent.searchItem).getText()
        await expect(elementText).to.include('Ручка')
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
    it (`should redirect to adv page`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        const cenTest = await baseElements.getTitle();
        await expect(cenTest.toLowerCase()).to.contain('цт')
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
    it (`should have documents`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.refPageButton);
        await baseElements.click(searchComponent.spoilerButton);
        await baseElements.click(searchComponent.ofertaPage);
        const oferta = await baseElements.getTitle();
        await expect(oferta.toLowerCase()).to.contain('публичная оферта')
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
    it (`should open offer link`, async () => {
        await BasePage.navigate('https://oz.by/home/');
        await baseElements.click(searchComponent.logoOz);
        await baseElements.click(searchComponent.harryOffer);
        await baseElements.click(searchComponent.offerButton)
        const harryDiscount = await baseElements.getTitle();
        expect(harryDiscount.toLowerCase()).to.contain('гарри')
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