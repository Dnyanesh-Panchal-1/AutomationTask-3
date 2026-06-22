import {setWorldConstructor,World} from '@cucumber/cucumber';
import {Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class CustomWorld extends World{
    page!:Page;
}
setWorldConstructor(CustomWorld);