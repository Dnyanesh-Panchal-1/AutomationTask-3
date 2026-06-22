import {Given, When, Then} from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

Given ('user is on login page', async function (this: CustomWorld){
    const loginPage=new LoginPage(this.page);
    await loginPage.goto();
});

When(
    'user enters username {string} and password {string}', async function(this: CustomWorld, username: string, password: string){
        const loginPage=new LoginPage(this.page);
        await loginPage.login(username,password);
    }
);


Then(
    'user should be navigated to dashboard', async function(this: CustomWorld){
        const loginPage=new LoginPage(this.page);
        await loginPage.verifySuccessfulLogin();

    }
);

Then(
    'invalid username message should be displayed', async function(this:CustomWorld){
        const loginPage=new LoginPage(this.page);
        await loginPage.verifyInvalidUsername();
    }
)

Then(
    'invalid password message should be displayed', async function(this:CustomWorld){
        const loginPage=new LoginPage(this.page);
        await loginPage.verifyIvalidPassword();
    }
)

When(
    'user clicks logout button', async function(this:CustomWorld){
        const loginPage=new LoginPage(this.page);
        await loginPage.clickLogout();

    }
);

Then(
    'user should be redirected to login page', async function(this:CustomWorld){
        const loginPage=new LoginPage(this.page);
        await loginPage.verifyLogout();

    }
);

When(
    'user enters {string} and {string}', async function(this: CustomWorld, username:string, password:string){
        const loginPage=new LoginPage(this.page);
        await loginPage.login(username,password);
    }

)

Then(
    'login result should be {string}', async function(
        this: CustomWorld,
        result:string
    ){
        const loginPage=new LoginPage(this.page);
        switch(result.toLowerCase()){
            case 'success':
                await loginPage.verifySuccessfulLogin();
                break;
            case 'failure':
                const message = await this.page.locator('#flash').textContent();
                if (message?.includes('username')){
                    await loginPage.verifyInvalidUsername();
                }else{
                    await loginPage.verifyIvalidPassword();
                }break;
            default:
                throw new Error(`Unknown result: ${result})`);
        }

    }
)