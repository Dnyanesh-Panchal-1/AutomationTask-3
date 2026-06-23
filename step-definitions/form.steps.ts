import {Given, When, Then, DataTable} from '@cucumber/cucumber';
import { FormPage } from '../pages/FormPage';
import { CustomWorld } from '../support/world';

Given(
    'user is on form page',
    async function (this: CustomWorld){
        const formPage=new FormPage(this.page);
        await formPage.goto();
    }
);

When(
    'user fills the form with following data:',
    async function(
        this: CustomWorld,
        dataTable: DataTable
    ){
        const data= dataTable.rowsHash() as {
            name:string;
            email:string;
            address:string;
        };

        this.formData=data;

        const formPage=new FormPage(this.page);
        await formPage.fillForm(data);
        await formPage.submit();
    }
)

Then(
    'form should be submitted successfully',
    async function (this: CustomWorld){
        const formPage=new FormPage(this.page);
        await formPage.verifySubmission(this.formData!);
        
    }
)