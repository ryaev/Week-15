class CheckoutInfoPage{
    get titlePage(){
        return $("#header_container > div.header_secondary_container > span");
    }
    get nameInput(){
        return $("#first-name");
    }
    get lastNameInput(){
        return $("#last-name");
    }
    get zipInput(){
        return $("#postal-code");
    }
    get checkInfoErrorMsg(){
        return $("#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3");
    }
    get checkInfoErrorButton(){
        return $("#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3 > button > svg > path");
    }
    async checkInfoErrorButtonClick(){
        await this.checkInfoErrorButton.click();
    }
    async infoCheckout(name, lastName, zip){
        await this.nameInput.setValue(name);
        await this.lastNameInput.setValue(lastName);
        await this.zipInput.setValue(zip);
    }
    get cancelCheckButton(){
        return $("#cancel");
    }
    async cancelCheckButtonClick(){
        await this.cancelCheckButton.click();
    }
    get continueCheckButton(){
        return $("#continue");
    }
    async continueCheckButtonClick(){
        await this.continueCheckButton.click();
    }
}

export default new CheckoutInfoPage();