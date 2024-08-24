describe('Click by the button, removes the button', () => {

    beforeEach(() => {

        cy.clearAllSessionStorage();
        cy.visit('./test.html');

    });

    it('Remove all buttons from the front page', () => {

        cy.get('button').then((buttons) => {
            for( let i = 1; i <= buttons.length; i ++) {
                cy.get(`#button${i}`)
                    .should('be.visible') // make sure that item exists before
                    .click()
                    .should('not.exist'); // make sure that button get removed
            }
        });
        cy.get('button').should('not.exist');

    });

    it('Remove buttons, variant 2' , () => {

        cy.get('button').each(($button) => { 
            const deleteButton: Cypress.Chainable<JQuery<HTMLElement>> = cy.wrap($button);
            deleteButton
                .should('be.visible')
                .click()
                .and('not.exist');
        });
    })
    
});
