const jsdom = require("jsdom");
const { ScriptManagerPage } = require("../utils/ScriptManagerPage");
const { JSDOM } = jsdom;

const FRONT_END_URL = process.env.FRONTEND_URL;
  
if (!FRONT_END_URL) {
  throw new Error("FRONTEND_URL is not defined");
}

describe("Basic frontend health check test", () => {
  it("If the website is up and running", async () => {
      const response = await fetch(FRONT_END_URL);
      expect(response.ok).toBe(true);
  });
});

describe("Frontend smoke test", () => {
  it("checks if the title is being displayed and is correct", async () => {
    const pageTitle = await  new ScriptManagerPage().getWebsiteTitle(FRONT_END_URL);
    expect(pageTitle).toBe("Script Manager");
  });
});