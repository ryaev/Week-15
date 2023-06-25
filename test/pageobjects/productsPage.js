class ProductsPage{
    get titlePage(){
        return $("#header_container > div.header_secondary_container > span");
    }
    get cartButton(){
        return $("#shopping_cart_container > a");
    }
    async cartButtonClick(){
        await this.cartButton.click();
    }
    get userMenuButton(){
        return $("#react-burger-menu-btn");
    }
    async userMenuButtonClick(){
        await this.userMenuButton.click();
    }
    get logoutButton(){
        return $("#logout_sidebar_link");
    }
    async logoutButtonClick(){
        await this.logoutButton.click();
    }
}

class ItemOne{
    get itemImg(){
        return $("#item_4_img_link > img");
    }
    get itemTitle(){
        return $("#item_4_title_link > div");
    }
    get itemDescrip(){
        return $("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div");
    }
    get itemPrice(){
        return $("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div");
    }
    get itemAddCartButton(){
        return $("#add-to-cart-sauce-labs-backpack");
    }
    get itemRemCartButton(){
        return $("#remove-sauce-labs-backpack");
    }
    async itemAddCartButtonClick(){
        await this.itemAddCartButton.click();
    }
    async itemRemCartButtonClick(){
        await this.itemRemCartButton.click();
    }
}

class ItemTwo{
    get itemImg(){
        return $("#item_0_img_link > img");
    }
    get itemTitle(){
        return $("#item_0_title_link > div");
    }
    get itemDescrip(){
        return $("#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > div");
    }
    get itemPrice(){
        return $("#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div");
    }
    get itemAddCartButton(){
        return $("#add-to-cart-sauce-labs-bike-light");
    }
    get itemRemCartButton(){
        return $("#remove-sauce-labs-bike-light");
    }
    async itemAddCartButtonClick(){
        await this.itemAddCartButton.click();
    }
    async itemRemCartButtonClick(){
        await this.itemRemCartButton.click();
    }
}

export const productsPage = new ProductsPage();
export const itemOne = new ItemOne();
export const itemTwo = new ItemTwo();