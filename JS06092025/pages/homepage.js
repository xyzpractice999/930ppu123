import { expect } from '@playwright/test';

class HomePage{
    constructor(page){
        this.page=page;
        this.loginLink=page.getByRole('link', { name: 'Log in' });
    }
    async verifyHomepage(){
        await expect(this.loginLink).toBeVisible();
    }
    async navigateToLoginPage(){
        await this.loginLink.click();
    }
}

module.exports = { HomePage }