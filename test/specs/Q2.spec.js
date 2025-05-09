const loginActions = require("../pageActions/loginAction.page");
const inventoryActions = require('../pageActions/inventoryActions.page');
const cartActions = require('../pageActions/cartActions.page');
const checkoutInfoActions = require('../pageActions/CheckInfoActions.page');
const checkOverviewActions = require('../pageActions/checkOverviewActions.page');
const checkoutCompleteActions = require('../pageActions/checkSuccessActions.page');

const STANDARD_USER = {
    username: "standard_user",
    password: "secret_sauce"
};

describe("Q2: Standard User Test", () => {
    let savedCartItems;
    it("should display correct page", async () => {
        await loginActions.login(
            STANDARD_USER.username, 
            STANDARD_USER.password
        );
        await loginActions.verifySuccessfulLogin();
    });
    it("Reset app state via hamburger menu", async () =>{
        await inventoryActions.hamburgerMenu();
        await inventoryActions.resetAppstate();
        await inventoryActions.crossHamburgerMenu();
    });
    it("Add three product to cart", async () =>{
        await inventoryActions.addToCart();
        await browser.pause(2000);
    });
    it("Check cart badge have 3 items", async () => {
        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('3');
        await inventoryActions.checkOutCart();
    });
    it('Checkout cart and Verify items details', async () => {
        savedCartItems = await cartActions.getItemDetails();
        expect(savedCartItems.length).toBe(3, 'Cart should contain exactly 3 items');
        await cartActions.proceedToCheckout();
    });
    it('Complete Checkout and Verify Details', async () => {
        await checkoutInfoActions.fillInfo('Ashadul', 'Kibria', '7010');
    });
    it('Verify Product Name and Prices', async () => {
        const overviewItems = await checkOverviewActions.getItemsDetails();
        expect(overviewItems).toEqual(savedCartItems);
        const totalPrice = await checkOverviewActions.getTotalPrice();
        const itemTotal = savedCartItems.reduce((sum, item) => sum + item.price, 0);
        const tax = itemTotal * 0.08;
        const expectedTotal = itemTotal + tax;
        expect(totalPrice).toBeCloseTo(expectedTotal, 2);
        await checkOverviewActions.finishPurchase();
        await browser.pause(2000); 
    });
    it('Verify Order Success Message', async () => {
        await checkoutCompleteActions.verifySuccessMessage();
        await browser.pause(2000);
    });
    it('Verify reset state', async () => {
        await inventoryActions.hamburgerMenu();
        await browser.pause(2000);
        await inventoryActions.resetAppstate();
        await browser.pause(2000);
    });
    it('Check log out is done', async () => {
        await inventoryActions.logOut();
        await browser.pause(2000);
    });
});