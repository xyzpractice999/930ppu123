import { expect } from '@playwright/test';

class WelcomePage{
    constructor(page){
        this.page=page;
        this.logoutBtn=page.getByRole('link', { name: 'Log out' });
    }

    async verifyWelComePage(){
        await expect(this.logoutBtn).toBeVisible();
    }
    async logout(){
        await this.logoutBtn.click();
    }

}

module.exports = { WelcomePage }