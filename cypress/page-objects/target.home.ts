export class TargetHomePage {

    elements = {
        zipCodeBtn: (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('#zip-code-id-btn'),
        updateLocationTitle: (): Cypress.Chainable<JQuery<HTMLElement>> => cy.get('[data-test="modal-drawer-heading"]'),
    }

    open(): void {
        cy.visit(Cypress.env('TARGET_URL'), {timeout: 5000});
    };

    clickLocator(): void {
        this.elements.zipCodeBtn().click();
    };
}
