import { LoginUser } from "../../support/pages/loginUserPO/loginUserPO";
const regUser = new LoginUser();

describe("Log In With Correct Cridentials", function () {
   
    before(function () {

        cy.visit("/");
        cy.fixture("userDetails").then((data) => {
            this.data = data;
        })
    })

    it("Navigate To Home Page", function () {
        const logDetails = this.data.loginDetails;
        const loginUser = new LoginUser;
        loginUser.getHomePageButtonSelector().should('have.text', " Home");
        loginUser.getSignupLogingButtonSelector().click();
        loginUser.getLoginEmailTextBoxSelector().type(logDetails.email);
        loginUser.getPasswordTextBoxSelector().type(logDetails.password);
        loginUser.getloginButtonSelector().click();
        
    })
})