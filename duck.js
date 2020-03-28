const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // devtools: false,
        // args: ["--start-maximized"]
    });

    // creates a tab
    const page = await browser.newPage();

    // goes to url
    await page.goto('https://duckduckgo.com');

    // finds serach bar
    const searchInput = await page.$('input[name=q]');

    // focus and type search query
    await searchInput.focus();
    await page.keyboard.type('pup for ducks');

    const searchButton = await page.$('#search_button_homepage');
    await searchButton.click();
    // alternatively, we can just press enter on the keyboard
    // await page.keyboard.press("Enter");
})();

