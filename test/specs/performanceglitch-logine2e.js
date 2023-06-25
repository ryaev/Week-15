import LandingPage from "../pageobjects/landingPage.js"
import { productsPage, itemOne, itemTwo } from "../pageobjects/productsPage.js"
import { youCartPage, itemCartOne, itemCartTwo } from "../pageobjects/yourCartPage.js"
import CheckoutInfoPage from "../pageobjects/checkoutInfoPage.js"
import CheckoutViewPage from "../pageobjects/checkoutViewPage.js"
import CheckoutCompletePage from "../pageobjects/checkoutCompPage.js"

describe("Performance glitch user login", ()=>{

    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })

    it("Perform glitch user login to verify response time", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();
        await LandingPage.login("performance_glitch_user", "secret_sauce");
        await LandingPage.loginButtonClick();
        const dateLogin = new Date().getTime();
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        await expect(itemOne.itemImg).toBeDisplayed();
        await expect(itemOne.itemImg).toHaveAttribute("src", "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
        await expect(itemOne.itemTitle).toBeDisplayed();
        await expect(itemOne.itemTitle).toHaveTextContaining("Sauce Labs Backpack");
        await expect(itemTwo.itemImg).toBeDisplayed();
        await expect(itemTwo.itemImg).toHaveAttribute("src", "/static/media/bike-light-1200x1500.37c843b0.jpg");
        await expect(itemTwo.itemTitle).toBeDisplayed();
        await expect(itemTwo.itemTitle).toHaveTextContaining("Sauce Labs Bike Light");
        const dateResponse = new Date().getTime();
        const timeResponse = dateResponse - dateLogin;
        const optimalTime = 200;
        expect(timeResponse).toBeLessThan(optimalTime);
    })

    it("Purchase items from glitch user", async ()=>{
        await expect(productsPage.cartButton).toBeDisplayed();
        await expect(itemOne.itemAddCartButton).toBeDisplayed();
        await itemOne.itemAddCartButtonClick();
        await expect(itemOne.itemRemCartButton).toBeDisplayed();
        await expect(itemTwo.itemAddCartButton).toBeDisplayed();
        await itemTwo.itemAddCartButtonClick();
        await itemOne.itemRemCartButtonClick();
        await expect(itemOne.itemAddCartButton).toBeDisplayed();
        await itemOne.itemAddCartButtonClick();
        await productsPage.cartButtonClick();
    })

    it("Check redirection to your cart page", async ()=>{
        await expect(youCartPage.titlePage).toBeDisplayed();
        await expect(youCartPage.titlePage).toHaveTextContaining("Your Cart");
        await expect(youCartPage.contShopButton).toBeDisplayed();
        await expect(itemCartOne.itemCartTitle).toBeDisplayed();
        await expect(itemCartOne.itemCartTitle).toHaveTextContaining("Sauce Labs Backpack");
        await expect(itemCartOne.itemCartRemButton).toBeDisplayed();
        await expect(itemCartTwo.itemCartTitle).toBeDisplayed();
        await expect(itemCartTwo.itemCartTitle).toHaveTextContaining("Sauce Labs Bike Light");
        await expect(itemCartTwo.itemCartRemButton).toBeDisplayed();
        await itemCartTwo.itemCartRemButtonClick();
        await youCartPage.conShopButtonClick();
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        await expect(productsPage.cartButton).toBeDisplayed();
        await productsPage.cartButtonClick();
        await expect(youCartPage.titlePage).toBeDisplayed();
        await expect(youCartPage.titlePage).toHaveTextContaining("Your Cart");
        await expect(youCartPage.checkoutButton).toBeDisplayed();
        await youCartPage.checkoutButtonClick();
    })

    it("Check redirection to checkout information page", async ()=>{
        await expect(CheckoutInfoPage.titlePage).toBeDisplayed();
        await expect(CheckoutInfoPage.titlePage).toHaveTextContaining("Checkout: Your Information");
        await expect(CheckoutInfoPage.cancelCheckButton).toBeDisplayed();
        await CheckoutInfoPage.cancelCheckButtonClick();
        await expect(youCartPage.titlePage).toBeDisplayed();
        await expect(youCartPage.titlePage).toHaveTextContaining("Your Cart");
        await expect(youCartPage.checkoutButton).toBeDisplayed();
        await youCartPage.checkoutButtonClick();
        await expect(CheckoutInfoPage.titlePage).toBeDisplayed();
        await expect(CheckoutInfoPage.titlePage).toHaveTextContaining("Checkout: Your Information");
        await expect(CheckoutInfoPage.nameInput).toBeDisplayed();
        await expect(CheckoutInfoPage.lastNameInput).toBeDisplayed();
        await expect(CheckoutInfoPage.zipInput).toBeDisplayed();
        await expect(CheckoutInfoPage.continueCheckButton).toBeDisplayed();
        await CheckoutInfoPage.continueCheckButtonClick();
        await expect(CheckoutInfoPage.checkInfoErrorButton).toBeDisplayed();
        await CheckoutInfoPage.checkInfoErrorButtonClick();
        await CheckoutInfoPage.infoCheckout("Robert", "Yanez", "2100");
        await CheckoutInfoPage.continueCheckButtonClick();
    })

    it("Check redirection to checkout overview page", async ()=>{
        await expect(CheckoutViewPage.titlePage).toBeDisplayed();
        await expect(CheckoutViewPage.titlePage).toHaveTextContaining("Checkout: Overview");
        await expect(CheckoutViewPage.cancelCheckButton).toBeDisplayed();
        await expect(CheckoutViewPage.finishCheckButton).toBeDisplayed();
        await CheckoutViewPage.finishCheckButtonClick();
    })

    it("Check redirection to checkout complete page", async ()=>{
        await expect(CheckoutCompletePage.titlePage).toBeDisplayed();
        await expect(CheckoutCompletePage.titlePage).toHaveTextContaining("Checkout: Complete!");
        await expect(CheckoutCompletePage.succesCheckMsg).toBeDisplayed();
        await expect(CheckoutCompletePage.succesCheckMsg).toHaveTextContaining("Thank you for your order!");
        await expect(CheckoutCompletePage.backButton).toBeDisplayed();
        await CheckoutCompletePage.backButtonClick();
    })

    it("Check redirection to landing page and logout from glitch user", async ()=>{
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        await expect(productsPage.cartButton).toBeDisplayed();
        await expect(productsPage.userMenuButton).toBeDisplayed();
        await productsPage.userMenuButtonClick();
        await expect(productsPage.logoutButton).toBeDisplayed();
        await productsPage.logoutButtonClick();
    })
})