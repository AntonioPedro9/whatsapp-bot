const puppeteer = require("puppeteer");
const readline = require("readline");
const message = require("./message");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let browser, page;

(async function main() {

	do {
		var chatName = await getChatName();
	} while (!chatName);

	browser = await puppeteer.launch({
		headless: false,
		defaultViewport: null,
		args: ["--start-maximized"]
	});

	page = (await browser.pages())[0];

	await page.goto("https://web.whatsapp.com/"); // navega até a página do whatsapp web
	await clickOn("span[data-testid='chat']");    // clica no ícone do input de pesquisa
	await typeIn("div[data-tab='3']", chatName);  // escreve o nome do chat no input
	await sleep(1000);                            // espera 1 segundo
	await clickOn(`span[title='${chatName}']`);   // clica no chat filtrado

	sendMessage(message);
})();



async function sendMessage(message) {
	let lines = message.split("\n"); // divide a mensagem a cada quebra de linha
	let i = 0;

	while (i < lines.length && lines[i].trim() != "") {
		await typeIn("div[data-tab='6']", message); // escreve o texto no input
		await clickOn("span[data-testid='send']");  // clica no botão de enviar

		i++
	}
}



function getChatName() {
	return new Promise((resolve) => {
		rl.question("Type exactly the name of the chat you want to spam: ", (input) => {
			rl.close();
			return resolve(input);
		});
	});
};



async function clickOn(element) {
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
