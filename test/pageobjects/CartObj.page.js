class cartObjPage{
    get checkoutButton() { 
        return $("//button[@id='checkout']");
    }

    get items() { 
        return $$('.cart_item'); 
    }
}
module.exports = new cartObjPage();