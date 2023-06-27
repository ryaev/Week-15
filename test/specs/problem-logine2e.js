import LandingPage from "../pageobjects/landingPage.js"
import { productsPage, itemOne, itemTwo } from "../pageobjects/productsPage.js"
import { youCartPage, itemCartOne, itemCartTwo } from "../pageobjects/yourCartPage.js"
import CheckoutInfoPage from "../pageobjects/checkoutInfoPage.js"

describe("Problem user login", ()=>{
    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })

    it("Perform problem user login", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();

        await LandingPage.login("problem_user", "secret_sauce");
        await LandingPage.loginButtonClick();
    })

    it("Check redirection to products page with problems", async ()=>{   
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
    })

    it("Purchase items from user with problems", async ()=>{
        await expect(productsPage.cartButton).toBeDisplayed();
        await expect(itemOne.itemAddCartButton).toBeDisplayed();
        await itemOne.itemAddCartButtonClick();
        await expect(itemOne.itemRemCartButton).toBeDisplayed();
        await expect(itemTwo.itemAddCartButton).toBeDisplayed();
        await itemTwo.itemAddCartButtonClick();
        await itemOne.itemRemCartButtonClick();
        await itemOne.itemAddCartButton.waitForDisplayed({ timeout: 1000 });
    })

    it("Check redirection to your cart page", async ()=>{
        await productsPage.cartButtonClick();
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
        await expect(CheckoutInfoPage.nameInput).toHaveValueContaining("Robert");
        await expect(CheckoutInfoPage.lastNameInput).toHaveValueContaining("Yanez");
        await expect(CheckoutInfoPage.zipInput).toHaveValueContaining("2100");
        await CheckoutInfoPage.cancelCheckButtonClick();
    })

    it("Exit the checkout information form", async ()=>{
        await expect(youCartPage.titlePage).toBeDisplayed();
        await expect(youCartPage.titlePage).toHaveTextContaining("Your Cart");
        await expect(youCartPage.contShopButton).toBeDisplayed();
        await youCartPage.conShopButtonClick();
        await expect(productsPage.titlePage).toBeDisplayed();
        await expect(productsPage.titlePage).toHaveTextContaining("Products");
        await expect(productsPage.userMenuButton).toBeDisplayed();
        await productsPage.userMenuButtonClick();
        await expect(productsPage.logoutButton).toBeDisplayed();
        await productsPage.logoutButtonClick();
    })
})