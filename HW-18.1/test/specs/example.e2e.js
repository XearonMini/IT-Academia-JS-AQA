describe('WDIO site', () => {
    it('should seach via page', async () => {
        await browser.url('https://webdriver.io/')
        await $('#__docusaurus   .DocSearch-Button-Container').click();
        await $('[class="DocSearch-Input"]').waitForDisplayed();
        await $('[class="DocSearch-Input"]').addValue('wdio');
        await $('[class="DocSearch-Input"]').waitForClickable();
        await $('[class="DocSearch-Input"]').click();
        await browser.keys(['Enter']);
        await $('[class="theme-doc-markdown markdown"]').waitForDisplayed();
        await expect(await $('#__docusaurus .theme-doc-markdown').getText()).toContain('WDIO')
    })
    it('should show code bars', async () => {
        await browser.url('https://webdriver.io/')
        await $('#__docusaurus .navbar__item').click();
        await $('[class="codeBlockLines_e6Vv"]').waitForDisplayed();
        await expect(await $('#__docusaurus .codeBlockLines_e6Vv').getText()).toContain('wdio')
    })
    it('should open other links', async () => {
        await browser.url('https://webdriver.io/');
        await $$('#__docusaurus .navbar__item')[4].click();
        await $('[class="docMainContainer_gTbr"]').waitForDisplayed();
        await $$('#__docusaurus .menu__link')[2].click();
        await $$('#__docusaurus .twitterProfile')[0].click();
        await expect(browser).toHaveUrlContaining('twitter')
    })

})


