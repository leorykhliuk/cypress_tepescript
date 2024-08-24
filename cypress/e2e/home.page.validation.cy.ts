import { HomePage } from "../page-objects/home.page";

let homePage: HomePage;

describe('Home page validation', () => {

  beforeEach(() => {
    homePage = new HomePage();
    homePage.open();
  });

  it('Open home screen', () => {
    cy.url().should('include', 'softwaretestingboard');
    homePage.elements.logoClass().should('be.visible');
    cy.title().should('eql', 'Home Page')

  });

  it('Open shop by category menu', () => {

    homePage.clickSignInLink();

    cy.url().should('include', '/customer/account/login')

  });

  it('Order and returns section has been visible', () =>{
    // homePage.elements.orderAndReturns().should('not.be.visible');

    homePage.scrollToFooter();

    homePage.elements.orderAndReturns().should('be.visible');
  });

});