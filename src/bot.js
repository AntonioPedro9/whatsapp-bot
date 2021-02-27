const puppeteer = require("puppeteer");
const readline = require('readline');
const message = require("./message");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let browser, page;

(async function main() {

	// Get whatsapp chat name:
	do var chatName = await getChatName("Type the exact name of the chat you want to spam: ");
	while (!chatName);

	// Launch browser:
	browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ["--start-maximized"] });
	page = (await browser.pages())[0];

	// Navigate to whatsapp:
	await page.goto("https://web.whatsapp.com/", { waitUntil: "domcontentloaded" });

	await clickAt("span[data-testid='chat']");   // click at new message icon

	await typeIn("div[data-tab='3']", chatName); // type chat name in the filter

	await sleep(1000);

	await clickAt(`span[title='${chatName}']`);  // click at filtered chat message

	sendMessage(message);
})();



function getChatName() {
	return new Promise(resolve => {
		rl.question("Type exactly the name of the chat you want to spam: ", (input) => {
			rl.close();
			return resolve(input);
		});
	});
};



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



async function sleep(milliseconds) {
	return new Promise((resolve) => {
		setTimeout(resolve, milliseconds);
	});
}
