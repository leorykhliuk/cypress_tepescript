import { TargetHomePage } from "../page-objects/target.home";

let homeScrn: TargetHomePage;
describe('Search location', () => {
    beforeEach(() => {
        homeScrn = new TargetHomePage();
        homeScrn.open();
    });

    it('click locator', () => {
  
        homeScrn.clickLocator();
        homeScrn.elements.updateLocationTitle().should('be.visible');
        homeScrn.elements.updateLocationTitle().should('have.text', 'Update shipping location');
    })

})
