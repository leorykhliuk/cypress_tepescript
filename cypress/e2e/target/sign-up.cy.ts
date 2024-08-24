import { IUserRegistration } from "../../interfaces/registration.user.interface";

let userData: IUserRegistration;
describe('Sign up', () => {

    beforeEach( function() {
        cy.fixture('userSingleData').then(function(data) {
            userData = data;
        })
        cy.visit('/');
    });

    it('Enter user data', function () {
    
        cy.get('[data-test="@web/AccountLink"]').click();
        cy.get('[data-test="accountNav-createAccount"]').click();
        cy.get('[inputmode="email"]').type(userData.email);
        cy.get('[name="firstnamecreateaccount"]').type(userData.firstName);
        cy.get('[name="lastnamecreateaccount"]').type(userData.lastName)
        cy.get('[name="phonecreateAccount"]').type(userData.phone)
        cy.get('[name="passwordcreateaccount"]').type(userData.password).should('have.attr', 'type', 'password');
        
        cy.get('.sc-fc7eea3b-0.iNYPZN button').click();

        cy.get('[name="passwordcreateaccount"]').should('have.value', userData.password).and('be.visible');
        cy.get('[name="passwordcreateaccount"]').should('have.attr', 'type', 'text').and('not.have.attr', 'type', 'password');
    });

});
