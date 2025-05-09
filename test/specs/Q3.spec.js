const loginActions = require('../pageActions/loginAction.page');
const inventoryActions = require('../pageActions/inventoryActions.page');
const cartActions = require('../pageActions/cartActions.page');
const checkoutInfoActions = require('../pageActions/CheckInfoActions.page');
const checkOverviewActions = require('../pageActions/checkOverviewActions.page');
const checkoutCompleteActions = require('../pageActions/checkSuccessActions.page');

const PERFORMANCE_USER = {
    username: "performance_glitch_user",
    password: "secret_sauce"
};

describe("Q3: Performance Glitch User Test", () => {
    let savedCartItem;
    
    it("should login successfully", async () => {
        await loginActions.login(
            PERFORMANCE_USER.username,
            PERFORMANCE_USER.password
        );
        await loginActions.verifySuccessfulLogin();
    });

    it("Reset app state", async () => {
        await inventoryActions.hamburgerMenu();
        await browser.pause(2000);
        await inventoryActions.resetAppstate();
        await browser.pause(2000);
        await inventoryActions.crossHamburgerMenu();
    });

    it("Filter products by Z-A and add first item", async () => {
        await inventoryActions.sortProductsZtoA();
        await browser.pause(2000); // Allow sort to complete
        await inventoryActions.addFirstItemToCart();
        await inventoryActions.checkOutCart();
    });

    it("Verify cart and proceed to checkout", async () => {
        // Get cart details
        savedCartItem = await cartActions.getItemDetails();
        await cartActions.proceedToCheckout();
    });

    it("Complete checkout information", async () => {
        await checkoutInfoActions.fillInfo('Ashadul', 'Kibria', '7010');
    });

    it("Verify order details", async () => {
        // Verify single item
        const overviewItems = await checkOverviewActions.getItemsDetails();
        expect(overviewItems).toEqual(savedCartItem);

        // Verify total price
        const totalPrice = await checkOverviewActions.getTotalPrice();
        const expectedTotal = savedCartItem[0].price * 1.08; // Price + 8% tax
        expect(totalPrice).toBeCloseTo(expectedTotal, 2);

        await checkOverviewActions.finishPurchase();
    });

    it("Verify success message and cleanup", async () => {
        await checkoutCompleteActions.verifySuccessMessage();
        await browser.pause(2000);
    });
    it("Reset the app state", async () => {
        await inventoryActions.hamburgerMenu();
        await inventoryActions.resetAppstate();
        await browser.pause(2000);
    });
    it("Verify success message and cleanup", async () => {
        await inventoryActions.logOut();
        await browser.pause(2000);
    });
});