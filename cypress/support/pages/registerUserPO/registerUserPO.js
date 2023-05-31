export class RegisterUser {

    getLoginPageButtonSelector() {
            return '[href="/login"]';
    }

    getSignUpFormHeader() {
        return '.signup-form';
    }

    getSignUpNameTextBoxSelector(){
        return '[data-qa="signup-name"]';
    }

    getSignUpEmailTextboxSelector(){
        return '[data-qa="signup-email"]';
    }

    getSignUpButtonSelector(){
        return '[data-qa="signup-button"]';
    }

    getMrRadioButtonSelector(){
        return cy.get('#id_gender1[value="Mr"]');
    }

    getPasswordTextBoxSelector(){
        return cy.get('#password[name="password"]');
    }

    getSignUpToNewsLetterCheckBoxSelector(){
        return cy.get('input[name="optin"]');
    }

    getReceiveSpecialOffersCheckBoxSelector(){
        return cy.get('input[name="optin"]');
    }

    getFirstNameTextboxSelector(){
        return cy.get('#first_name[name="first_name"]');
    }

    getLastNameTextboxSelector(){
        return cy.get('input[name="last_name"]');
    }

    getCompanyTextboxSelector(){
        return cy.get('#company');
    }

    getAddress1TextBoxSelector(){
        return cy.get('#address1[name="address1"]');
    }

    getAddress2TextBoxSelector(){
        return cy.get('#address2[name="address2"]');
    }

    getStateTextBoxSelector(){
        return cy.get('#state');
    }

    getCityTextBoxSelector(){
        return cy.get('#city');
    }

    getZipCodeTextBoxSelector(){
        return cy.get('#zipcode');
    }

    getMobileNumberTextboxSelector(){
        return cy.get('#mobile_number');
    }

    getCreateAccountButtonSelector(){
        return cy.get('[data-qa="create-account"]');
    }

    homePage () {
        /// Navigating to Sign Up Page
        cy.get(this.getLoginPageButtonSelector()).should('have.text', ' Signup / Login').click();
        cy.get(this.getSignUpFormHeader()).contains('New User Signup!').should('be.visible');
    }

    createUser (randomName,randomEmail) {
        /// Create User
        cy.get(this.getSignUpNameTextBoxSelector()).type(randomName);
        cy.get(this.getSignUpEmailTextboxSelector()).type(randomEmail);
        cy.get(this.getSignUpButtonSelector()).click(); 
    }

    fillInfo (data,randomPassword) {

        /// Fill Up User Information Form
        this.getMrRadioButtonSelector().check();
        this.getPasswordTextBoxSelector().type(randomPassword);

        cy.get('#days[name="days"]').select('17').should('have.value', '17');
        cy.get('#months[name="months"]').select('September').should('have.value', '9');
        cy.get('#years[name="years"]').select('1998').should('have.value', '1998');

        this.getReceiveSpecialOffersCheckBoxSelector().check();
        this.getReceiveSpecialOffersCheckBoxSelector().check();
        this.getFirstNameTextboxSelector().type(data.firstName);
        this.getLastNameTextboxSelector().type(data.lastName);
        this.getCompanyTextboxSelector().type(data.companyName);
        this.getAddress1TextBoxSelector().type(data.address);
        this.getAddress2TextBoxSelector().type(data.address);

        cy.get('#country').select('Australia').should('have.value', 'Australia');

        this.getStateTextBoxSelector().type(data.state);
        this.getCityTextBoxSelector().type(data.city);
        this.getZipCodeTextBoxSelector().type(data.zipCode);
        this.getMobileNumberTextboxSelector().type(data.mobileNumber);
        this.getCreateAccountButtonSelector().click();
    }

    getAccountCreatedHeadingSelector(){
        return cy.get('[data-qa="account-created"]');
    }

    getContinueButtonSelector(){
        return cy.get('[data-qa="continue-button"]');
    }

    verification () {
        /// Verify User Is Loged In 
        cy.get(".navbar-nav>li>a").contains(' Logged in as ').should('be.visible');
    }

    deleteAccount () {
        
        /// Delete Account
        cy.get('[href="/delete_account"]').click();
        cy.get('[data-qa="account-deleted"]').contains('Account Deleted!').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    }
    
    

}