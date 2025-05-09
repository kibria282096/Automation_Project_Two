class CheckoutOverviewPage {
    get items() {
        return $$('.cart_item');
    }
    get totalPrice() {
        return $('.summary_total_label');
    }
    get finishButton() {
        return $("//div[contains(@class, 'cart_footer')]//button[@id='finish' and normalize-space()='Finish']");
    }
}
module.exports = new CheckoutOverviewPage();