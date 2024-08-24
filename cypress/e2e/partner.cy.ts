import { PartnersBase } from "../page-objects/partners.page";

describe('E-comerce site' , () => {

    it('Check text inside', () =>{
        const partner = new PartnersBase();
        
        partner.openPage();
        cy.wait(1000);
        cy.get('div.home_module_inner a strong').first().should('have.text', '190 locations');
        const locations: Cypress.Chainable<string> = cy.get('div.home_module_inner a strong').first().invoke('text')
            .then((initialValue) => {
                // console.log(initialValue);
                const initalCount: number = parseInt(initialValue);
                console.log(initalCount)
                // cy.task('log', initalCount)
                expect(initalCount).to.eql(190)
            });
        
        // // partner.elements.lastItem().should('be.visible');
        // partner.elements.lastItem().should('have.text', 'FAQ');
    });
})
