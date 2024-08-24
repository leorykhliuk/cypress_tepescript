export class SignUpPage {

    readonly elements = {
        inputFirstName : () => cy.get('#firstname'),
        inputLastName : () => cy.get('#lastname'),
        inputEmail : () => cy.get('#email_address'),
        inputPassword : () => cy.get('#password'),
        inputConfirmPassowrd : () => cy.get('#password-confirmation'),
        btnSubmit : () => cy.get('button[class="action submit primary"]')
    };

    open(): void {
        cy.visit(`${Cypress.env('BASE_URL')}/customer/account/create/`)
    }

    typeFirstName(fistName: string ): void {
        this.elements.inputFirstName().type(fistName);
    };

    typeLastName(lastName: string): void {
        this.elements.inputLastName().type(lastName);
    };

    typeEmail(email: string): void {
        this.elements.inputEmail().type(email);
    };

    typePassword(password: string): void {
        this.elements.inputPassword().type(password);
    };

    typeConfirmPassword(password: string): void {
        this.elements.inputConfirmPassowrd().type(password);
    };

    clickSubmtiBtn(): void {
        this.elements.btnSubmit().click()
    };

}
