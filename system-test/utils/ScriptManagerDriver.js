const { ScriptManagerUIDriver } = require("./ScriptManagerUIDriver");
const { ScriptManagerAPIDriver } = require("./ScriptManagerAPIDriver");

class ScriptManagerDrivers {

 UIDriver;
 APIDriver;

  constructor(){
    this.UIDriver = new ScriptManagerUIDriver();
    this.APIDriver =  new ScriptManagerAPIDriver();
  }

  visitFrontendURL(URL){
    this.UIDriver.visitFrontendURL(URL);
  }
  initiateAddingNewScript() {
   this.UIDriver.initiateAddingNewScript();
  }

  typeInScriptData(title, description, code){
    this.UIDriver.typeInScriptData(title, description, code);
  }
  
  saveScript() {
    this.UIDriver.saveScript();
  }

  openHistory(){
    this.UIDriver.openHistory();
  }
  startEditingFirstScript() {
   this.UIDriver.startEditingFirstScript();
  }
  async getWebsiteTitle(FRONT_END_URL){
   return await this.UIDriver.getWebsiteTitle(FRONT_END_URL);
  }
  shouldHaveScriptWithTitle(title){
    this.UIDriver.shouldHaveScriptWithTitle(title);
  }
  shouldHaveScriptWithDescription(description){
    this.UIDriver.shouldHaveScriptWithDescription(description);
  }
  shouldHaveScriptWithCode(code){
   this.UIDriver.shouldHaveScriptWithCode(code);
  }
  shouldHaveScriptInDatabase(){
      this.APIDriver.shouldHaveScriptInDatabase()
  }

}

module.exports = { ScriptManagerDrivers };
