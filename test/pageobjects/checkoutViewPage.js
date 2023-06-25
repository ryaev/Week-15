class CheckoutViewPage{
    get titlePage(){
        return $("#header_container > div.header_secondary_container > span");
    }
    get cancelCheckButton(){
        return $("#cancel");
    }
    async cancelCheckButtonClick(){
        await this.cancelCheckButton.click();
    }
    get finishCheckButton(){
        return $("#finish");
    }
    async finishCheckButtonClick(){
        await this.finishCheckButton.click();
    }
}

export default new CheckoutViewPage();