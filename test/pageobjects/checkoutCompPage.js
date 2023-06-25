class CheckoutCompletePage{
    get titlePage(){
        return $("#header_container > div.header_secondary_container > span");
    }
    get succesCheckMsg(){
        return $("#checkout_complete_container > h2");
    }
    get backButton(){
        return $("#back-to-products");
    }
    async backButtonClick(){
        await this.backButton.click();
    }
}

export default new CheckoutCompletePage();