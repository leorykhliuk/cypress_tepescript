export class PartnersBase {
    elements = {
        rewards : () => cy.get('.menu-cefco-rewards.dropdown'),
        lastItem : () => cy.get('.menu-cefco-rewards .menu-faq'),
    }

    openPage(): void {
        cy.visit(Cypress.env(`E_COMMERCE_SITE_URL`));
    };

    howerSupportSection(): void {
        this.elements.rewards().trigger('mouseover');
    };

}