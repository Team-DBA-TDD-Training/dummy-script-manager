import { ScriptManagerDsl } from '../utils/ScriptManagerDsl'

const FRONTEND_URL = process.env.FRONTEND_URL;

const scriptManager = new ScriptManagerDsl();

describe('E2E flow feature tests', () => {
  it('Add a new script', () => {
    const title = "E2E test script name POM Model";
    const description = "E2E test script description";
    const code = "E2E test script code";
    scriptManager.visitFrontendURL(FRONTEND_URL);
    scriptManager.addNewScript(title, description, code)
    scriptManager.openHistory();
    scriptManager.shouldHaveScriptWithTitle(title);
    scriptManager.shouldHaveScriptWithDescription(description);
    scriptManager.shouldHaveScriptWithCode(code);
  });

  it('Edit first script in the list', () => {
    const titleEdited = "E2E test script name edited POM Model 2";
    const descEdited = "E2E test script description edited";
    const codeEdited = "E2E test script code edited";
    scriptManager.visitFrontendURL(FRONTEND_URL);
    scriptManager.openHistory();
    scriptManager.editScript(titleEdited, descEdited, codeEdited);
    scriptManager.shouldHaveScriptWithTitle(titleEdited);
    scriptManager.shouldHaveScriptWithDescription(descEdited);
    scriptManager.shouldHaveScriptWithCode(codeEdited);
  });
});