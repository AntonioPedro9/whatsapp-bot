const puppeteer = require("puppeteer");
const prompt = require("prompt-sync")();
const message = require("./message");

(async function main() {

	// Get whatsapp chat name:
	do {
		var chatName = prompt("Write exactly the name of the chat you want to spam: ");
	} while (!chatName);

	// Launch browser:
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	// Navigate to whatsapp:
	await page.goto("https://web.whatsapp.com/", { waitUntil: "domcontentloaded" });

	async function selectChat(chatName) {
		await page.waitForSelector("div[data-tab='3']");                 // wait search input load
		await page.type("div[data-tab='3']", chatName);                  // type chat name at input
		await page.waitForSelector("span[class='matched-text _1VzZY']"); // wait chat message load
		await page.click("span[class='matched-text _1VzZY']");           // click at chat message
	}
	selectChat(chatName);

	async function sendMessage(message) {
		await page.waitForSelector("div[data-tab='6']"); // wait message input load

		let lines = message.split("\n");
		let i = 0;

		while (i < lines.length && lines[i].trim() != "") {
			await page.type("div[data-tab='6']", message); // type the message at the input
			await page.click("span[data-testid='send']");  // click at send button

			i++
		}
	}
	sendMessage(message);
	
})();
