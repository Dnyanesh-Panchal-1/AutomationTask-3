import {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { routes } from '../constants/routes';
import { selectors } from '../constants/selectors';

export class FormPage extends BasePage {


    readonly fullName: Locator;
    readonly email: Locator;
    readonly currentaddress: Locator;
    readonly submitButton: Locator;
    readonly outputName: Locator;
    readonly outputEmail: Locator;



    constructor(page:Page){
        super(page);

        this.fullName=page.locator(selectors.fullName);
        this.email=page.locator(selectors.email);
        this.currentaddress=page.locator(selectors.currentAddress);
        this.submitButton=page.locator(selectors.submitButton);
        this.outputName=page.locator(selectors.outputName);
        this.outputEmail=page.locator(selectors.outputEmail);
    }

    async goto():Promise<void>{
        await this.page.goto(routes.form);
    }

    async fillForm(data:{
        name:string;
        email:string;
        address:string
    }):Promise<void>{
        await this.fullName.fill(data.name);
        await this.email.fill(data.email);
        await this.currentaddress.fill(data.address);
    }

    async submit():Promise<void>{
        await this.submitButton.click();
    }

    async verifySubmission(data:{
        name: string;
        email: string
    }):Promise<void>{
        await expect(this.outputName).toContainText(data.name);
        await expect(this.outputEmail).toContainText(data.email);
    }
}