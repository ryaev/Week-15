import LandingPage from "../pageobjects/landingPage.js"
import { productsPage } from "../pageobjects/productsPage.js"

describe("Check social media links in footer", ()=>{
    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })
    
    it("Perform success user login", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();
        await LandingPage.login("standard_user", "secret_sauce");
        await LandingPage.loginButtonClick();
    })

    it("Check redirection to products page and verify social media links", async ()=>{
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        await expect(productsPage.footerProductsPage).toBeDisplayed();
        await expect(productsPage.footerTwittLink).toHaveHrefContaining('https://twitter.com/saucelabs');
        await expect(productsPage.footerFaceLink).toHaveHrefContaining('https://www.facebook.com/saucelabs');
        await expect(productsPage.footerLinkedLink).toHaveHrefContaining('https://www.linkedin.com/company/sauce-labs/');
    })

    it("Logout", async ()=>{
        await expect(productsPage.userMenuButton).toBeDisplayed();
        await productsPage.userMenuButtonClick();
        await expect(productsPage.logoutButton).toBeDisplayed();
        await productsPage.logoutButtonClick();
    })
})