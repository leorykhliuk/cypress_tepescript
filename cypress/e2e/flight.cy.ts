import { fakeLocation } from "./custom.commands/kill.location";

it('Test flight', () => {
    cy.viewport(window.screen.width, window.screen.height);
    cy.visit('https://www.spicejet.com/', fakeLocation(48, 2))
    cy.wait(5000)
    cy.get('[href="https://spicejet.bookairportcab.com/?SJ1"] > .css-1dbjc4n > .css-76zvg2').click()
})