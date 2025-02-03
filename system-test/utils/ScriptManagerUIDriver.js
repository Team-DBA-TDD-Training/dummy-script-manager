const { HomePage } = require("./HomePage");
const { HistoryPage } = require("./HistoryPage");

class ScriptManagerUIDriver {

  homePage;
  historyPage;

  constructor(){
    this.homePage = new HomePage();
    this.historyPage = new HistoryPage();
  }
  initiateAddingNewScript() {
   this.homePage.initiateAddingNewScript();
  }

  typeInNewScript(title, description, code){
    this.homePage.typeInTitle(title);
    this.homePage.typeInDescription(description);
    this.homePage.typeInCode(code);
  }
  
  saveScript() {
    this.homePage.saveScript();
  }

  openHistory(){
    this.homePage.openHistory();
  }
  startEditingFirstScript() {
   this.historyPage.selectFirstScript();
   this.historyPage.clickEditIcon();
  }
  enterEditedData(title, description, code){
    this.homePage.clearAndTypeInTitle(title);
    this.homePage.clearAndTypeInDescription(description);
    this.homePage.clearAndTypeInCode(code);
  }

  async getWebsiteTitle(FRONT_END_URL){
   return await this.homePage.getWebsiteTitle(FRONT_END_URL);
  }
  getScriptWithTitle(title){
   return this.homePage.getScriptWithTitle(title);
  }
  getScriptWithDescription(description){
   return this.homePage.getScriptWithDescription(description);
  }
  getScriptWithCode(code){
  return this.homePage.getScriptWithCode(code);
  }
}

module.exports = { ScriptManagerUIDriver};
