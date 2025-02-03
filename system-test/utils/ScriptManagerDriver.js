const { ScriptManagerUIDriver } = require("./ScriptManagerUIDriver");

class ScriptManagerDrivers {

 UIDriver;

  constructor(){
    this.UIDriver = new ScriptManagerUIDriver();
  }
  initiateAddingNewScript() {
   this.UIDriver.initiateAddingNewScript();
  }

  typeInNewScript(title, description, code){
    this.UIDriver.typeInNewScript(title, description, code);
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
  enterEditedData(title, description, code){
    this.UIDriver.enterEditedData(title, description, code)
  }
  async getWebsiteTitle(FRONT_END_URL){
   return await this.UIDriver.getWebsiteTitle(FRONT_END_URL);
  }
  getScriptWithTitle(title){
   return this.UIDriver.getScriptWithTitle(title);
  }
  getScriptWithDescription(description){
   return this.UIDriver.getScriptWithDescription(description);
  }
  getScriptWithCode(code){
  return this.UIDriver.getScriptWithCode(code);
  }
}

module.exports = { ScriptManagerDrivers: ScriptManagerDrivers };
