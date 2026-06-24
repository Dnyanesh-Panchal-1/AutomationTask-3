import{Before,After,BeforeAll,AfterAll,setDefaultTimeout, Status} from '@cucumber/cucumber' ;
import{chromium,Browser,BrowserContext,Page} from '@playwright/test' ;
import{CustomWorld} from '../support/world';
import { env } from '../config/env';


let browser:Browser;
let context :BrowserContext;
let page:Page;

setDefaultTimeout(60*1000);

BeforeAll(async function(){
    browser=await chromium.launch({
        headless: env.headless
    });
});
Before(async function(this: CustomWorld){

    context=await browser.newContext({
        recordVideo:{
            dir:"videos/",
            size:{
                width:1280,
                height:720
            }
        }
    });

    await context.tracing.start({
        screenshots:true,
        snapshots:true,
        sources:true
    });
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
    await context.tracing.stop({
        path:`traces/${scenario.pickle.name}.zip`
    });
    await context.close();
});

AfterAll(async function(){
    await browser.close();
});