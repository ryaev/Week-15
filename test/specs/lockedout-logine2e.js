import LandingPage from "../pageobjects/landingPage.js"

describe("Locked out user login attempt", ()=>{
    beforeAll("Open browser", ()=>{
        browser.setWindowSize (1440, 1024);
        browser.url("https://www.saucedemo.com/");
    })

    it("Perform locked out user login", async()=>{
        await expect(LandingPage.loginButton).toBeDisplayed();
        await expect(LandingPage.userNameInput).toBeDisplayed();
        await expect(LandingPage.passwordInput).toBeDisplayed();

        await LandingPage.login("locked_out_user", "secret_sauce");
        await LandingPage.loginButtonClick();
    })

    it("Check and close error message for blocked user", async ()=>{
        await expect(LandingPage.loginErrorMsg).toBeDisplayed();
        await expect(LandingPage.loginErrorButton).toBeDisplayed();
        await expect(LandingPage.loginErrorMsg).toHaveTextContaining("Epic sadface: Sorry, this user has been locked out.");
        await LandingPage.loginErrorButtonClick();
    })
})