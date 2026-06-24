import {Page, Locator, expect} from '@playwright/test';
import { routes } from '../constants/routes';
import { selectors } from '../constants/selectors';
import { messages } from '../constants/messages';

export class LoginPage {
    readonly page:Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly flashMessage: Locator;
    readonly logoutButton: Locator;

    constructor(page:Page){
        this.page=page;

        this.usernameInput=page.locator(selectors.usernameInput);
        this.passwordInput=page.locator(selectors.passwordInput);
        this.loginButton=page.locator(selectors.loginButton);
        this.flashMessage=page.locator(selectors.flashMessage);
        this.logoutButton=page.getByRole('link',{name:'logout'});
    }
    async goto():Promise<void>{
        await this.page.goto(routes.login,{
            waitUntil:'commit'
        });
    }

    async enterUsername(username:string):Promise<void>{
        await this.usernameInput.fill(username);
    }

    async enterPassword(password:string):Promise<void>{
        await this.passwordInput.fill(password);
    }

    async clickLogin():Promise<void>{
        await this.loginButton.click();
    }

    async login(username:string, password:string):Promise<void>{
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async clickLogout():Promise<void>{
        await this.logoutButton.click();
    }

    async verifySuccessfulLogin():Promise<void>{
        await expect(this.flashMessage).toContainText(messages.loginSuccess);
    }

    async verifyInvalidUsername():Promise<void>{
        await expect(this.flashMessage).toContainText(messages.invalidUsername);
    }


    async verifyInvalidPassword():Promise<void>{
        await expect(this.flashMessage).toContainText(messages.invalidPassword);
    }

    async verifyLogout():Promise<void>{
        await expect(this.flashMessage).toContainText(messages.logoutSuccess);
    }
}