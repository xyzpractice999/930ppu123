const testdata = require('../config/global.json');

class BrowserUtils{

    static async invokeApp(page){
          await page.goto(testdata.url);
    }

}
module.exports={ BrowserUtils };