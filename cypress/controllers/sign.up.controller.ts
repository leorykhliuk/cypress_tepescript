import { IUserData } from "../interfaces/user.data.interface";
import { SignUpPage } from "../page-objects/sign.up.page";

export class SignUpController {

    static fillUserInfo(userinfo: IUserData): void {
        const signUpPage = new SignUpPage();
        signUpPage.typeFirstName(userinfo.firstName);
        signUpPage.typeLastName(userinfo.lastName);
        signUpPage.typeEmail(userinfo.email);
        signUpPage.typePassword(userinfo.password);
        signUpPage.typeConfirmPassword(userinfo.confirmPassword);
        //signUpPage.clickSubmtiBtn();
    };

}
