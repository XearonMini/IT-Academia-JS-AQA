const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    get topPanel(){
        return driver.findElement(By.xpath('//div[@class="top-panel__inner"]'))
    }
    get loginButton() {
        return driver.findElement(By.css('#top-page .top-panel .top-panel__inner .top-panel__bottom__row .top-panel__userbar__auth'))
    }
    get loginByEmail() {
        return driver.findElement(By.xpath('//*[@id="loginFormLoginEmailLink"]'))
    }
    get loginField() {
        return driver.findElement(By.xpath('//input[@type="email"]'))
    }
    get passwordField() {
        return driver.findElement(By.xpath('//input[@type="password"]'))
    }

    get loginDeny() {
        return driver.findElement(By.xpath('//*[@id="test"]'))
    }
    get logButton(){
        return driver.findElement(By.xpath('//*[@id="loginForm"]/button'))
    }

    get profileButton(){
        return driver.findElement(By.xpath('//span[@class="top-panel__userbar__user__name__inner"]'));
    }
    get search(){
        return driver.findElement(By.xpath('//*[@id="top-s"]'));
    }
    get searchButton(){
        return driver.findElement(By.xpath('//button[@type="submit"]'));
    }
    get searchItem(){
        return driver.findElement(By.css('#goods-table'))
    }
   get addItemToChartButton(){
        return driver.findElement(By.xpath('//button[@class="b-product-control__button i-button i-button_large i-button_orange addtocart-btn first-button"]'))
   }
   get chart(){
        return driver.findElement(By.xpath('//li[@class="top-panel__userbar__li top-panel__userbar__cart"]'))
   }
    get elementInChart() {
        return driver.findElement(By.xpath('//a[@class="goods-table-cell__line goods-table-cell__line_title"]'))
    }
    get mapSelectButton(){
        return driver.findElement(By.xpath('//a[@data-for-map="2"]'))
    }
    get cityChoseButton(){
        return driver.findElement(By.xpath('//div[@class="b-map-select"]'))
    }
    get cityList(){
        return driver.findElement(By.xpath('//div[@class="b-map-select__dropdown"]'))
    }
    get choseAllChartItem(){
        return driver.findElement(By.xpath('//input[@name="checkAll"]'))
    }
    get deleteChartItem(){
        return driver.findElement(By.xpath('//button[@class="i-button i-button_danger i-button_small remove"]'))
    }
    get deleteApply(){
        return driver.findElement(By.xpath('//button[@class="i-button i-button_danger i-button_small remove-yes"]'))
    }
    get chartTextContainer(){
        return driver.findElement(By.xpath('//div[@class="i-textual i-textual_bordered"]'))
    }
    get addProduct(){
        return driver.findElement(By.xpath('//li[@class="viewer-type-card__li "]["`i`"]//a[@data-rel="grid"] '))
    }
    get logoOz(){
        return driver.findElement(By.xpath('//a[@title="Интернет-магазин OZ.by"]'))
    }
    get booksTab(){
        return driver.findElement(By.xpath('//li[@class="main-nav__list__li main-nav__list__li_wnav"][6]'))
    }
    get newBooks(){
        return driver.findElement(By.xpath('//li[@class="landing-nav-list__item"][2]'))
    }
    get wayString(){
        return driver.findElement(By.xpath('//div[@class="breadcrumbs__inner"]'))
    }
    get minPrice(){
        return driver.findElement(By.xpath('//input[@id="inp1_r_cost"]'))
    }
    get maxPrice(){
        return driver.findElement(By.xpath('//input[@id="inp2_r_cost"]'))
    }
    get priceApplyButton(){
        return driver.findElement(By.xpath('//button[@class="filters__searchbtn__btn"]'))
    }
    get sortByPrice(){
        return driver.findElement(By.xpath('//li[@class="filters__chkslist__li "][3]'))
    }
    get sortButton(){
        return driver.findElement(By.xpath('//span[@class="top-filters__eselect__item top-filters__viewer__open"]'))
    }
    get firstItemPrice(){
        return driver.findElement(By.xpath('//li[@class="viewer-type-card__li "][1]//a[@data-rel="grid"]/span[@class="item-type-card__btn"]'))
    }
    get refPageButton(){
        return driver.findElement(By.xpath('//*[contains(text(),"Бонусная программа")]'))
    }
    get spoilerButton(){
        return driver.findElement(By.xpath('//h3[contains(text(), " Если условия")]'))
    }
    get ofertaPage(){
        return driver.findElement(By.xpath('//a[contains(text(),"публичной")]'))
    }
    get addToFavourite() {
        return driver.findElement(By.xpath('//label[@class="b-product-action__label b-product-action__label_fav-action i-button i-button_small"]'))
    }
    get favouriteButton(){
        return driver.findElement(By.xpath('//a[@class="b-user-tabs__tab"][1]'))
    }
    get goodsList(){
        return driver.findElement(By.xpath('//div[@class="viewer-type-card__wrapper"]'))
    }
    get checkedStorageFilter(){
        return driver.findElement(By.xpath('//li[@class="fm-element-panel filters__chkslist__li filters__chkslist__checked"][1]'))
    }
    get checkedInStockFilter(){
        return driver.findElement(By.xpath('//li[@class="fm-element-panel filters__chkslist__li filters__chkslist__checked"][2]'))
    }
    get filteredGoodsList(){
        return driver.findElement(By.xpath('//ul[@class="viewer-type-card--js-active viewer-type-list fm-list"]//li[@class="viewer-type-list__li"]'))
    }
    get listViewButton(){
        return driver.findElement(By.xpath('//a[@class="fm-select-element top-filters__viewer__typeview__item top-filters__viewer__typeview__item--list"]'))
    }
    get harryOffer(){
        return driver.findElement(By.xpath('//a[@href="#4"]'))
    }
    get offerButton(){
        return driver.findElement(By.xpath('//span[contains(text(),"Выбрать товары со скидками")]'))
    }
    get sortByNewButton(){
        return driver.findElement(By.xpath('//a[@class="b-comments__tabs-link reviewsDateDesc"]'))
    }
    get searchedBook(){
        return driver.findElement(By.xpath('//li[@class="viewer-type-card__li "][1]'))
    }
    get newestDate(){
        return driver.findElement(By.xpath('//div[@itemprop="review"][1]//div[@class="b-comment__date"]'))
    }
    get comingSoon(){
        return driver.findElement(By.xpath('//ul[@class="b-mpgs-filters"]/li[3]'))
    }
    get searchedStuff(){
        return driver.findElement(By.xpath('//li[@class="viewer-type-list__li"][1]'))
    }
    get advLink(){
        return driver.findElement(By.xpath('//a[@class="top-panel__hnav__spec"]'))
    }
}
module.exports = SearchComponent
