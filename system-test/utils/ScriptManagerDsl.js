const { ScriptManagerDrivers } = require("./ScriptManagerDriver");
class ScriptManagerDsl {

  scriptManagerDriver;
  constructor(){
    this.scriptManagerDriver = new ScriptManagerDrivers();
  }

  addNewScript(title, description, code){
    this.scriptManagerDriver.initiateAddingNewScript();
    this.scriptManagerDriver.typeInNewScript(title, description, code);
    this.scriptManagerDriver.saveScript();
  }

  openHistory(){
    this.scriptManagerDriver.openHistory();
  }
  editScript(title, description, code){
    this.scriptManagerDriver.startEditingFirstScript();
    this.scriptManagerDriver.enterEditedData(title, description, code)
  }

  async getWebsiteTitle(FRONT_END_URL){
   return await this.scriptManagerDriver.getWebsiteTitle(FRONT_END_URL);
  }
  getScriptWithTitle(title){
   return this.scriptManagerDriver.getScriptWithTitle(title);
  }
  getScriptWithDescription(description){
   return this.scriptManagerDriver.getScriptWithDescription(description);
  }
  getScriptWithCode(code){
  return this.scriptManagerDriver.getScriptWithCode(code);
  }
}

module.exports = { ScriptManagerDsl };
