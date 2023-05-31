export class LoginUser {
    getHomePageButtonSelector(){
        return cy.get('ul>li>a[href="/"]')
    }

    getSignupLogingButtonSelector(){
        return cy.get('ul>li>a[href="/login"]')
    }

    getLoginEmailTextBoxSelector(){
        return cy.get('[data-qa="login-email"]')
    }

    getPasswordTextBoxSelector(){
        return cy.get('[data-qa="login-password"]')
    }

    getloginButtonSelector(){
        return cy.get('[data-qa="login-button"]')
    }


    
}