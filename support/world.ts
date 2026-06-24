import {setWorldConstructor,World} from '@cucumber/cucumber';
import {Page} from '@playwright/test';




export class CustomWorld extends World{
    page!:Page;

    formData?:{
        name:string;
        email:string;
        address:string;
    };
}
setWorldConstructor(CustomWorld);