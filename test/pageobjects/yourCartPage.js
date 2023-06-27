class YourCartPage{
    get titlePage(){
        return $("#header_container > div.header_secondary_container > span");
    }
    get itemsContainer(){
        return $("#cart_contents_container > div > div.cart_list > div.cart_item");
    }
    get contShopButton(){
        return $("#continue-shopping");
    }
    async conShopButtonClick(){
        await this.contShopButton.click();
    }
    get checkoutButton(){
        return $("#checkout");
    }
    async checkoutButtonClick(){
        await this.checkoutButton.click();
    }
}

class ItemCartOne{
    get itemCartTitle(){
        return $("#item_4_title_link > div");
    }
    get itemCartRemButton(){
        return $("#remove-sauce-labs-backpack");
    }
    async itemCartRemButtonClick(){
        await this.itemCartRemButton.click();
    }
}

class ItemCartTwo{
    get itemCartTitle(){
        return $("#item_0_title_link > div");
    }
    get itemCartRemButton(){
        return $("#remove-sauce-labs-bike-light");
    }
    async itemCartRemButtonClick(){
        await this.itemCartRemButton.click();
    }
}

export const youCartPage = new YourCartPage();
export const itemCartOne = new ItemCartOne();
export const itemCartTwo = new ItemCartTwo();