const jsdom = require("jsdom")
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
    const response = await fetch(FRONT_END_URL);
    const htmlText = await response.text();
    const jsdom = new JSDOM(htmlText);
    const pageTitle = jsdom.window.document.querySelector('title')?.textContent || 'No title found';
    expect(pageTitle).toBe("Script Manager");
  });
});