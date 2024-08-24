export class HomePage {
    //readonly homePageClass: Cypress.Chainable<JQuery<HTMLElement>>
    
    elements = {
        logoClass: (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('.logo'),
        signInLink: (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('.authorization-link').first(),
        footer : (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('footer'),
        orderAndReturns : () => cy.get('ul.footer.links li.nav.item', {timeout: 1000}).contains('Orders and Returns'),
    };

    open(): void {
        cy.visit(Cypress.env('BASE_URL'));
    };

    clickSignInLink(): void {
        this.elements.signInLink().click();
    };

    scrollToFooter(): void {
        this.elements.footer().scrollIntoView();
    }
}
