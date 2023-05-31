import { RegisterUser } from '../../support/pages/registerUserPO/registerUserPO';
import {faker} from '@faker-js/faker';
// const {faker} = require('faker-js/faker');
const randomName = faker.name.fullName(); 
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const regUser = new RegisterUser();


describe("Register to Automation Exercise", () => {
    
    before(function () {

        // Naviagting To Home Page
        cy.visit("/");
        cy.fixture("userDetails").then((data) =>{
            
            this.data = data
        });
    })

    it("Navigate To Home Page", function ()  {
        const userInfo = this.data.userInfo
        regUser.homePage();
        regUser.createUser(randomName,randomEmail);
        regUser.fillInfo(userInfo,randomPassword);
        ///Verify Account Creation
        
        regUser.getAccountCreatedHeadingSelector().should('have.text','Account Created!').should('be.visible'); 
        regUser.getContinueButtonSelector().click();
        regUser.verification();
        regUser.deleteAccount();
    
    })
    
})