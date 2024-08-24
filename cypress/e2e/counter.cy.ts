describe('counter', () => {

    beforeEach(() => {
        cy.visit('./fruits.html');
    });

    afterEach(() => {
        cy.reload();
    })

    it('click all buttons', () => {

        cy.get('button').each(($button, index) => {
            cy.wrap($button).click();
        
            // After clicking, assert the count is correct
            cy.get('#count').invoke('text').should('equal', String(index + 1));
        });
    })

    it('click all buttons 2', () => {

        cy.get('button').then((buttons) => {
            for (let i = 0; i < buttons.length; i++) {
                cy.get('button').eq(i).click();
                cy.get('#count').invoke('text').should('eql', String(i+1));
            }
        })
    })

    it('check status', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').its('status').should('eql', 200)
    })
});