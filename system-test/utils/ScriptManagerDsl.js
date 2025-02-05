const { ScriptManagerDrivers } = require("./ScriptManagerDriver");
class ScriptManagerDsl {

  scriptManagerDriver;
  constructor(){
    this.scriptManagerDriver = new ScriptManagerDrivers();
  }

  visitFrontendURL(URL){
   this.scriptManagerDriver.visitFrontendURL(URL);
  }
  addNewScript(title, description, code){
    this.scriptManagerDriver.initiateAddingNewScript();
    this.scriptManagerDriver.typeInScriptData(title, description, code);
    this.scriptManagerDriver.saveScript();
  }

  openHistory(){
    this.scriptManagerDriver.openHistory();
  }

  editScript(title, description, code){
    this.scriptManagerDriver.startEditingFirstScript();
    this.scriptManagerDriver.typeInScriptData(title, description, code);
    this.scriptManagerDriver.saveScript();
  }

  askAi(message, expectation) {
    this.scriptManagerDriver.askAI(message, expectation)
  }

  async getWebsiteTitle(FRONT_END_URL){
   return await this.scriptManagerDriver.getWebsiteTitle(FRONT_END_URL);
  }
  shouldHaveScriptWithTitle(title){
   return this.scriptManagerDriver.shouldHaveScriptWithTitle(title);
  }
  shouldHaveScriptWithDescription(description){
   return this.scriptManagerDriver.shouldHaveScriptWithDescription(description);
  }
  shouldHaveScriptWithCode(code){
  return this.scriptManagerDriver.shouldHaveScriptWithCode(code);
  }
}

module.exports = { ScriptManagerDsl };
