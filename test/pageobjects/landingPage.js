class LandingPage{

    get userNameInput(){
        return $("#user-name");
    }

    get passwordInput(){
        return $("#password");
    }

    get loginButton(){
        return $("#login-button");
    }
    
    get loginErrorMsg(){
        return $("#login_button_container > div > form > div.error-message-container.error > h3");
    }

    get loginErrorButton(){
        return $("#login_button_container > div > form > div.error-message-container.error > h3 > button > svg > path");
    }

    async loginButtonClick(){
        await this.loginButton.click();
    }

    async loginErrorButtonClick(){
        await this.loginErrorButton.click();
    }

    async login(username, password){
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }
}

export default new LandingPage();