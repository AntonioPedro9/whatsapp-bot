const puppeteer = require("puppeteer");
const prompt = require("prompt-sync")();
const message = require("./message");

let browser, page;

(async function main() {

	// Get whatsapp chat name:
	do var chatName = prompt("Write exactly the name of the chat you want to spam: ");
	while (!chatName);

	// Launch browser:
	browser = await puppeteer.launch({ headless: false });
	page = await browser.newPage();

	// Navigate to whatsapp:
	await page.goto("https://web.whatsapp.com/", { waitUntil: "domcontentloaded" });

	await typeIn("div[data-tab='3']", chatName);        // type chat name in the filter input
	await clickAt("span[class='matched-text _1VzZY']"); // click at filtered chat message

	sendMessage(message);
})();



async function sendMessage(message) {
	let lines = message.split("\n");
	let i = 0;

	while (i < lines.length && lines[i].trim() != "") {
		await typeIn("div[data-tab='6']", message); // type message in the input
		await clickAt("span[data-testid='send']");  // click at send button

		i++
	}
}



async function clickAt(element) {
	await page.waitForSelector(`${element}`);
	await page.click(`${element}`);
}



async function typeIn(element, text) {
	await page.waitForSelector(`${element}`);
	await page.type(`${element}`, text);
}
