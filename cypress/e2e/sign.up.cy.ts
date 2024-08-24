import { SignUpPage } from "../page-objects/sign.up.page";
import { SignUpController } from "../controllers/sign.up.controller"
import { IUserData } from "../interfaces/user.data.interface";

let signUpPage: SignUpPage;

const userTestData: IUserData [] = [
    {
        id: 'Missing FirstName',
        firstName: ' ',
        lastName: 'Walkins',
        email: 'some_email@yopmail.com',
        password: 'qwerty1!',
        confirmPassword: 'qwerty1!',
    },
    {
        id: 'All data',
        firstName: 'Jhonathan',
        lastName: 'Walkins',
        email: 'some_email@yopmail.com',
        password: 'qwerty1!',
        confirmPassword: 'qwerty1!',
    }
]

describe('Sign up page', () => {

    beforeEach(() =>{
        signUpPage = new SignUpPage();
        signUpPage.open();
    });

    for ( const user of userTestData ) {
        it(`Fill out the form ${user.id}`, () => {
            SignUpController.fillUserInfo(user);
            signUpPage.elements.inputFirstName().should('eq', user.firstName);
            signUpPage.elements.inputLastName().should('eq', user.lastName);
            signUpPage.elements.inputEmail().should('eq', user.email);
            signUpPage.elements.inputPassword().should('eq', user.password);
            signUpPage.elements.inputConfirmPassowrd().should('eq', user.confirmPassword);
        });
    };
    

});