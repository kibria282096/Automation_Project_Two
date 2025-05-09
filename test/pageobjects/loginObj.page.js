class LoginPage {
    
    get username() {
        return $('//input[@data-test="username"]');
    }
    
    get password() {
        return $('//input[@data-test="password"]');
    }
    
    get loginButton() {
        return $('//input[@data-test="login-button"]');
    }
    
    get errorMessage() {
        return $('//h3[@data-test="error"]');
    }
}

module.exports = new LoginPage();