import { expect } from '@playwright/test';

class LoginPage{
    constructor(page){
        this.page=page;
        this.userId=page.locator('#loginusername');
        this.pswd=page.locator('#loginpassword') ;
        this.loginBtn=page.getByRole('button', { name: 'Log in' }) ;
    }
    async eneterUserId(userid){
        await this.userId.click();
        await this.userId.fill(userid);
        
    } 
    async eneterPswd(pswd){ 
        await this.pswd.click();
        await this.pswd.fill(pswd);
    } 
    async submit(){
        await this.loginBtn.click();
    } 

}

module.exports = { LoginPage }