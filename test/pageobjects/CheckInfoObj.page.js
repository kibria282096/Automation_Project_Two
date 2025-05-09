class CheckoutInfoPage {
    get firstName() { 
        return $("//div[@class='checkout_info']//input[contains(@placeholder, 'First Name') and @type='text']"); 
    }
    get lastName() { 
        return $("//div[@class='checkout_info']//input[contains(@placeholder, 'Last Name') and @type='text']"); 
    }
    get postalCode() { 
        return $("//div[@class='checkout_info']//input[contains(@placeholder, 'Zip/Postal Code') and @type='text']");
    }
    get continueButton() { 
        return $("//input[@type='submit' and contains(@value, 'Continue') and contains(@class, 'btn')]"); 
    }
}
module.exports = new CheckoutInfoPage();