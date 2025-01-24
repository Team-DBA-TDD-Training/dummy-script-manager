export const FRONT_END_URL = process.env.frontend_url;
const jsdom = require("jsdom")
const { JSDOM } = jsdom

describe("Frontend smoke tests", () => {
  it("checks if the website is up and running", async () => {
      const response = await fetch(FRONT_END_URL);
      expect(response.ok).toBe(true);
  });

  it("checks if the title is being displayed and is correct", async () => {
    const response = await fetch(FRONT_END_URL);
    const htmlText = await response.text();
    const jsdom = new JSDOM(htmlText);
    const pageTitle = jsdom.window.document.querySelector('title')?.textContent || 'No title found';
    expect(pageTitle).toBe("Script Manager");
  });
});
