const { LoginPage } = require('../pages/loginpage');
const temptestdata = require('../config/global.json');

class Common{
    constructor(page){
        this.page=page;
    }

    async performlogin(){
        const loginPage=new LoginPage(this.page);
        await loginPage.eneterUserId(temptestdata.userid);
        await loginPage.eneterPswd(temptestdata.pswd);
        await loginPage.submit();

    }
}

module.exports = { Common };