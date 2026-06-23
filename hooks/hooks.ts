import{Before,After,setDefaultTimeout, Status} from '@cucumber/cucumber' ;
import{chromium,Browser,BrowserContext,Page} from '@playwright/test' ;
import{CustomWorld} from '../support/world';

let browser:Browser;
let context :BrowserContext;
let page:Page;

setDefaultTimeout(60*1000);

Before(async function(this: CustomWorld){
    browser= await chromium.launch({
        headless:false
    }); 
    context=await browser.newContext();
    page = await context.newPage();

    this.page=page;

});

After(async function(this: CustomWorld, scenario){
    if (scenario.result?.status === Status.FAILED) {
        await this.page.screenshot({
            path:`screenshots/${scenario.pickle.name}.png`,
            fullPage:true
        });
    }
    await browser.close();
});