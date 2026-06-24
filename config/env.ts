export const env={
    headless:process.env.HEADLESS!=='false',

    loginUrl:
        process.env.LOGIN_URL ??
        'https://the-internet.herokuapp.com/login' ,
    
    formUrl:
    process.env.FORM_URL ??
    'https://demoqa.com/text-box'
}