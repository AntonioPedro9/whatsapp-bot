const puppeteer = require("puppeteer");
const prompt = require("prompt-sync")();

let browser, page, chatName;

(async function main() {

	// Get the whatsapp chat name:
	do {
		chatName = prompt("Write exactly the name of the chat you want to spam: ");
	} while (!chatName);

	// Launch browser:
	browser = await puppeteer.launch({ headless: false });
	page = await browser.newPage();

	// Navigate to whatsapp:
	await page.goto("https://web.whatsapp.com/", { waitUntil: "domcontentloaded" });

	selectChat(chatName);
	sendMessage(message);
})();

async function selectChat(chatName) {
	await page.waitForSelector("div[data-tab='3']");                 // wait search input load
	await page.type("div[data-tab='3']", chatName);                  // type chat name at input
	await page.waitForSelector("span[class='matched-text _1VzZY']"); // wait chat message load
	await page.click("span[class='matched-text _1VzZY']");           // click at chat message
}

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

const message = `No princípio, Deus criou os céus e a terra.
A terra estava informe e vazia; as trevas cobriam o abismo e o Espírito de Deus pairava sobre as águas.
Deus disse: "Faça-se a luz!" E a luz foi feita.
Deus viu que a luz era boa, e separou a luz das trevas.
Deus chamou à luz DIA, e às trevas NOITE. Sobreveio a tarde e depois a manhã: foi o primeiro dia.
Deus disse: "Faça-se um firmamento entre as águas, e separe ele umas das outras".
Deus fez o firmamento e separou as águas que estavam debaixo do firmamento daquelas que estavam por cima.
E assim se fez. Deus chamou ao firmamento CÉUS. Sobreveio a tarde e depois a manhã: foi o segundo dia.
Deus disse: "Que as águas que estão debaixo dos céus se ajuntem num mesmo lugar, e apareça o elemento árido." E assim se fez.
Deus chamou ao elemento árido TERRA, e ao ajuntamento das águas MAR. E Deus viu que isso era bom.
Deus disse: "Produza a terra plantas, ervas que contenham semente e árvores frutíferas que dêem fruto segundo a sua espécie e o fruto contenha a sua semente." E assim foi feito.
A terra produziu plantas, ervas que contêm semente segundo a sua espécie, e árvores que produzem fruto segundo a sua espécie, contendo o fruto a sua semente. E Deus viu que isso era bom.
Sobreveio a tarde e depois a manhã: foi o terceiro dia.
Deus disse: "Façam-se luzeiros no firmamento dos céus para separar o dia da noite; sirvam eles de sinais e marquem o tempo, os dias e os anos,
e resplandeçam no firmamento dos céus para iluminar a terra". E assim se fez.
Deus fez os dois grandes luzeiros: o maior para presidir ao dia, e o menor para presidir à noite; e fez também as estrelas.
Deus colocou-os no firmamento dos céus para que iluminassem a terra,
presidissem ao dia e à noite, e separassem a luz das trevas. E Deus viu que isso era bom.
Sobreveio a tarde e depois a manhã: foi o quarto dia.
Deus disse: "Pululem as águas de uma multidão de seres vivos, e voem aves sobre a terra, debaixo do firmamento dos céus."
Deus criou os monstros marinhos e toda a multidão de seres vivos que enchem as águas, segundo a sua espécie, e todas as aves segundo a sua espécie. E Deus viu que isso era bom.
E Deus os abençoou: "Frutificai, disse ele, e multiplicai-vos, e enchei as águas do mar, e que as aves se multipliquem sobre a terra."
Sobreveio a tarde e depois a manhã: foi o quinto dia.
Deus disse: "Produza a terra seres vivos segundo a sua espécie: animais domésticos, répteis e animais selvagens, segundo a sua espécie." E assim se fez.
Deus fez os animais selvagens segundo a sua espécie, os animais domésticos igualmente, e da mesma forma todos os animais, que se arrastam sobre a terra. E Deus viu que isso era bom.
Então Deus disse: "Façamos o homem à nossa imagem e semelhança. Que ele reine sobre os peixes do mar, sobre as aves dos céus, sobre os animais domésticos e sobre toda a terra, e sobre todos os répteis que se arrastem sobre a terra."
Deus criou o homem à sua imagem; criou-o à imagem de Deus, criou o homem e a mulher.
Deus os abençoou: "Frutificai, disse ele, e multiplicai-vos, enchei a terra e submetei-a. Dominai sobre os peixes do mar, sobre as aves dos céus e sobre todos os animais que se arrastam sobre a terra."
Deus disse: "Eis que eu vos dou toda a erva que dá semente sobre a terra, e todas as árvores frutíferas que contêm em si mesmas a sua semente, para que vos sirvam de alimento.
E a todos os animais da terra, a todas as aves dos céus, a tudo o que se arrasta sobre a terra, e em que haja sopro de vida, eu dou toda erva verde por alimento." E assim se fez.
Deus contemplou toda a sua obra, e viu que tudo era muito bom. Sobreveio a tarde e depois a manhã: foi o sexto dia.
Gênesis 1:1-31
Assim foram acabados os céus, a terra e todo seu exército.
Tendo Deus terminado no sétimo dia a obra que tinha feito, descansou do seu trabalho.
Ele abençoou o sétimo dia e o consagrou, porque nesse dia repousara de toda a obra da Criação.
Tal é a história da criação dos céus e da terra.
No tempo em que o Senhor Deus fez a terra e os céus, não existia ainda sobre a terra nenhum arbusto nos campos, e nenhuma erva havia ainda brotado nos campos, porque o Senhor Deus não tinha feito chover sobre a terra, nem havia homem que a cultivasse;
mas subia da terra um vapor que regava toda a sua superfície.
O Senhor Deus formou, pois, o homem do barro da terra, e inspirou-lhe nas narinas um sopro de vida e o homem se tornou um ser vivente.
Ora, o Senhor Deus tinha plantado um jardim no Éden, do lado do oriente, e colocou nele o homem que havia criado.
O Senhor Deus fez brotar da terra toda sorte de árvores, de aspecto agradável, e de frutos bons para comer; e a árvore da vida no meio do jardim, e a árvore da ciência do bem e do mal.
Um rio saía do Éden para regar o jardim, e dividia-se em seguida em quatro braços:
O nome do primeiro é Fison, e é aquele que contorna toda a região de Evilat, onde se encontra o ouro.
{O ouro dessa região é puro; encontra-se ali também o bdélio e a pedra ônix.}
O nome do segundo rio é Geon, e é aquele que contorna toda a região de Cusch.
O nome do terceiro rio é Tigre, que corre ao oriente da Assíria. O quarto rio é o Eufrates.
O Senhor Deus tomou o homem e colocou-o no jardim do Éden para cultivá-lo e guardá-lo.
Deu-lhe este preceito: "Podes comer do fruto de todas as árvores do jardim;
mas não comas do fruto da árvore da ciência do bem e do mal; porque no dia em que dele comeres, morrerás indubitavelmente."
O Senhor Deus disse: "Não é bom que o homem esteja só; vou dar-lhe uma ajuda que lhe seja adequada."
Tendo, pois, o Senhor Deus formado da terra todos os animais dos campos, e todas as aves dos céus, levou-os ao homem, para ver como ele os havia de chamar; e todo o nome que o homem pôs aos animais vivos, esse é o seu verdadeiro nome.
O homem pôs nomes a todos os animais, a todas as aves dos céus e a todos os animais dos campos; mas não se achava para ele uma ajuda que lhe fosse adequada.
Então o Senhor Deus mandou ao homem um profundo sono; e enquanto ele dormia, tomou-lhe uma costela e fechou com carne o seu lugar.
E da costela que tinha tomado do homem, o Senhor Deus fez uma mulher, e levou-a para junto do homem.
"Eis agora aqui, disse o homem, o osso de meus ossos e a carne de minha carne; ela se chamará mulher, porque foi tomada do homem."
Por isso o homem deixa o seu pai e sua mãe para se unir à sua mulher; e já não são mais que uma só carne.
O homem e a mulher estavam nus, e não se envergonhavam.
Gênesis 2:1-25
A serpente era o mais astuto de todos os animais dos campos que o Senhor Deus tinha formado. Ela disse a mulher: É verdade que Deus vos proibiu comer do fruto de toda árvore do jardim?"
A mulher respondeu-lhe: Podemos comer do fruto das árvores do jardim.
Mas do fruto da árvore que está no meio do jardim, Deus disse: Vós não comereis dele, nem o tocareis, para que não morrais."
"Oh, não! - tornou a serpente - vós não morrereis!
Mas Deus bem sabe que, no dia em que dele comerdes, vossos olhos se abrirão, e sereis como deuses, conhecedores do bem e do mal."
A mulher, vendo que o fruto da árvore era bom para comer, de agradável aspecto e mui apropriado para abrir a inteligência, tomou dele, comeu, e o apresentou também ao seu marido, que comeu igualmente.
Então os seus olhos abriram-se; e, vendo que estavam nus, tomaram folhas de figueira, ligaram-nas e fizeram cinturas para si.
E eis que ouviram o barulho {dos passos} do Senhor Deus que passeava no jardim, à hora da brisa da tarde. O homem e sua mulher esconderam-se da face do Senhor Deus, no meio das árvores do jardim.
Mas o Senhor Deus chamou o homem, e disse-lhe: "Onde estás?"
E ele respondeu: "Ouvi o barulho dos vossos passos no jardim; tive medo, porque estou nu; e ocultei-me."
O Senhor Deus disse: "Quem te revelou que estavas nu? Terias tu porventura comido do fruto da árvore que eu te havia proibido de comer?"
O homem respondeu: "A mulher que pusestes ao meu lado apresentou-me deste fruto, e eu comi."
O Senhor Deus disse à mulher: Porque fizeste isso?" "A serpente enganou-me,- respondeu ela - e eu comi."
Então o Senhor Deus disse à serpente: "Porque fizeste isso, serás maldita entre todos os animais e feras dos campos; andarás de rastos sobre o teu ventre e comerás o pó todos os dias de tua vida.
Porei ódio entre ti e a mulher, entre a tua descendência e a dela. Esta te ferirá a cabeça, e tu ferirás o calcanhar."
Disse também à mulher: Multiplicarei os sofrimentos de teu parto; darás à luz com dores, teus desejos te impelirão para o teu marido e tu estarás sob o seu domínio."
E disse em seguida ao homem: "Porque ouviste a voz de tua mulher e comeste do fruto da árvore que eu te havia proibido comer, maldita seja a terra por tua causa. Tirarás dela com trabalhos penosos o teu sustento todos os dias de tua vida.
Ela te produzirá espinhos e abrolhos, e tu comerás a erva da terra.
Comerás o teu pão com o suor do teu rosto, até que voltes à terra de que foste tirado; porque és pó, e pó te hás de tornar."
Adão pôs à sua mulher o nome de Eva, porque ela era a mãe de todos os viventes.
O Senhor Deus fez para Adão e sua mulher umas vestes de peles, e os vestiu.
E o Senhor Deus disse: "Eis que o homem se tornou como um de nós, conhecedor do bem e do mal. Agora, pois, cuidemos que ele não estenda a sua mão e tome também do fruto da árvore da vida, e o coma, e viva eternamente."
O Senhor Deus expulsou-o do jardim do Éden, para que ele cultivasse a terra donde tinha sido tirado.
E expulsou-o; e colocou ao oriente do jardim do Éden querubins armados de uma espada flamejante, para guardar o caminho da árvore da vida.
Gênesis 3:1-24
A serpente era o mais astuto de todos os animais dos campos que o Senhor Deus tinha formado. Ela disse a mulher: É verdade que Deus vos proibiu comer do fruto de toda árvore do jardim?"
A mulher respondeu-lhe: Podemos comer do fruto das árvores do jardim.
Mas do fruto da árvore que está no meio do jardim, Deus disse: Vós não comereis dele, nem o tocareis, para que não morrais."
"Oh, não! - tornou a serpente - vós não morrereis!
Mas Deus bem sabe que, no dia em que dele comerdes, vossos olhos se abrirão, e sereis como deuses, conhecedores do bem e do mal."
A mulher, vendo que o fruto da árvore era bom para comer, de agradável aspecto e mui apropriado para abrir a inteligência, tomou dele, comeu, e o apresentou também ao seu marido, que comeu igualmente.
Então os seus olhos abriram-se; e, vendo que estavam nus, tomaram folhas de figueira, ligaram-nas e fizeram cinturas para si.
E eis que ouviram o barulho {dos passos} do Senhor Deus que passeava no jardim, à hora da brisa da tarde. O homem e sua mulher esconderam-se da face do Senhor Deus, no meio das árvores do jardim.
Mas o Senhor Deus chamou o homem, e disse-lhe: "Onde estás?"
E ele respondeu: "Ouvi o barulho dos vossos passos no jardim; tive medo, porque estou nu; e ocultei-me."
O Senhor Deus disse: "Quem te revelou que estavas nu? Terias tu porventura comido do fruto da árvore que eu te havia proibido de comer?"
O homem respondeu: "A mulher que pusestes ao meu lado apresentou-me deste fruto, e eu comi."
O Senhor Deus disse à mulher: Porque fizeste isso?" "A serpente enganou-me,- respondeu ela - e eu comi."
Então o Senhor Deus disse à serpente: "Porque fizeste isso, serás maldita entre todos os animais e feras dos campos; andarás de rastos sobre o teu ventre e comerás o pó todos os dias de tua vida.
Porei ódio entre ti e a mulher, entre a tua descendência e a dela. Esta te ferirá a cabeça, e tu ferirás o calcanhar."
Disse também à mulher: Multiplicarei os sofrimentos de teu parto; darás à luz com dores, teus desejos te impelirão para o teu marido e tu estarás sob o seu domínio."
E disse em seguida ao homem: "Porque ouviste a voz de tua mulher e comeste do fruto da árvore que eu te havia proibido comer, maldita seja a terra por tua causa. Tirarás dela com trabalhos penosos o teu sustento todos os dias de tua vida.
Ela te produzirá espinhos e abrolhos, e tu comerás a erva da terra.
Comerás o teu pão com o suor do teu rosto, até que voltes à terra de que foste tirado; porque és pó, e pó te hás de tornar."
Adão pôs à sua mulher o nome de Eva, porque ela era a mãe de todos os viventes.
O Senhor Deus fez para Adão e sua mulher umas vestes de peles, e os vestiu.
E o Senhor Deus disse: "Eis que o homem se tornou como um de nós, conhecedor do bem e do mal. Agora, pois, cuidemos que ele não estenda a sua mão e tome também do fruto da árvore da vida, e o coma, e viva eternamente."
O Senhor Deus expulsou-o do jardim do Éden, para que ele cultivasse a terra donde tinha sido tirado.
E expulsou-o; e colocou ao oriente do jardim do Éden querubins armados de uma espada flamejante, para guardar o caminho da árvore da vida.
Gênesis 3:1-24
Adão conheceu Eva, sua mulher, e ela concebeu e deu à luz Caim, e disse: "Possuí um homem com a ajuda do Senhor."
E deu em seguida à luz Abel, irmão de Caim. Abel tornou-se pastor e Caim lavrador.
Passado algum tempo, ofereceu Caim frutos da terra em oblação ao Senhor.
Abel, de seu lado, ofereceu dos primogênitos do seu rebanho e das gorduras dele; e o Senhor olhou com agrado para Abel e para sua oblação,
mas não olhou para Caim, nem para os seus dons. Caim ficou extremamente irritado com isso, e o seu semblante tornou-se abatido.
O Senhor disse-lhe: "Por que estás irado? E por que está abatido o teu semblante?
Se praticares o bem, sem dúvida alguma poderás reabilitar-te. Mas se precederes mal, o pecado estará à tua porta, espreitando-te; mas, tu deverás dominá-lo."
Caim disse então a Abel, seu irmão: "Vamos ao campo." Logo que chegaram ao campo, Caim atirou-se sobre seu irmão e matou-o.
O senhor disse a Caim: "Onde está seu irmão Abel?" - Caim respondeu: "Não sei! Sou porventura eu o guarda do meu irmão?"
O Senhor disse-lhe: "Que fizeste! Eis que a voz do sangue do teu irmão clama por mim desde a terra.
De ora em diante, serás maldito e expulso da terra, que abriu sua boca para beber de tua mão o sangue do teu irmão.
Quando a cultivares, ela te negará os seus frutos. E tu serás peregrino e errante sobre a terra."
Caim disse ao Senhor: "Meu castigo é grande demais para que eu o possa suportar.
Eis que me expulsais agora deste lugar, e eu devo ocultar-me longe de vossa face, tornando-me um peregrino errante sobre a terra. O primeiro que me encontrar, matar-me-á."
E o Senhor respondeu-lhe: "Não! Mas aquele que matar Caim será punido sete vezes." O Senhor pôs em Caim um sinal, para que, se alguém o encontrasse, não o matasse.
Caim retirou-se da presença do Senhor, e foi habitar na região de Nod, ao oriente do Éden.
Caim conheceu sua mulher. Ela concebeu e deu à luz Henoc. E construiu uma cidade, à qual pôs o nome de seu filho Henoc.
Henoc gerou Irad, Irad gerou Maviael; Maviael gerou Matusael, Matusael gerou Lamec.
Lamec tomou duas mulheres, uma chamada Ada e outra Sela.
Ada deu à luz Jabel, que foi pai daqueles que moram em tendas, entre os rebanhos.
O nome de seu irmão era Jubal, que foi o pai de todos aqueles que tocam a cítara e os instrumentos de sopro.
Sela, de seu lado, deu à luz Tubal-Caim, o pai de todos que trabalham o cobre e o ferro. A irmã de Tubal-Caim era Noema.
Lamec disse às suas mulheres: "Ada e Sela, ouvi a minha voz: mulheres de Lamec, escutai as minhas palavras: Por uma ferida matei um homem, e por uma contusão um menino.
Se Caim será vingado sete vezes, Lamec o será setenta e sete vezes."
Adão conheceu outra vez sua mulher, e esta deu à luz um filho, ao qual pôs o nome de Set, dizendo: "Deus deu-me uma posteridade para substituir Abel, que Caim matou."
Set teve também um filho, que chamou Enos. E o nome do Senhor começou a ser invocado a partir de então.
Gênesis 4:1-26
Este é o livro da história da família de Adão. Quando Deus criou o homem, ele o fez à imagem de Deus.
Criou-os homem e mulher, e os abençoou, e deu-lhes o nome de homem no dia em que os criou.
Adão viveu cento e trinta anos: e gerou um filho à sua semelhança, à sua imagem, e deu-lhe o nome de Set.
Depois de haver gerado Set, Adão viveu oitocentos anos e gerou filhos e filhas.
Todo o tempo que Adão viveu foi novecentos e trinta anos. E depois disso morreu.
Set viveu cento e cinco anos, e depois gerou Enos.
E depois do nascimento de Enos, viveu ainda oitocentos e sete anos e gerou filhos e filhas.
A duração total da vida de Set foi de novecentos e doze anos; e depois disso morreu.
Enos viveu noventa anos, e depois gerou Cainan.
E depois do nascimento de Cainan, Enos viveu ainda oitocentos e quinze anos, e gerou filhos e filhas.
E o tempo da vida de Enos foi de novecentos e cinco anos; e morreu.
Cainan viveu setenta anos, e depois gerou Malaleel.
Após o nascimento de Malaleel, Cainan viveu ainda oitocentos e quarenta anos, e gerou filhos e filhas.
Todo o tempo da vida de Cainan foi de novecentos e dez anos; e morreu.
Malaleel viveu sessenta e cinco anos, e depois gerou Jared.
Após o nascimento de Jared, Malaleel viveu ainda oitocentos e trinta anos, e gerou filhos e filhas.
Todo o tempo da vida de Malaleel foi de oitocentos e noventa e cinco anos; e morreu.
Jared viveu cento e sessenta e dois anos, e gerou Henoc.
Após o nascimento de Henoc, Jared viveu ainda oitocentos anos, e gerou filhos e filhas.
Todo o tempo da vida de Jared foi de novecentos e sessenta e dois anos; e morreu.
Henoc viveu sessenta e cinco anos e gerou Matusalém.
Após o nascimento de Matusalém, Henoc andou com Deus durante trezentos anos, e gerou filhos e filhas.
A duração total da vida de Henoc foi de trezentos e sessenta e cinco anos.
Henoc andou com Deus e desapareceu, porque Deus o levou.
Matusalém viveu cento e oitenta e sete anos, e gerou Lamec.
Após o nascimento de Lamec, Matusalém viveu ainda setecentos e oitenta e dois anos, e gerou filhos e filhas.
A duração total da vida de Matusalém foi de novecentos e sessenta e nove anos; e morreu.
Lamec viveu cento e oitenta e dois anos, e gerou um filho,
ao qual pôs o nome de Noé, dizendo: "Este nos trará, em nossas fadigas e no duro labor de nossas mãos, um alívio tirado da terra mesma que o Senhor amaldiçoou."
Após o nascimento de Noé, Lamec viveu ainda quinhentos e noventa e cinco anos, e gerou filhos e filhas.
A duração total da vida de Lamec foi de setecentos e setenta e sete anos; e morreu.
Com a idade de quinhentos anos, Noé gerou Sem, Cam e Jafet.
Gênesis 5:1-32
Quando os homens começaram a multiplicar-se sobre a terra, e lhes nasceram filhas,
os filhos de Deus viram que as filhas dos homens eram belas, e escolheram esposas entre elas.
O senhor então disse: "Meu espírito não permanecerá para sempre no homem, porque todo ele é carne, e a duração de sua vida será de cento e vinte anos."
Naquele tempo viviam gigantes na terra, como também daí por diante, quando os filhos de Deus se uniam às filhas dos homens e elas geravam filhos. Estes são os heróis, tão afamados nos tempos antigos.
O Senhor viu que a maldade dos homens era grande na terra, e que todos os pensamentos de seu coração estavam continuamente voltados para o mal.
O Senhor arrependeu-se de ter criado o homem na terra, e teve o coração ferido de íntima dor.
E disse: "Exterminarei da superfície da terra o homem que criei, e com ele os animais, os répteis e as aves dos céus, porque eu me arrependo de os haver criado."
Noé, entretanto, encontrou graça aos olhos do Senhor.
Esta é a história de Noé. Noé era um homem justo e perfeito no meio dos homens de sua geração. Ele andava com Deus.
Noé teve três filhos: Sem, Cam e Jafet.
A terra corrompia-se diante de Deus e enchia-se de violência.
Deus olhou para a terra e viu que ela estava corrompida: toda a criatura seguia na terra o caminho da corrupção.
Então Deus disse a Noé: "Eis chegado o fim de toda a criatura diante de mim, pois eles encheram a terra de violência. Vou exterminá-los juntamente com a terra.
Faze para ti uma arca de madeira resinosa: dividi-la-ás em compartimentos e a untarás de betume por dentro e por fora.
E eis como a farás: seu comprimento será de trezentos côvados, sua largura de cinqüenta côvados, e sua altura de trinta.
Farás no cimo da arca uma abertura com a dimensão dum côvado. Porás a porta da arca a um lado, e construirás três andares de compartimentos.
Eis que vou fazer cair o dilúvio sobre a terra, uma inundação que exterminará todo ser que tenha sopro de vida debaixo do céu. Tudo que está sobre a terra morrerá.
Mas farei aliança contigo: entrarás na arca com teus filhos, tua mulher e as mulheres de teus filhos.
De tudo o que vive, de cada espécie de animais, farás entrar na arca dois, macho e fêmea, para que vivam contigo.
De cada espécie de aves, e de cada espécie de quadrúpedes, e de cada espécie de animais que se arrastam sobre a terra, entrará um casal contigo, para que lhes possas conservar a vida.
Tomarás também contigo de todas as coisas para comer, e armazená-las-ás para que te sirvam de alimento, a ti e aos animais."
Noé obedeceu, e fez tudo o que o Senhor lhe tinha ordenado.
Gênesis 6:1-22
O Senhor disse a Noé: "Entra na arca, tu e toda a tua casa, porque te reconheci justo diante dos meus olhos, entre os de tua geração.
De todos os animais puros tomarás sete casais, machos e fêmeas, e de todos animais impuros tomarás um casal, macho e fêmea;
das aves do céu igualmente sete casais, machos e fêmeas, para que se conserve viva a raça sobre a face de toda a terra.
dentro de sete dias farei chover sobre a terra durante quarenta dias e quarenta noites, e exterminarei da superfície da terra todos os seres que eu fiz."
Noé fez tudo o que o Senhor lhe tinha ordenado.
Noé tinha seiscentos anos quando veio o dilúvio sobre a terra.
Para escapar à inundação, entrou na arca com seus filhos, sua mulher e as mulheres de seus filhos.
Dos animais puros e impuros, das aves e de tudo que se arrasta sobre a terra,
entraram na arca de Noé, um casal macho e fêmea, como o Senhor tinha ordenado a Noé.
Passados os sete dias, as águas do dilúvio precipitaram-se sobre a terra.
No ano seiscentos da vida de Noé, no segundo mês, no décimo sétimo dia do mês, romperam-se naquele dia todas as fontes do grande abismo, e abriram-se as barreiras dos céus.
A chuva caiu sobre a terra durante quarenta dias e quarenta noites.
Naquele mesmo dia entrou Noé na arca, com Sem, Cam e Jafet, seus filhos, sua mulher e as três mulheres de seus filho;
e com eles os animais selvagens de toda espécie, os animais domésticos de toda espécie, os répteis de toda espécie que se arrastavam sobre a terra, e tudo o que voa, de toda espécie, todas as aves e tudo o que tem asas.
De cada espécie que tem um sopro de vida um casal entrou na arca de Noé.
Eles chegavam, macho e fêmea, de cada espécie. Como Deus tinha ordenado a Noé. E o Senhor fechou a porta atrás dele.
O dilúvio caiu sobre a terra durante quarenta dias. As águas incharam e levantaram a arca, que foi elevada acima da terra.
As águas inundaram tudo com violência, e cobriram toda a terra, e a arca flutuava na superfície das águas.
As águas engrossaram prodigiosamente sobre a terra, e cobriram todos os altos montes que existem debaixo dos céus;
e elevaram-se quinze côvados acima dos montes que cobriam.
Todas as criaturas que se moviam na terra foram exterminadas: aves, animais domésticos, feras selvagens e tudo o que se arrasta na terra, e todos os homens.
Tudo o que respira e tem um sopro de vida sobre a terra pereceu.
Assim foram exterminados todos os seres que se encontravam sobre a face da terra, desde os homens até os quadrúpedes, tanto os répteis como as aves dos céus, tudo foi exterminado da terra. Só Noé ficou e o que se encontrava com ele na arca.
As águas cobriram a terra pelo espaço de cento e cinqüenta dias.
Gênesis 7:1-24
Ora, Deus lembrou-se de Noé, e de todos os animais selvagens e de todos os animais domésticos que estavam com ele na arca. Fez soprar um vento sobre a terra, e as águas baixaram.
As fontes do abismo fecharam-se, assim como as barreiras dos céus, e foram retidas as chuvas.
As águas foram-se retirando progressivamente da terra; e começaram a baixar depois de cento e cinqüenta dias.
No sétimo mês, no décimo sétimo dia do mês, a arca parou sobre as montanhas do Ararat.
Entretanto, as águas iam diminuindo pouco a pouco até o décimo mês, e no décimo mês, no primeiro dia do mês, apareceram os cumes das montanhas.
No fim de quarenta dias, abriu Noé a janela que tinha feito na arca
e deixou sair um corvo, o qual saindo, voava de um lado para outro, até que aparecesse a terra seca.
Soltou também uma pomba, para ver se as águas teriam já diminuído na face da terra.
A pomba, porém, não encontrando onde pousar, voltou para junto dele na arca, porque havia ainda água na face da terra. Noé estendeu a mão, e tendo-a tomado, recolheu-a na arca.
Esperou mais sete dias, e soltou de novo a pomba fora da arca.
E eis que pela tarde ela voltou, trazendo no bico uma folha verde de oliveira. Assim Noé compreendeu que as águas tinham baixado sobre a terra.
Esperou ainda sete dias, e soltou a pomba que desta vez não mais voltou.
No ano seiscentos e um, no primeiro mês, no primeiro dia do mês, as águas se tinham secado sobre a terra. Noé descobriu o teto da arca, olhou e viu que a superfície do solo estava seca.
No segundo mês, no vigésimo sétimo dia do mês, a terra estava seca.
Então falou Deus a Noé:
"Sai da arca, com tua mulher, teus filhos e as mulheres de teus filhos.
Faze sair igualmente contigo todos os animais que estão contigo de todas as espécies: aves, quadrúpedes, répteis diversos que se arrastam sobre a terra; faze-os sair contigo para que se espalhem sobre a terra e para que cresçam e se multipliquem sobre a terra."
Noé saiu com seus filhos, sua mulher e as mulheres de seus filhos.
Todos os animais selvagens, todos os répteis, todas as aves, todos os seres que se movem, sobre a terra saíram da arca segundo suas espécies.
E Noé levantou um altar ao Senhor: tomou de todos os animais puros e de todas as aves puras, e ofereceu-os em holocausto ao Senhor sobre o altar.
O Senhor respirou um agradável odor, e disse em seu coração: "Doravante, não mais amaldiçoarei a terra por causa do homem porque os pensamentos do seu coração são maus desde a sua juventude, e não ferirei mais todos os seres vivos, como o fiz.
Enquanto durar a terra, não mais cessarão a sementeira e a colheita, o frio e o calor, o verão e o inverno, o dia e a noite."
Gênesis 8:1-22
Deus abençoou Noé e seus filhos: "Sede fecundos, disse-lhes ele, multiplicai-vos e enchei a terra.
Vós sereis objeto de temor e de espanto para todo animal da terra, toda ave do céu, tudo o que se arrasta sobre o solo e todos os peixes do mar: eles vos são entregues em mão.
Tudo o que se move e vive vos servirá de alimento; eu vos dou tudo isto, como vos dei a erva verde.
Somente não comereis carne com a sua alma, com seu sangue.
Eu pedirei conta de vosso sangue, por causa de vossas almas, a todo animal; e ao homem {que matar} o seu irmão, pedirei conta da alma do homem.
Todo aquele que derramar o sangue humano terá seu próprio sangue derramado pelo homem, porque Deus fez o homem à sua imagem.
Sede, pois, fecundos e multiplicai-vos, e espalhai-vos sobre a terra abundantemente."
Disse também Deus a Noé e as seus filhos:
"Vou fazer uma aliança convosco e com vossa posteridade,
assim como com todos os seres vivos que estão convosco: as aves, os animais domésticos, todos os animais selvagens que estão convosco, desde todos aqueles que saíram da arca até todo animal da terra.
Faço esta aliança convosco: nenhuma criatura será destruída pelas águas do dilúvio, e não haverá mais dilúvio para devastar a terra."
Deus disse: "Eis o sinal da aliança que eu faço convosco e com todos os seres vivos que vos cercam, por todas as gerações futuras:
Ponho o meu arco nas nuvens, para que ele seja o sinal da aliança entre mim e a terra.
Quando eu tiver coberto o céu de nuvens por cima da terra, o meu arco aparecerá nas nuvens,
e me lembrarei da aliança que fiz convosco e com todo ser vivo de toda espécie, e as águas não causarão mais dilúvio que extermine toda criatura.
Quando eu vir o arco nas nuvens, eu me lembrarei da aliança eterna estabelecida entre Deus e todos os seres vivos de toda espécie que estão sobre a terra."
Dirigindo-se a Noé, Deus acrescentou: "Este é o sinal da aliança que faço entre mim e todas as criaturas que estão na terra."
Os filhos de Noé que saíram da arca eram Sem, Cam e Jafet. Cam era o pai de Canaã.
Estes eram os três filhos de Noé. É por eles que foi povoada toda a terra.
Noé, que era agricultor, plantou uma vinha.
Tendo bebido vinho, embriagou-se, e apareceu nu no meio de sua tenda.
Cam, o pai de Canaã, vendo a nudez de seu pai, saiu e foi contá-lo aos seus irmãos.
Mas, Sem e Jafet, tomando uma capa, puseram-na sobre os seus ombros e foram cobrir a nudez de seu pai, andando de costas; e não viram a nudez de seu pai, pois que tinham os seus rostos voltados.
Quando Noé despertou de sua embriaguez, soube o que lhe tinha feito o seu filho mais novo.
"Maldito seja Canaã, disse ele; que ele seja o último dos escravos de seus irmãos!"
E acrescentou : "Bendito seja o Senhor Deus de Sem, e Canaã seja seu escravo!
Que Deus dilate a Jafet; e este habite nas tendas de Sem, e Canaã seja seu escravo!"
Noé viveu ainda depois do dilúvio trezentos e cinqüenta anos.
A duração total da vida de Noé foi de novecentos e cinqüenta anos; e morreu.
Gênesis 9:1-29
Eis a posteridade dos filhos de Noé: Sem, Cam e Jefet. Estes tiveram filhos depois do dilúvio.
Filhos de Jafet: Gomer, Magog, Madai, Javã, Tubal, Mosoc e Tiras.
Filhos de Gomer: Ascenez, Rifat e Togorma.
Filhos de Javã: Elisa e Társis, Cetim e Dodanim.
Destes saíram os povos dispersos nas ilhas das nações, em seus diversos países, cada um segundo sua língua e segundo suas famílias e suas nações.
Filhos de Cam: Cus, Mesraim, Fut e Canaã.
Filhos de Cus: Saba, Hevila, Sabata, Regma e Sabataca. Filhos de Regma: Saba e Dadã.
Cus gerou Nemrod, que foi o primeiro homem poderoso da terra.
Ele foi um grande caçador diante do Senhor. Donde a expressão: "Como Nemrod, grande caçador diante do Eterno."
Ele estabeleceu o seu reino primeiramente em Babilônia, Arac, Acad e em Calane, na terra de Senaar.
Daí foi para Assur e construiu Nínive, Recobot-Ir, Cale
e Resem, a grande cidade entre Nínive e Cale.
Mesraim gerou os ludim, os anamim, os laabim, os neftuim,
os fetrusim, os casluim e os caftorim, donde saíram os filisteus.
Canaã gerou Sidon, seu primogênito, e Het,
assim como os jebuseus, os amorreus, os gergeseus,
os heveus, os araceus, os sineus,
os aradeus, os samareus e os hamateus. Em seguida, as famílias dos cananeus se dispersaram,
e o território dos cananeus era desde Sidon, na direção de Gerara, até Gaza; e na direção de Sodoma, Gomorra, Adama e Seboim, até Lesa.
Estes são os filhos de Cam segundo suas famílias, suas línguas, em seus diversos países e suas nações.
Nasceram também filhos a Sem, pai de todos os filhos de Heber, e irmão mais velho de Jafet.
Filhos de Sem: Elão, Assur, Arfaxad, Lud e Arão.
Filhos de Arão: Us, Hul, Geter e Mes.
Arfaxad gerou Salé, Salé gerou Heber.
Heber teve dois filhos: um se chamava Faleg, porque no seu tempo a terra foi dividida, e o outro se chamava Jetã.
Jetã gerou Elmodad, Salef, Asarmot, Jaré,
Adurão, Uzal, Decla,
Ebal, Abimael, Saba,
Ofir, Hevila e Jobab. Estes são os filhos de Jetã.
A terra que eles habitavam se estendia desde Mesa, na direção de Sefar, até a montanha do Oriente.
Estes são os filhos de Sem, segundo suas famílias, segundo suas línguas, em seus diversos países e suas nações.
Tais são as famílias dos filhos de Noé, segundo suas gerações e suas nações. É dele que descendem as nações que se espalharam sobre a terra depois do dilúvio.
Gênesis 10:1-32
Toda a terra tinha uma só língua, e servia-se das mesmas palavras.
Alguns homens, partindo para o oriente, encontraram na terra de Senaar uma planície onde se estabeleceram.
E disseram uns aos outros: "Vamos, façamos tijolos e cozamo-los no fogo." Serviram-se de tijolos em vez de pedras, e de betume em lugar de argamassa.
Depois disseram: "Vamos, façamos para nós uma cidade e uma torre cujo cimo atinja os céus. Tornemos assim célebre o nosso nome, para que não sejamos dispersos pela face de toda a terra."
Mas o senhor desceu para ver a cidade e a torre que construíram os filhos dos homens.
"Eis que são um só povo, disse ele, e falam uma só língua: se começam assim, nada futuramente os impedirá de executarem todos os seus empreendimentos.
Vamos: desçamos para lhes confundir a linguagem, de sorte que já não se compreendam um ao outro."
Foi dali que o Senhor os dispersou daquele lugar pela face de toda a terra, e cessaram a construção da cidade.
Por isso deram-lhe o nome de Babel, porque ali o Senhor confundiu a linguagem de todos os habitantes da terra, e dali os dispersou sobre a face de toda a terra.
Eis a descendência de Sem: Sem, com a idade de cem anos, gerou Arfaxad, dois anos depois do dilúvio.
Depois do Nascimento de Arfaxad, Sem viveu ainda quinhentos anos, e gerou filhos e filhas.
Arfaxad, com a idade de trinta e cinco anos, gerou Salé.
Após o nascimento de Salé, Arfaxad viveu ainda quatrocentos anos, e gerou filhos e filhas.
Salé, com a idade de trinta anos, gerou Heber.
Após o nascimento de Heber, Salé viveu ainda quatrocentos anos, e gerou filhos e filhas.
Heber, com a idade de trinta e quatro anos, gerou Faleg.
Após o nascimento de Faleg, Heber viveu ainda quatrocentos anos, e gerou filhos e filhas.
Faleg, com a idade de trinta anos, gerou Reu.
Após o nascimento de Reu, Faleg viveu ainda duzentos e nove anos, e gerou filhos e filhas.
Reu, com a idade de trinta e dois anos, gerou Sarug.
Após o nascimento de Sarug, Reu viveu ainda duzentos e sete anos, e gerou filhos e filhas.
Sarug, com a idade de trinta anos, gerou Nacor.
Após o nascimento de Nacor, Sarug viveu ainda duzentos anos, e gerou filhos e filhas.
Nacor, com a idade de vinte e nove anos, gerou Taré.
Após o nascimento de Taré, Nacor viveu ainda cento e dezenove anos, e gerou filhos e filhas.
Taré, com a idade de setenta anos, gerou Abrão, Nacor e Arão.
Eis a descendência de Taré: Taré gerou Abrão, Nacor e Arão.
Arão gerou Lot. Arão morreu em presença de Taré, seu pai, em Ur da Caldéia, sua terra natal.
Abrão e Nacor casaram-se: a mulher de Abrão chamava-se Sarai, e a de Nacor, Melca, filha de Arão, pai de Melca e de Jesca.
Sarai era estéril, e não tinha filhos.
Taré tomou seu filho Abrão, seu neto Lot, filho de Arão, e Sarai, sua nora, mulher de Abrão, seu filho, e partiu com eles de Ur da Caldéia, indo para a terra de Canaã. Chegados a Harã, estabeleceram-se ali.
Todo o tempo da vida de Taré foi de duzentos e cinco anos; e morreu em Harã.
Gênesis 11:1-32
O Senhor disse a Abrão: "Deixa tua terra, tua família e a casa de teu pai e vai para a terra que eu te mostrar.
Farei de ti uma grande nação; eu te abençoarei e exaltarei o teu nome, e tu serás uma fonte de bênçãos.
Abençoarei aqueles que te abençoarem, e amaldiçoarei aqueles que te amaldiçoarem; todas as famílias da terra serão benditas em ti."
Abrão partiu como o Senhor lhe tinha dito, e Lot foi com ele. Abrão tinha setenta e cinco anos, quando partiu de Harã.
Tomou Sarai, sua mulher, e Lot, filho de seu irmão, assim como todos os bens que possuíam e os escravos que tinham adquirido em Harã, e partiram para a terra de Canaã. Ali chegando,
Abrão atravessou a terra até Siquém, até o carvalho de Moré. Os cananeus estavam então naquela terra.
O Senhor apareceu a Abrão e disse-lhe: "Darei esta terra à tua posteridade." Abrão edificou um altar ao Senhor, que lhe tinha aparecido.
Em seguida, partindo dali, foi para a montanha que está ao oriente de Betel, onde levantou a sua tenda, tendo Betel ao ocidente e Hai ao oriente. Abrão edificou ali um altar ao Senhor, e invocou o seu nome.
Continuou depois sua viagem, de acampamento em acampamento, para Negeb.
Sobreveio, porém, uma fome na região; e sendo grande a miséria, Abrão desceu ao Egito para aí viver algum tempo.
Quando estava para entrar no Egito, disse a Sarai sua mulher: "Escuta, sei que és uma mulher formosa.
Quando os egípcios te virem, dirão: 'É sua mulher', e me matarão, conservando-te a ti em vida.
Dize, pois, que és minha irmã, para que eu seja poupado por causa de ti, e me conservem a vida em atenção a ti."
Chegando Abrão ao Egito, os egípcios notaram que sua mulher era extremamente bela.
Os grandes da corte, vendo-a, elogiaram-na diante do faraó, e a mulher foi introduzida no seu palácio.
por causa dela, Abrão foi bem tratado pelo faraó, e recebeu ovelhas, bois, jumentos, servos e servas, jumentas e camelos.
O Senhor, porém, feriu com grandes pragas o faraó e a sua casa, por causa de Sarai, mulher de Abrão.
O faraó mandou chamá-lo e disse-lhe: "Que me levaste a fazer? Porque não me disseste que era tua mulher?
Por que disseste que ela era tua irmã, levando-me e a tomá-la por esposa? Mas agora eis tua mulher: toma-a e vai-te!"
Então, o faraó deu ordens aos seus para reconduzir Abrão e sua mulher com tudo o que lhe pertencia.
Gênesis 12:1-20
Abrão voltou do Egito para Negeb com sua mulher e tudo o que lhe pertencia. Lot o acompanhava.
Abrão era muito rico em rebanhos, prata e ouro.
Ele foi de acampamento em acampamento de Negeb até Betel, ao lugar onde já uma vez armara sua tenda, entre Betel e Hai,
no lugar onde se encontrava o altar que havia edificado antes. Ali invocou o nome do Senhor.
Lot, que acompanhava Abrão, possuía também ovelhas, bois e tendas,
e a região não lhes bastava para aí se estabelecerem juntos.
Por isso houve uma contenda entre os pastores dos rebanhos de Abrão e os dos rebanhos de Lot. Os cananeus e os ferezeus habitavam então naquela terra.
Abrão disse a Lot: "Rogo-te que não haja discórdia entre mim e ti, nem entre nossos pastores, pois somos irmãos.
Eis aí toda a terra diante de ti; separemo-nos. Se fores para a esquerda, eu irei para a direita; se fores para a direita, eu irei para esquerda."
Lot, levantando os olhos, viu que a toda a planície de Jordão era regada de água {o Senhor não tinha ainda destruído Sodoma e Gomorra} como o jardim do Senhor, como a terra do Egito ao lado de Tsoar.
Lot escolheu toda a planície do Jordão e foi para o oriente. Foi assim que se separam um do outro.
Abrão fixou-se na terra de Canaã, e Lot nas cidades da planície, onde levantou suas tendas até Sodoma.
Ora, os habitantes de Sodoma eram perversos, e grandes pecadores diante do Senhor.
O Senhor disse a Abrão depois que Lot o deixou: "Levanta os olhos, e do lugar onde estás, olha para o norte e para o sul, para o oriente e para o ocidente.
Toda a terra que vês, eu a darei a ti e aos teus descendentes para sempre.
Tornarei tua posteridade tão numerosa como o pó da terra: se alguém puder contar os grãos do pó da terra, então poderá contar a tua posteridade.
Levanta-te, percorre a terra em toda a sua extensão, porque eu te hei de dar."
Abrão levantou as suas tendas e veio fixar-se no vale dos carvalhos de Mambré, que estão em Hebron; e ali edificou um altar ao Senhor.
Gênesis 13:1-18
No tempo de Anrafel, rei de Senaar, de Arioc, rei de Elasar, de Codorlaomor, rei de Elão e de Tadal, rei de Goim,
aconteceu que estes reis fizeram guerra a Bara, rei de Sodoma, a Bersa, rei de Gomorra, a Senaab, rei de Adama, a Semeber, rei de Seboim e ao rei de Bala, isto é, Segor.
Todos estes se juntaram no vale de Sidim, que é o mar Salgado.
Durante doze anos eles tinham servido a Codorlaomor, mas no décimo terceiro ano tinham se revoltado.
No décimo quarto ano, Codorlaomor pôs-se em marcha com os reis que se tinham aliado a ele, e desbarataram os refaim em Astarot-Carnaim, e igualmente os zusim em Ham, os emim na planície de Cariataim
e os horreus, em sua montanha de Seir até El-Farã, cerca do deserto.
Voltando, chegaram à fonte do julgamento, em Cadés, e devastaram a terra dos amalecitas, assim como os amorreus que habitavam em Asason-Tamar.
O rei de Sodoma, o rei de Gomorra, o rei de Adama, o rei de Seboim, o rei de Bala, isto é, Segor, saíram e puseram-se em ordem de batalha no vale de Sidim,
contra Codorlaomor, o rei de Elão, Tadal, rei de Goim, Anrafel, rei de Senaar, e Arioc, rei de Elasar, quatro reis contra cinco.
Ora, havia no vale de Sidim numerosos poços de betume. E os reis de Sodoma e de Gomorra, fugindo, caíram nesses poços, enquanto o resto fugiu para a montanha.
Os vencedores levaram todos os bens de Sodoma e Gomorra, e todos os seus víveres, e partiram.
Levaram também Lot, filho do irmão do Abrão, que morava em Sodoma, com todos os seus bens.
Mas alguém que conseguiu fugir veio dar parte do sucedido a Abrão, o hebreu, que vivia nos carvalhos de Mambré, o amorreu, irmão de Escol e irmão de Aner, aliados de Abrão.
Abrão, tendo ouvido que Lot, seu parente, ficara prisioneiro, escolheu trezentos e dezoito dos seus melhores e mais corajosos servos, nascidos em sua casa, e foi ao alcance dos reis até Dan.
Ali, dividindo a sua tropa para os atacar de noite com seus servos, desbaratou-os e perseguiu-os até Hoba, que se encontra ao norte de Damasco.
Abrão recobrou todos os bens saqueados e reconduziu também Lot, seu parente, com os seus bens, assim como as mulheres e os homens.
Voltando Abrão da derrota de Codorlaomor e seus reis aliados, o rei de Sodoma saiu-lhe ao encontro no vale de Savé, que és o vale do rei.
Melquisedeque, rei de Salém e sacerdote do Deus Altíssimo, mandou trazer pão e vinho,
e abençoou Abrão, dizendo: "Bendito seja Abrão pelo Deus Altíssimo, que criou o céu e terra!
Bendito seja o Deus Altíssimo, que entregou os teus inimigos em tuas mãos!" E Abrão deu-lhe o dízimo de tudo.
O rei de Sodoma disse a Abrão: "Devolve-me os homens e guarda os bens."
"Levanto a minha mão para o Senhor Deus Altíssimo que criou o céu e a terra, respondeu Abrão,
de tudo o que é teu, não tomarei sequer um fio nem um cordão de sandália, para que não digas: Enriqueci Abrão.
Nada para mim, exceto somente o que comeram os meus servos e a parte dos homens que vieram comigo, Aner, Escol e Mambré; estes hão de receber a sua parte."
Gênesis 14:1-24
Depois desses acontecimentos, a palavra do Senhor foi dirigida a Abrão, numa visão, nestes termos: "Nada temas, Abrão! Eu sou o teu protetor; tua recompensa será muito grande."
Abrão respondeu: "Senhor Javé, que me dareis vós? Eu irei sem filhos, e o herdeiro de minha casa é Eliezer de Damasco."
E ajuntou: "Vós não me destes posteridade, e é um escravo nascido em minha casa que será o meu herdeiro."
Então a palavra do Senhor foi-lhe dirigida nestes termos: "Não é ele que será o teu herdeiro, mas aquele que vai sair de tuas entranhas."
E, conduzindo-o fora, disse-lhe: "Levanta os olhos para os céus e conta as estrelas, se és capaz... Pois bem, ajuntou ele, assim será a tua descendência."
Abrão confiou no Senhor, e o Senhor lho imputou para justiça.
E disse-lhe: "Eu sou o Senhor que te fiz sair de Ur da Caldéia para dar-te esta terra."
"O Senhor Javé, como poderei saber se a hei de possuir?"
"Toma uma novilha de três anos, respondeu-lhe o Senhor, uma cabra de três anos, um cordeiro de três anos, uma rola e um pombinho."
Abrão tomou todos esses animais, e dividiu-os pelo meio, colocando suas metades uma defronte da outra; mas não cortou as aves.
Vieram as aves de rapina e atiraram-se sobre os cadáveres, mas Abrão as expulsou.
E eis que, ao pôr-do-sol, veio um profundo sono a Abrão, ao mesmo tempo que o assaltou um grande pavor, uma espessa escuridão.
O Senhor disse-lhe: "Sabe que teus descendentes habitarão como peregrinos uma terra que não é sua, e que nessa terra eles serão escravizados e oprimidos durante quatrocentos anos.
Mas eu julgarei também o povo ao qual estiverem sujeitos, e sairão em seguida dessa terra com grandes riquezas.
Quanto a ti, irás em paz juntar-se aos teus pais, e serás sepultado numa ditosa velhice.
Somente à quarta geração os teus descendentes voltarão para aqui, porque a iniqüidade dos amorreus não chegou ainda ao seu cúmulo."
Quando o sol se pôs, formou-se uma densa escuridão, e eis que um braseiro fumegante e uma tocha ardente passaram pelo meio das carnes divididas.
Naquele dia, o Senhor fez aliança com Abrão: "Eu dou, disse ele, esta terra aos teus descendentes, desde a torrente do Egito até o grande rio Eufrates:
a terra dos cineus, dos ceneseus, dos cadmoneus,
dos heteus, dos ferezeus,
dos amorreus, dos cananeus, dos gergeseus e dos jebuseus."
Gênesis 15:1-21
Sarai, mulher de Abrão, não lhe tinha dado filho; mas, possuindo uma escrava egípcia, chamada Agar,
disse a Abrão: "Eis que o Senhor me fez estéril; rogo-te que tomes a minha escrava, para ver se, ao menos por ela, eu posso ter filhos." Abrão aceitou a proposta de Sarai.
Sarai tomou, pois, sua escrava, Agar, a egípcia, passado dez anos que Abrão habitava a terra de Canaã, e deu-a por mulher a Abrão, seu marido.
Este aproximou-se de Agar e ela concebeu. Agar, vendo que tinha concebido, começou a desprezar a sua senhora.
Então Sarai disse a Abrão: "Caia sobre ti o ultraje que me é feito! Dei-te minha escrava, e ela, desde que concebeu, olha-me com desprezo. O Senhor seja juiz entre mim e ti!"
Abrão respondeu-lhe: "Tua escrava está em teu poder, faze dela o que quiseres." E Sarai maltratou-a de tal forma que ela teve de fugir.
O anjo do Senhor, encontrando-a no deserto junto de uma fonte que está no caminho de Sur,
disse-lhe: "Agar, escrava de Sarai, donde vens? E para onde vais?" "Eu fujo de Sarai, minha senhora", respondeu ela.
"Volta para a tua senhora, tornou o anjo do Senhor, e humilha-te diante dela."
E ajuntou: "Multiplicarei tua posteridade de tal forma, e será tão numerosa, que não se poderá contar."
Disse ainda mais: "Estás grávida, e vais dar à luz um filho: dar-te-ás o nome de Ismael, porque o Senhor te ouviu na tua aflição.
Este menino será como um jumento bravo: sua mão se levantará contra todos e a mão de todos contra ele, e levantará sua tenda defronte de todos os seus irmãos."
Agar deu ao Senhor, que lhe tinha falado, o nome: Vós sois El-roí, "porque, dizia ela, não vi eu aqui mesmo o Deus que me via?"
E por isso deu-se àquele poço o nome de poço Lahai-roí; ele se encontra entre Cadés e Barad.
Agar deu à luz um filho a Abrão, o qual lhe pôs o nome de Ismael.
Abrão tinha a idade de oitenta e seis anos quando Agar lhe deu à luz Ismael.
Gênesis 16:1-16
Abrão tinha noventa e nove anos. O Senhor apareceu-lhe e disse-lhe: "Eu sou o Deus Todo-poderoso. Anda em minha presença e sê íntegro;
quero fazer aliança contigo e multiplicarei ao infinito a tua descendência."
Abrão prostrou-se com o rosto por terra. Deus disse-lhe:
"Este é o pacto que faço contigo: serás o pai de uma multidão de povos.
De agora em diante não te chamarás mais Abrão, e sim Abraão, porque farei de ti o pai de uma multidão de povos.
Tornar-te-ei extremamente fecundo, farei nascer de ti nações e terás reis por descendentes.
Faço aliança contigo e com tua posteridade, uma aliança eterna, de geração em geração, para que eu seja o teu Deus e o Deus de tua posteridade.
Darei a ti e a teus descendentes depois de ti a terra em que moras como peregrino, toda a terra de Canaã, em possessão perpétua, e serei o teu Deus."
Deus disse ainda a Abraão: "Tu, porém, guardarás a minha aliança, tu e tua posteridade nas gerações futuras.
Eis o pacto que faço entre mim e vós, e teus descendentes, e que tereis de guardar: Todo homem, entre vós, será circuncidado.
Cortareis a carne de vosso prepúcio, e isso será o sinal da aliança entre mim e vós.
Todo homem, no oitavo dia do seu nascimento, será circuncidado entre vós nas gerações futuras, tanto o que nascer em casa, como o que comprardes a preço de dinheiro de um estrangeiro qualquer, e que não for de tua raça.
Circuncidar-se-á tanto o homem nascido na casa como aquele que for comprado a preço de dinheiro. Assim será marcado em vossa carne o sinal de minha aliança perpétua.
O varão incircunciso, do qual não se tenha cortado a carne do prepúcio, será exterminado de seu povo por ter violado minha aliança."
Disse Deus a Abraão: "Não chamarás mais tua mulher Sarai, e sim Sara.
Eu a abençoarei, e dela te darei um filho. Eu a abençoarei, e ela será a mãe de nações e dela sairão reis."
Abraão prostrou-se com o rosto por terra, e começou a rir, dizendo consigo mesmo: "Poderia nascer um filho a um homem de cem anos? Seria possível a Sara conceber ainda na idade de noventa anos?"
E disse a Deus: "Oxalá que Ismael viva diante de vossa face!"
Mas Deus respondeu-lhe: "Não, é Sara, tua mulher que dará à luz um filho, ao qual chamarás Isaac. Farei aliança com ele, uma aliança que será perpétua para sua posteridade depois dele.
Eu te ouvirei também acerca de Ismael. Eu o abençoarei, torná-lo-ei fecundo e multiplicarei extraordinariamente sua descendência: ele será o pai de doze príncipes, e farei sair dele uma grande nação.
Mas minha aliança eu a farei com Isaac, que Sara te dará à luz dentro de um ano, nesta mesma época."
Tendo acabado de falar com ele, retirou-se Deus de Abraão.
Abraão tomou então Ismael, seu filho, assim como todos os homens nascidos em sua casa e todos aqueles que tinha comprado a preço de dinheiro, tudo o que havia de varões em sua casa, e circuncidou-se no mesmo dia, como Deus lhe havia ordenado.
Abraão tinha noventa e nove anos quando foi circuncidado.
Ismael, seu filho, tinha treze anos quando o foi igualmente.
Abraão e Ismael, seu filho, foram circuncidados no mesmo dia;
e todos os homens de sua casa, nascidos em sua casa ou comprados a preço de dinheiro a estrangeiros, foram circuncidados ao mesmo tempo.
Gênesis 17:1-27
O Senhor apareceu a Abraão nos carvalhos de Mambré, quando ele estava assentado à entrada de sua tenda, no maior calor do dia.
Abraão levantou os olhos e viu três homens de pé diante dele. Levantou-se no mesmo instante da entrada de sua tenda, veio-lhes ao encontro e prostrou-se por terra.
"Meus senhores, disse ele, se encontrei graça diante de vossos olhos, não passeis avante sem vos deterdes em casa de vosso servo.
Vou buscar um pouco de água para vos lavar os pés.
Descansai um pouco sob esta árvore. Eu vos trarei um pouco de pão, e assim restaurareis as vossas forças para prosseguirdes o vosso caminho; porque é para isso que passastes perto de vosso servo." Eles responderam: "Faze como disseste."
Abraão foi depressa à tenda de Sara: "Depressa, disse ele, amassa três medidas de farinha e coze pães."
Correu em seguida ao rebanho, escolheu um novilho tenro e bom, e deu-o a um criado que o preparou logo.
Tomou manteiga e leite e serviu aos peregrinos juntamente com o novilho preparado, conservando-se de pé junto deles, sob a árvore, enquanto comiam.
E disseram-lhe: "Onde está Sara, tua mulher?" "Ela está na tenda", respondeu ele.
E ele disse-lhe: "Voltarei à tua casa dentro de um ano, a esta época; e Sara, tua mulher, terá um filho." Ora, Sara ouvia por detrás, à entrada da tenda.
{Abraão e Sara eram velhos, de idade avançada, e Sara tinha já passado da idade.}
Ela pôs-se a rir secretamente: "Velha como sou, disse ela consigo mesma, conhecerei ainda o amor? E o meu senhor também é já entrado em anos."
O Senhor disse a Abraão: "Por que se riu Sara, dizendo: 'Será verdade que eu teria um filho, velha como sou?'
Será isso porventura uma coisa muito difícil para o Senhor? Em um ano, a esta época, voltarei à tua casa e Sara terá um filho."
Sara protestou: "Eu não ri", disse ela, pois tinha medo. Mas o Senhor disse-lhe: "Sim, tu riste."
Os homens levantaram-se e partiram na direção de Sodoma, e Abraão os ia acompanhando.
O Senhor disse então: "Acaso poderei ocultar a Abraão o que vou fazer?
Pois que Abraão deve tornar-se uma nação grande e poderosa, e todos os povos da terra serão benditos nele.
Eu o escolhi para que ele ordene aos seus filhos e à sua casa depois dele, que guardem os caminhos do Senhor, praticando a justiça e a retidão, para que o Senhor cumpra em seu favor as promessas que lhe fez."
O Senhor ajuntou: "É imenso o clamor que se eleva de Sodoma e Gomorra, e o seu pecado é muito grande.
Eu vou descer para ver se as suas obras correspondem realmente ao clamor que chega até mim; se assim não for, eu o saberei."
Os homens partiram, pois, na direção de Sodoma, enquanto Abraão ficou em presença do Senhor.
Abraão aproximou-se e disse: "Fareis o justo perecer com o ímpio?
Talvez haja cinqüenta justos na cidade: fá-los-eis perecer? Não perdoaríeis antes a cidade, em atenção aos cinqüenta justos que nela se poderiam encontrar?
Não, vós não poderíeis agir assim, matando o justo com o ímpio, e tratando o justo como ímpio! Longe de vós tal pensamento! Não exerceria o juiz de toda a terra a justiça?"
O Senhor disse: "Se eu encontrar em Sodoma cinqüenta justos, perdoarei a toda a cidade em atenção a eles."
Abraão continuou: "Não leveis a mal, se ainda ouso falar ao meu Senhor, embora seja eu pó e cinza.
Se porventura faltarem cinco aos cinqüenta justos, fareis perecer toda a cidade por causa desses cincos?" "Não a destruirei, respondeu o Senhor, se nela eu encontrar quarenta e cinco justos."
Abraão insistiu ainda e disse: "Talvez só haja aí quarenta." "Não destruirei a cidade por causa desses quarenta."
Abraão disse de novo: "Rogo-vos, Senhor, que não vos irriteis se eu insisto ainda! Talvez só se encontrem trinta!" "Se eu encontrar trinta, disse o Senhor, não o farei."
Abraão continuou: "Desculpai, se ouso ainda falar ao Senhor: pode ser que só se encontre vinte." "Em atenção aos vinte, não a destruirei."
Abraão replicou: "Que o Senhor não se irrite se falo ainda uma última vez! Que será, se lá forem achados dez?" E Deus respondeu: "Não a destruirei por causa desses dez."
E o Senhor retirou-se, depois de ter falado com Abraão, e este voltou para sua casa.
Gênesis 18:1-33
Pela tarde chegaram os dois anjos a Sodoma. Lot, que estava assentado à porta da cidade, ao vê-los, levantou-se e foi-lhes ao encontro e prostrou-se com o rosto por terra.
"Meus Senhores, disse-lhes ele, vinde, peço-vos, para a casa de vosso servo, e passai nela a noite; lavareis os pés, e amanhã cedo continuareis vosso caminho." "Não, responderam eles, passaremos a noite na praça."
Mas Lot insistiu tanto com eles que acederam e entraram em sua casa. Lot preparou-lhes um banquete, mandou cozer pães sem fermento e eles comeram.
Mas, antes que se tivessem deitado, eis que os homens da cidade, os homens de Sodoma, se agruparam em torno da casa, desde os jovens até os velhos, toda a população.
E chamaram Lot: "Onde estão, disseram-lhe, os homens que entraram esta noite em tua casa? Conduze-os a nós para que os conheçamos."
Saiu Lot a ter com eles no limiar da casa, fechou a porta atrás de si
e disse-lhes: "Suplico-vos, meus irmãos, não cometais este crime.
Ouvi: tenho duas filhas que são ainda virgens, eu vo-las trarei, e fazei delas o que quiserdes. Mas não façais nada a estes homens, porque se acolheram à sombra do meu teto."
Eles responderam: "Retira-te daí! - e acrescentaram: Eis um indivíduo que não passa de um estrangeiro no meio de nós e se arvora em juiz! Pois bem, verás como te havemos de tratar pior do que a eles." E, empurrando Lot com violência, avançaram para quebrar a porta.
Mas os dois {viajantes} estenderam a mão e, tomando Lot para dentro de casa, fecharam de novo a porta.
E feriram de cegueira os homens que estavam fora, jovens e velhos, que se esforçavam em vão por reencontrar a porta.
Os dois homens disseram a Lot: "Tens ainda aqui alguns dos teus? Genros, ou filhos, ou filhas, todos os que são teus parentes na cidade, faze-os sair deste lugar,
porque vamos destruir este lugar, visto que o clamor que se eleva dos seus habitantes é enorme diante do Senhor, o qual nos enviou para exterminá-los."
Saiu Lot, pois, para falar a seus genros, que tinham desposado suas filhas: "Levantai-vos, disse-lhes, saí daqui, porque o Senhor vai destruir a cidade." Mas seus genros julgaram que ele gracejava.
Ao amanhecer, os anjos instavam com Lot, dizendo: "Levanta-te, toma tua mulher e tuas duas filhas que estão em tua casa, para que não pereças também no castigo da cidade."
E, como ele demorasse, aqueles homens tomaram pela mão a ele, a sua mulher e as suas duas filhas, porque o Senhor queria salvá-los, e o levaram para fora da cidade.
Quando já estavam fora, um dos anjos disse-lhe: "Salva-te, se queres conservar tua vida. Não olhes para trás, e não te detenhas em parte alguma da planície; mas foge para a montanha senão perecerás."
Lot disse-lhes: "Oh, não, Senhor!
Já que vosso servo encontrou graça diante de vós, e usastes comigo de grande bondade, conservando-me a vida, vede, eu não me posso salvar na montanha, porque o flagelo me atingiria antes, e eu morreria.
Eis uma cidade bem perto onde posso abrigar-me. É uma cidade pequena e eu poderei refugiar-me nela. Permiti que o faça - ela é pequena - e terei a vida salva."
Ele disse-lhe: "Concedo-te ainda esta graça: não destruirei a cidade a favor da qual me pedes.
Apressa-te e refugia-te lá porque nada posso fazer antes que lá tenhas chegado." Por isso, puseram àquela cidade o nome de Segor.
O sol levantava-se sobre a terra quando Lot entrou em Segor.
O Senhor fez então cair sobre Sodoma e Gomorra uma chuva de enxofre e de fogo, vinda do Senhor, do céu.
E destruiu essas cidades e toda a planície, assim como todos os habitantes das cidades e a vegetação do solo.
A mulher de Lot, tendo olhado para trás, transformou-se numa coluna de sal.
Abraão levantou-se muito cedo e foi ao lugar onde tinha estado antes com o Senhor.
Voltando os olhos para o lado de Sodoma e Gomorra e sobre toda a extensão da planície, viu subir da terra um fumo espesso como a fumaça de uma grande fornalha.
Quando Deus destruiu as cidades da planície, lembrou-se de Abraão e livrou Lot do flagelo com que destruiu as cidades onde ele habitava.
Lot partiu de Segor e veio estabelecer-se na montanha com suas duas filhas, pois temia ficar em Segor. E habitava numa caverna com suas duas filhas.
A mais velha disse à mais nova: "Nosso pai está velho, e não há homem algum na região com quem nos possamos unir, segundo o costume universal.
Vem, embriaguemos nosso pai e durmamos com ele, para que possamos nos assegurar uma posteridade."
Elas fizeram, pois, o seu pai beber vinho naquela noite. Então a mais velha entrou e dormiu com ele; ele, porém, nada notou, nem quando ela se aproximou dele, nem quando se levantou.
No dia seguinte, disse ela à sua irmã mais nova: "Dormi ontem com meu pai, façamo-lo beber vinho ainda uma vez, esta noite, e dormirás com ele para nos assegurarmos uma posteridade."
Também naquela noite embriagaram seu pai, e a mais nova dormiu com ele, sem que ele o percebesse, nem quando ela se aproximou, nem quando se levantou.
Assim, as duas filhas de Lot conceberam de seu pai.
A mais velha deu à luz um filho, ao qual pôs o nome de Moab: este é o pai dos moabitas, que vivem ainda hoje.
A mais nova teve também um filho, ao qual chamou Ben-Ami: este é o pai dos amonitas, que vivem ainda hoje.
Gênesis 19:1-38
Abraão partiu dali para região do Negeb. Estabeleceu-se entre Cadés e Sur, e viveu algum tempo em Gerara.
Ele dizia de Sara, sua mulher, que ela era sua irmã. Abimelec, rei de Gerara, arrebatou-lha.
Mas Deus apareceu em sonhos a Abimelec e disse-lhe: Vais morrer, por causa da mulher que roubaste, porque é casada.
Abimelec, que não a tinha tocado {ainda}, disse: Senhor, fareis perecer mesmo inocentes?
Não me disse ele que ela era sua irmã? E ela mesma me disse: É meu irmão. É na simplicidade de meu coração e com as mãos puras que fiz isso.
Deus disse-lhe em sonhos: Sei que é na simplicidade do teu coração que agiste assim; por isso, preservei-te de pecar contra mim, e não deixei que a tocasses.
Devolve agora a mulher deste homem, que é profeta, e ele rogará por ti para que conserves a vida. Mas, se não a devolveres, sabes que morrerás seguramente, tu e todos os teus.
Ao romper da manhã, Abimelec convocou todos os seus servos e referiu-lhes essas coisas. Todos ficaram muito atemorizados.
Depois, Abimelec chamou Abraão e disse-lhe: Que nos fizeste? Em que te ofendi para que nos expusesses, a mim e ao meu reino, ao castigo de um tão grande pecado. Fizeste-me o que não devias fazer.
E ajuntou: Que tiveste em vista agindo assim?
Abraão respondeu: Eu pensava comigo que não havia certamente nenhum temor a Deus nesta terra, e que me matariam por causa de minha mulher.
Aliás, ela é realmente minha irmã, filha de meu pai, mas não de minha mãe; ela tornou-se minha mulher.
Quando Deus me tirou da casa de meu pai, eu disse-lhe: Faze-me esta graça: onde quer que formos, dirás de mim que sou teu irmão.
Tomou então Abimelec ovelhas, bois, servos e servas, e deu-os a Abraão, ao mesmo tempo que lhe devolvia Sara, sua mulher.
E disse-lhe: Minha terra está à tua disposição: fixa-te onde quiseres.
Disse também a Sara: Dou a teu irmão mil moedas de prata: isto te será um véu sobre os olhos para todos aqueles que estão contigo; eis-te justificada.
Abraão intercedeu junto de Deus, que curou Abimelec, sua mulher e suas servas, e deram novamente à luz.
Porque o Senhor tinha ferido de esterilidade todas as mulheres da casa de Abimelec, por causa de Sara, mulher de Abraão.
Gênesis 20:1-18
O Senhor visitou Sara, como ele tinha dito, e cumpriu em seu favor o que havia prometido.
Sara concebeu e, apesar de sua velhice, deu à luz um filho a Abraão, no tempo fixado por Deus.
Abraão pôs o nome de Isaac ao filho que lhe nascera de Sara.
E, passados oito dias do seu nascimento, circuncidou-o, como Deus lhe tinha ordenado.
Abraão tinha cem anos, quando nasceu o seu filho Isaac.
Sara disse: "Deus deu-me algo de que rir; e todos aqueles que o souberem se rirão de mim."
E ajuntou: "Quem teria previsto que Sara amamentaria filhos a Abraão? Porque eu lhe dei um filho em sua velhice."
O menino cresceu e foi desmamado. No dia em que foi desmamado, Abraão fez uma grande festa.
Sara viu que o filho nascido a Abraão de Agar, a egípcia, escarnecia de seu filho Isaac,
e disse a Abraão: "Expulsa esta escrava com o seu filho, porque o filho desta escrava não será herdeiro com meu filho Isaac."
Isso desagradou muitíssimo a Abraão, por causa de seu filho Ismael.
Mas Deus disse-lhe: "Não te preocupes com o menino e com a tua escrava. Faze tudo o que Sara te pedir, pois é de Isaac que nascerá a posteridade que terá o teu nome.
Mas do filho da escrava também farei um grande povo, por ser de tua raça."
No dia seguinte, pela manhã, Abraão tomou pão e um odre de água, e deu-os a Agar, colocando-os às suas costas, e despediu-a com seu filho. Ela partiu, errando pelo deserto de Bersabéia.
Acabada a água do odre, deixou o menino sob um arbusto,
e foi assentar-se em frente, à distância de um tiro de flecha, "porque, dizia ela, não quero ver morrer o menino". Ela assentou-se, pois, em frente e pôs-se a chorar.
Deus ouviu a voz do menino, e o anjo de Deus chamou Agar, do céu, dizendo-lhe: "Que tens, Agar? Nada temas, porque Deus ouviu a voz do menino do lugar onde está.
Levanta-te, toma o menino e tem-no pela mão, porque farei dele uma grande nação."
Deus abriu-lhe os olhos, e ela viu um poço, onde foi encher o odre, e deu de beber ao menino.
Deus esteve com este menino. Ele cresceu, habitou no deserto e tornou-se um hábil flecheiro.
E habitou no deserto de Farã, e sua mãe tomou para ele uma mulher egípcia.
Por aquele tempo, Abimelec, acompanhado de Ficol, general do seu exército, disse a Abraão: "Deus está contigo em tudo o que fazes.
Jura-me, pois, pelo nome de Deus, que não me enganarás, nem a mim, nem a meus filhos, nem aos meus descendentes, mas que usarás para comigo e com a terra onde habitas, da mesma benevolência que eu te tenho testemunhado."
"Eu juro", respondeu Abraão.
Mas Abraão queixou-se a Abimelec por causa de um poço que os seus homens lhe tinham tirado à força.
"Ignoro quem tenha feito isto, respondeu Abimelec; tu mesmo nunca me disseste nada a respeito, e só hoje estou ouvindo falar disso."
Abraão tomou então ovelhas e bois e deu-os a Abimelec, e fizeram aliança entre si.
Abraão pôs à parte sete jovens ovelhas do rebanho.
"Que significam, disse-lhe o rei, estas sete ovelhinhas que puseste à parte?
"Aceitarás de minhas mãos estas sete ovelhinhas, respondeu Abraão, como testemunho de que fui eu que cavei este poço".
Por isso deu-se àquele lugar o nome de Bersabéia; porque ambos ali tinham jurado.
Foi assim que fizeram aliança em Bersabéia. Depois disso, voltou Abimelec para a terra dos filisteus com Ficol, general do seu exército.
Abraão plantou um tamariz em Bersabéia e invocou ali o nome do Senhor, Deus da eternidade.
Abraão habitou muito tempo na terra dos filisteus.
Gênesis 21:1-34
Depois disso, Deus provou Abraão, e disse-lhe: "Abraão!" "Eis-me aqui", respondeu ele.
Deus disse: "Toma teu filho, teu único filho a quem tanto amas, Isaac; e vai à terra de Moriá, onde tu o oferecerás em holocausto sobre um dos montes que eu te indicar."
No dia seguinte, pela manhã, Abraão selou o seu jumento. Tomou consigo dois servos e Isaac, seu filho, e, tendo cortado a lenha para o holocausto, partiu para o lugar que Deus lhe tinha indicado.
Ao terceiro dia, levantando os olhos, viu o lugar de longe.
"Ficai aqui com o jumento, disse ele aos seus servos; eu e o menino vamos até lá mais adiante para adorar, e depois voltaremos a vós."
Abraão tomou a lenha do holocausto e a pôs aos ombros de seu filho Isaac, levando ele mesmo nas mãos o fogo e a faca. E, enquanto os dois iam caminhando juntos,
Isaac disse ao seu pai: "Meu pai!" "Que há, meu filho?" Isaac continuou: "Temos aqui o fogo e a lenha, mas onde está a ovelha para o holocausto?"
"Deus, respondeu-lhe Abraão, providenciará ele mesmo uma ovelha para o holocausto, meu filho." E ambos, juntos, continuaram o seu caminho.
Quando chegaram ao lugar indicado por Deus, Abraão edificou um altar; colocou nele a lenha, e amarrou Isaac, seu filho, e o pôs sobre o altar em cima da lenha.
Depois, estendendo a mão, tomou a faca para imolar o seu filho.
O anjo do Senhor, porém, gritou-lhe do céu: "Abraão! Abraão!" "Eis-me aqui!"
"Não estendas a tua mão contra o menino, e não lhe faças nada. Agora eu sei que temes a Deus, pois não me recusaste teu próprio filho, teu filho único."
Abraão, levantando os olhos, viu atrás dele um cordeiro preso pelos chifres entre os espinhos; e, tomando-o, ofereceu-o em holocausto em lugar de seu filho.
Abraão chamou a este lugar Javé-yiré, de onde se diz até o dia de hoje: "Sobre o monte de Javé-Yiré."
Pela segunda vez chamou o anjo do Senhor a Abraão, do céu,
e disse-lhe: "Juro por mim mesmo, diz o Senhor: pois que fizeste isto, e não me recusaste teu filho, teu filho único, eu te abençoarei.
Multiplicarei a tua posteridade como as estrelas do céu, e como a areia na praia do mar. Ela possuirá a porta dos teus inimigos,
e todas as nações da terra desejarão ser benditas como ela, porque obedeceste à minha voz."
Abraão voltou então para os seus servos, e foram juntos para Bersabéia, onde fixou sua residência.
Depois desses acontecimentos, vieram dizer a Abraão: "Melca deu também filhos a Nacor, teu irmão:
Hus, o primogênito, Buz, seu irmão, Camuel, pai de Arão,
Cased, Azau, Feldas, Jedlaf e Batuel."
{Batuel foi o pai de Rebeca.} Estes são os oito filhos que Melca deu a Nacor, irmão de Abraão.
Sua concubina, chamada Reuma, teve também filhos: Tabée, Gaam, Taas e Maaca.
Gênesis 22:1-24
Sara viveu cento e vinte e sete anos: tal foi a duração de sua vida.
Ela morreu em Quiriat-Arbé, hoje Hebron, na terra de Canaã. Abraão veio para a prantear e chorar.
Abraão, tendo-se retirado de junto da defunta, falou aos filhos de Het, dizendo:
"Sou no meio de vós um simples hóspede e estrangeiro; concedei-me, não obstante, a propriedade de uma sepultura na vossa terra, para que eu possa sepultar minha defunta mulher."
Os filhos de Het responderam a Abraão:
"Ouve-nos, meu Senhor: Tu és um príncipe de Deus no meio de nós. Sepulta tua defunta no mais belo de nossos sepulcros. Ninguém de nós te recusará o seu túmulo para aí sepultar tua defunta."
Então Abraão levantou-se e, prostrando-se diante do povo daquela terra, os filhos de Het,
disse-lhes: "Se me permitis trazer minha defunta e enterrá-la, ouvi-me: Intercedei por mim junto de Efrom, filho de Seor,
para que ele me ceda a caverna de Macpela que lhe pertence, e que se encontra na extremidade de sua terra. Que ele ma ceda em vossa presença, por seu justo valor, a fim de que eu me torne o proprietário dessa sepultura."
Ora, Efrom achava-se assentado no meio dos filhos de Het. Efrom, o hiteu, respondeu a Abraão em presença dos filhos de Het e de todos os que entravam pela porta da cidade:
"De forma alguma, meu Senhor, será assim, mas ouve-me: dou-te a terra, juntamente com a caverna que nela se encontra; e dou-te essa terra em presença dos filhos do meu povo: enterra tua defunta."
Abraão prostrou-se diante do povo daquela terra
e, dirigindo-se a Efrom, diante de todos, disse: "Rogo-te que me ouças: eu te dou o preço do campo; aceita-o de minhas mãos, e assim enterrarei nele minha defunta."
Efrom respondeu a Abraão:
"Ouve-me, meu Senhor: uma terra no valor de quatrocentos siclos de prata, entre ti e mim, o que é isto? Sepulta tua defunta."
Abraão aceitou as condições de Efrom, e pesou o dinheiro que ele tinha pedido na presença dos filhos de Het, isto é, quatrocentos siclos de prata em moeda corrente no comércio.
A terra de Efrom, situada em Macpela, defronte de Mambré, a terra na qual se encontra a caverna, e todas as árvores que crescem ao redor nos limites desta terra,
tornaram-se assim propriedade de Abraão, em presença dos filhos de Het e de todos aqueles que entravam pela porta da cidade.
E Abraão sepultou Sara, sua mulher, na caverna de Macpela, defronte de Mambré, hoje Hebron, na terra de Canaã.
A terra e a caverna que nela se encontra passaram, pois, dos filhos de Het para propriedade de Abraão, a título de lugar de sepultura.
Gênesis 23:1-20
O velho Abraão estava avançado em idade, e o Senhor o tinha abençoado em todas as coisas.
Abraão disse ao servo mais antigo de sua casa, que administrava todos os seus bens: "Mete tua mão debaixo de minha coxa.
Quero que jures pelo Senhor, Deus do céu e da terra, que não escolherás para mulher de meu filho nenhuma das filhas dos cananeus, no meio dos quais habito;
mas irás à minha terra, à minha parentela, e lá escolherás uma mulher para o meu filho Isaac."
O servo respondeu: "Talvez essa mulher não me quererá seguir a esta terra; nesse caso, poderei reconduzir o teu filho à terra de onde saíste?"
"Guarda-te bem, disse-lhe Abraão, de reconduzir para lá o meu filho!
O Senhor Deus do céu, que me tirou da casa de meu pai e de minha pátria, que me disse e me jurou dar esta terra à minha posteridade, este Senhor mandará o seu anjo diante de ti, e tu escolherás lá uma mulher para o meu filho.
Mas, se ela não te quiser seguir, estarás desobrigado do juramento que te impus. Somente não reconduzas {de forma alguma} para lá o meu filho."
Pôs, então, o servo sua mão debaixo da coxa de Abraão, seu senhor, e fez-lhe o juramento que ele pedia.
E, tendo tomado dez camelos do rebanho de seu senhor, partiu, levando as mãos cheias das riquezas de Abraão. E pôs-se a caminho, andando para a Mesopotâmia, para a cidade de Nacor.
E fez descansar os camelos fora da cidade, perto de um poço. Era pela tarde, à hora em que saíam as mulheres para ir buscar água.
"Senhor, disse ele, Deus de Abraão, meu senhor, fazei-me encontrar hoje o que desejo, e manifestar vossa bondade para com meu senhor Abraão.
Eis-me aqui, de pé, junto desta fonte onde as filhas dos habitantes da cidade virão buscar água.
Portanto, a donzela a quem eu disser: Inclina o teu cântaro, por favor, para que eu beba -, e me responder: Bebe, e darei de beber também aos teus camelos -, essa seja a que destina ao vosso servo Isaac. Por isto conhecerei que manifestais vossa bondade para com meu senhor."
Ainda não tinha acabado de falar, quando sobreveio, com um cântaro aos ombros, Rebeca, filha de Batuel, filho de Melca, mulher de Nacor, irmão de Abraão.
A jovem era extremamente bela, virgem, e homem algum a havia possuído. Ela desceu à fonte, encheu o seu cântaro e ia voltando.
O servo correu-lhe ao encontro e disse-lhe: "Queres dar-me de beber um pouco da água de teu cântaro?"
"Bebe, meu senhor", respondeu ela. E prontamente inclinou o cântaro sobre o seu braço para lhe dar de beber.
Tendo ele bebido, ela disse: "Vou buscar água também para os teus camelos, para que todos bebam."
E, despejando seu cântaro no bebedouro, correu a buscar água de novo na fonte para todos os camelos.
O homem contemplava em silêncio, curioso por saber se o Senhor tinha ou não tornado feliz a sua viagem.
Quando os camelos acabaram de beber, o homem tirou um anel de ouro pesando meio siclo, e dois braceletes de ouro pesando dez siclos.
E disse à jovem: "Dize-me, por favor: De quem és filha? Haveria na casa de teu pai um lugar para passarmos a noite?"
"Eu sou filha de Batuel, respondeu ela, o filho de Melca, que ela deu à luz a Nacor."
E ajuntou: "Há em nossa casa palha e forragem em abundância, e também lugar para passar a noite."
Inclinou-se, então, o homem e prostrou-se diante do Senhor:
"Bendito seja, exclamou ele, o Senhor, o Deus de Abraão, meu senhor, que não faltou à sua bondade e à sua fidelidade para com ele. O Senhor conduziu-me diretamente à casa dos parentes de meu senhor."
A jovem foi correndo contar à sua mãe tudo o que se tinha passado.
Rebeca tinha rim irmão chamado Labão. Este apressou-se em ir ao encontro do homem que se encontrava junto da fonte.
Ele tinha visto o anel e os braceletes nas mãos de sua irmã, e ouvido a narração de sua irmã Rebeca: "Esse homem me disse isso e aquilo." Foi ele, pois, ao encontro do estrangeiro e o achou perto dos camelos, na fonte.
"Vem, bendito do Senhor, disse ele, por que permaneces aí fora? Preparei a casa e um lugar para os camelos."
E o homem entrou na casa. Descarregaram os camelos, deram-lhes palha e forragem, enquanto traziam ao estrangeiro e aos seus companheiros água para lavar os pés.
Serviu-se-lhe em seguida de comer; mas ele disse: "Não comerei nada enquanto não expuser o que tenho a dizer." "Fala", disse Labão.
"Eu sou, disse ele, escravo de Abraão.
O Senhor encheu de bênçãos o meu senhor, que se tornou poderoso; e deu-lhe ovelhas e bois, prata e ouro, servos e servas, camelos e jumentos.
Sara, mulher do meu senhor, apesar de sua velhice, deu-lhe à luz um filho, ao qual ele deu todos os seus bens.
Então o meu senhor fez-me jurar que eu não escolheria para o seu filho uma mulher entre as filhas dos cananeus, em cuja terra ele mora,
mas que viria à casa de seu pai, à sua família, para aí escolher uma mulher para o seu filho.
E eu disse-lhe: Talvez a mulher não me quererá seguir.
'O Senhor, respondeu-me ele, em cujo caminho sempre andei, mandará o seu anjo contigo e fará bem-sucedida a tua viagem: escolherás para o meu filho uma mulher de minha família, na casa de meu pai.
Mas serás desobrigado do juramento que me fazes, se, tendo visitado minha parentela, encontrares oposição e não fores recebido.'
Ora, chegando hoje à fonte, eu disse: Senhor, Deus de meu senhor Abraão, se vos dignardes tornar bem-sucedida a viagem que empreendi {concedei-me isto:}
Ficarei perto da fonte; a jovem que vier buscar água, e a quem eu disser: Deixa-me, por favor, beber um pouco da água de teu cântaro,
e que me responder:'Bebe, e buscarei também água para os teus camelos', essa será a mulher que o Senhor destina ao filho de meu senhor.
Eu não tinha ainda acabado de falar comigo mesmo, quando veio Rebeca com o seu cântaro aos ombros, e desceu à fonte para buscar água. Eu disse-lhe: Dá-me de beber, por favor.
E, descendo logo o cântaro dos seus ombros, ela me disse: 'Bebe, e darei também de beber aos camelos.'
Perguntei-lhe então de quem era filha. Ela respondeu-me: 'Sou filha de Batuel, filho de Nacor, que Melca lhe deu à luz.' Eu, pois, coloquei o anel em suas narinas e os braceletes em seus punhos.
Inclinei-me, então, prostrando-me diante do Senhor, e bendisse o Senhor, o Deus de meu senhor Abraão, que me conduziu diretamente ao lugar onde eu podia tomar a filha do parente de meu senhor para o seu filho.
Agora, se quiserdes testemunhar afeição e fidelidade ao meu senhor, dizei-mo; senão, dizei-mo também, para que eu tome outra direção."
Labão e Batuel tomaram então a palavra: "Do Senhor veio tudo isso, disseram eles. Nada temos a dizer.
Eis aí Rebeca: toma-a e parte. Que ela seja a mulher do filho de teu senhor, como o Senhor disse."
Ouvindo estas palavras, o servo de Abraão prostrou-se por terra diante do Senhor.
Tomando em seguida objetos de prata, objetos de ouro e vestidos, ofereceu-os como presente a Rebeca. Ofereceu também ricos presentes ao seu irmão e à sua mãe.
Puseram-se então à mesa, ele e os seus companheiros, e passaram a noite. Levantando-se no dia seguinte, disse o servo: "Deixai-me partir para a casa do meu senhor."
Ao que o irmão e a mãe de Rebeca responderam: "Fique a jovem ainda conosco alguns dias, ao menos dez dias; depois disto partirá."
"Não me retenhais, tornou ele: pois que o Senhor fez bem-sucedida a minha viagem, deixai-me partir e voltar para o meu senhor."
"Chamemos a jovem, disseram eles, e perguntemos-lhe o seu parecer."
Chamaram Rebeca e disseram-lhe: "Queres partir com este homem?" "Sim", respondeu ela.
Deixaram-na, pois, partir juntamente com sua ama-de-leite, com o servo de Abraão e seus companheiros.
Eles abençoaram-na, dizendo: "Ó nossa irmã: possas tu tornar-te a mãe de milhares de miríades! E possua a tua posteridade a porta dos seus inimigos!"
Rebeca e suas servas levantaram-se, montaram nos camelos e seguiram o homem. Este conduzindo Rebeca, pôs-se logo a caminho.
Entretanto, Isaac tinha voltado do poço de Lacai-Roi, e habitava no Negeb.
Uma tarde em que saíra para meditar no campo, levantando os olhos, viu alguns camelos que se aproximavam.
Rebeca também, tendo levantado os olhos, viu Isaac, e desceu do camelo.
Ela disse ao servo de Abraão: "Quem é aquele homem que vem ao nosso encontro no campo?" "É o meu senhor", respondeu ele. E ela tomou depressa o véu e cobriu-se.
O servo contou a Isaac tudo o que tinha feito.
E Isaac introduziu Rebeca na tenda de Sara, sua mãe. Desposou-a, e ela tornou-se sua mulher muito amada. E desse modo Isaac consolou-se da morte de sua mãe.
Gênesis 24:1-67
Abraão tomou outra mulher, chamada Cetura,
a qual lhe deu à luz Zamrã, Jecsã, Madã, Madiã, Jesboc e Sué.
Jecsã gerou Saba e Dadã {dos quais foram filhos os assurim, os latussim e os laomim}.
Os filhos de Madiã foram Efa, Ofer, Henoc, Abida e Eldaa. Estes foram todos os filhos de Cetura.
Abraão deu todos os seus bens a Isaac.
Quanto aos filhos de suas concubinas, só lhes deu presentes, e despediu-os, ainda vivo, mandando-os para longe de seu filho Isaac, para a terra do oriente.
Eis a duração da vida de Abraão: Ele viveu cento e setenta e cinco anos,
e entregou sua alma, morrendo numa ditosa velhice, em idade avançada e cheio de dias, e foi unir-se aos seus.
Isaac e Ismael, seus filhos, enterraram-no na caverna de Macpela, situada na terra de Efrom, filho de Seor, o hiteu, defronte de Mambré,
a terra que Abraão tinha comprado aos filhos de Het. É lá que ele foi enterrado, com Sara, sua mulher.
Depois de sua morte, Deus abençoou seu filho Isaac, que habitava perto do poço de Lacai-Roi.
Eis a descendência de Ismael, filho que Agar, a egípcia, escrava de Sara, dera à luz a Abraão.
Estes são os nomes dos filhos de Ismael, segundo sua ordem de nascimento: o primogênito de Ismael, Nebaiot; em seguida, Cedar, Adbeel, Mabsã,
Masma, Duma, Massa,
Hadad, Tema, Jetur, Nafis e Cedma.
Tais são os filhos de Ismael, e estes são os seus nomes segundo suas cidades e seus respectivos acampamentos, doze chefes de suas tribos.
A duração da vida de Ismael foi de cento e trinta e sete anos, e depois ele entregou sua alma, e foi unir-se aos seus.
Seus filhos habitaram desde Hevila até Sur, que se encontra defronte do Egito, na direção da Assíria. Ele se instalou assim em frente de todos os seus irmãos.
Eis a história de Isaac, filho de Abraão.
Abraão gerou Isaac. Isaac tinha a idade de quarenta anos quando se casou com Rebeca, filha de Batuel, o arameu, de Padã-Arã, e irmã de Labão, o arameu.
Isaac rogou ao Senhor por sua mulher, que era estéril. O Senhor ouviu-o e Rebeca, sua mulher, concebeu.
Como as crianças lutassem no seu ventre, ela disse: "Se assim é, por que me acontece isso?" E ela foi consultar o Senhor,
que lhe respondeu: "Tens duas nações no teu ventre; dois povos se dividirão ao sair de tuas entranhas. Um povo vencerá o outro, e o mais velho servirá ao mais novo."
Chegado o tempo em que ela devia dar à luz, eis que trazia dois gêmeos no seu ventre.
O que saiu primeiro era vermelho, e todo peludo como um manto de peles, e chamaram-no Esaú. Saiu em seguida o seu irmão, segurando pela mão o calcanhar de Esaú, e deram-lhe o nome de Jacó.
Isaac tinha sessenta anos quando eles vieram ao mundo.
Os meninos cresceram. Esaú tornou-se um hábil caçador, um homem do campo, enquanto Jacó era um homem pacífico, que morava na tenda.
Isaac preferia Esaú, porque gostava de caça; Rebeca, porém, se afeiçoou mais a Jacó.
Um dia em que Jacó preparava um guisado, voltando Esaú fatigado do campo,
disse-lhe: "Deixa-me comer um pouco dessa coisa vermelha, porque estou muito cansado." {É por isso que lhe puseram o nome a Esaú, Edom.}
Jacó respondeu-lhe: "Vende-me primeiro o teu direito de primogenitura."
"Morro de fome, que me importa o meu direito de primogenitura?"
"Jura-mo, pois, agora mesmo", tornou Jacó. Esaú jurou e vendeu o seu direito de primogenitura a Jacó.
Este deu-lhe pão e um prato de lentilhas. Esaú comeu, bebeu, depois se levantou e partiu. Foi assim que Esaú desprezou o seu direito de primogenitura.
Gênesis 25:1-34
Sobreveio uma fome à região {além da primeira fome que houve no tempo de Abraão}, e Isaac foi ter com Abimelec, rei dos filisteus em Gerara.
O Senhor apareceu-lhe e disse-lhe: "Não desças ao Egito; fica na terra que eu te indico.
Habita nela; eu estou contigo e te abençoarei, porque é a ti e à tua posteridade que darei toda esta terra, e cumprirei o juramento que fiz ao teu pai Abraão.
Multiplicarei tua posteridade como as estrelas do céu, dar-lhe-ei todas estas regiões, e nela serão benditas todas as nações da terra,
porque Abraão obedeceu à minha voz e observou os meus preceitos, meus mandamentos e minhas leis."
Isaac ficou, pois, em Gerara.
Quando os habitantes da região o interrogavam a respeito de sua mulher, ele dizia-lhes que era sua irmã, pois respondendo "É minha mulher", temia que os homens daquele lugar o matassem por causa de Rebeca, que era muito bela.
E, como sua estada ali se prolongasse, aconteceu que um dia, olhando Abimelec pela janela, viu Isaac que acariciava Rebeca, sua mulher.
Mandou chamá-lo e disse-lhe: "É evidente que é tua mulher! E como dizias tu que era tua irmã." "Porque, respondeu Isaac, eu temia que me matassem por causa dela."
Abimelec replicou: "Que nos fizeste? Um pouco mais e alguém do povo teria abusado de tua mulher, e terias atraído o pecado sobre nós!"
Então Abimelec mandou publicar diante de todo o povo que seria morto quem quer que tocasse naquele homem ou em sua mulher.
Isaac semeou naquela terra, e colheu o cêntuplo naquele mesmo ano; o Senhor o abençoava.
E este homem cresceu, e seus bens foram aumentando cada vez mais; tornou-se extremamente rico.
Possuía rebanhos de ovelhas e de bois e numerosos escravos. E os filisteus o invejavam.
Por isso, entupiram todos os poços que tinham cavado os escravos de seu pai Abraão, quando este ainda vivia.
Abimelec disse-lhe: "Aparta-te de nós, pois te tornaste muito mais poderoso do que nós."
Partiu Isaac e, tendo levantado o seu acampamento no vale de Gerara, habitou aí.
Abriu de novo os poços cavados outrora, no tempo de seu pai Abraão, que os filisteus tinham entupido depois de sua morte, e deu-lhes os mesmos nomes que o seu pai lhes tinha dado.
Seus servos cavaram outro poço no vale, e encontraram ali uma fonte de água viva.
Mas os pastores de Gerara começaram a disputar com os pastores de Isaac: "Esta água é nossa", diziam eles. Isaac chamou então a esse poço Esec, porque lho tinham contestado.
Abriram seus pastores um segundo poço, mas surgiu uma outra disputa, e por isso pôs-lhe o nome de Sitna.
Partindo em seguida dali, abriu outro poço, sobre o qual não houve mais discussão, e pôs-lhe o nome de Rehobot, "porque agora, disse ele, o Senhor nos pôs ao largo, e prosperaremos na terra."
Dali, Isaac subiu a Bersabéia.
Naquela mesma noite, o Senhor apareceu-lhe e disse-lhe: "Eu sou o Deus de Abraão, teu pai. Nada temas, estou contigo. Eu te abençoarei e multiplicarei tua descendência por causa de Abraão, meu servo."
Isaac construiu um altar nesse lugar e invocou o nome do Senhor. Levantou depois ali sua tenda e seus escravos cavaram um poço.
Abimelec veio de Gerara procurá-lo, com Ocozat, seu amigo, e Ficol, general do seu exército.
Isaac disse: "Por que me procurais, já que me detestais e me expulsastes do meio de vós?"
Eles responderam: "Nós vimos que o Senhor está contigo, e pensamos conosco: Haja um juramento entre nós e ti. Queremos, pois, fazer aliança contigo.
Jura que não nos farás nenhum mal, assim como também nós não tocamos em nada do que é teu e só te temos feito bem, deixando-te partir em paz. Agora, tu és o bendito do Senhor."
Isaac preparou-lhes um banquete, e eles comeram e beberam.
No dia seguinte pela manhã, fizeram mutuamente os seus juramentos; Isaac despediu-os em seguida, e eles afastaram-se dele em paz.
Nesse mesmo dia, os escravos de Isaac vieram dar-lhe notícias do poço que estavam cavando: "Encontramos água", disseram eles.
Ele pôs a esse poço o nome de Sibea. De onde vem o nome de Bersabéia, nome que a cidade conserva até o dia de hoje.
Esaú, com a idade de quarenta anos, tomou por mulheres Judite, filha de Beeri, o hiteu, e Basemat, filha de Elon, o hiteu.
Elas foram um motivo de desgosto para Isaac e Rebeca.
Gênesis 26:1-35
Isaac envelhecera e seus olhos enfraqueceram-se, de modo que não podia ver. Chamou Esaú, seu filho primogênito, e disse-lhe: "Meu filho!" " Eis-me aqui!", respondeu ele.
Isaac disse: "Tu vês, estou velho e não sei quando vou morrer.
Toma as tuas armas, tua aljava e teu arco, vai ao campo e mata-me uma caça.
Prepara-me depois um prato suculento, como sabes que gosto, e traze-mo para que o coma e minha alma te abençoe antes que eu morra."
{Ora, Rebeca ouviu atentamente enquanto Isaac falava ao seu filho Esaú.} E Esaú partiu para o campo, a fim de matar e trazer a caça.
Rebeca disse a Jacó, seu filho: "Acabo de ouvir teu pai dizer ao teu irmão Esaú para que lhe traga uma caça
e lhe prepare um bom prato, a fim de comer e o abençoar diante do Senhor antes de morrer.
Ouve-me, pois, meu filho, e faze o que te vou dizer.
Vai ao rebanho e traze-me dois belos cabritos. Prepararei com eles um prato suculento para o teu pai, como ele gosta,
tu lho levarás e ele comerá, a fim de que te abençoe antes de morrer."
"Mas, respondeu Jacó à sua mãe, Esaú, meu irmão, é peludo, enquanto eu sou de pele lisa.
Se meu pai me tocar, passarei aos seus olhos por um embusteiro e atrairei sobre mim uma maldição em lugar de bênção."
"Tomo sobre mim esta maldição, meu filho, disse sua mãe. Ouve-me somente, e vai buscar o que te digo."
Jacó foi e trouxe os dois cabritos, com os quais sua mãe preparou um prato suculento, como seu pai gostava.
Escolheu as mais belas vestes de Esaú, seu filho primogênito, que tinha em casa, e revestiu com elas Jacó, seu filho mais novo.
Cobriu depois suas mãos, assim como a parte lisa do pescoço, com a pele dos cabritos,
e pôs-lhe nas mãos o prato suculento e o pão que tinha preparado.
Jacó foi para junto do seu pai e disse-lhe: "Meu pai!" "Eis-me aqui! Quem és, meu filho?"
Jacó respondeu: "Eu sou Esaú, teu primogênito; fiz o que me pediste. Levanta-te, assenta-te e come de minha caça, a fim de que tua alma me abençoe."
"Como encontraste caça tão depressa, meu filho?" "É que o Senhor, teu Deus, fez que ela se apresentasse diante de mim."
"Aproxima-te, então, meu filho, para que eu te apalpe e veja se, de fato, és o meu filho Esaú."
Jacó aproximou-se de Isaac, seu pai, que o apalpou e disse: "A voz é a voz de Jacó, mas as mãos são as mãos de Esaú."
E não o reconheceu, porque suas mãos estavam peludas como as do seu irmão Esaú. E abençoou-o.
"Tu és bem o meu filho Esaú?" Disse-lhe ele: "Sim."
"{Então} serve-me, para que eu coma de tua caça, meu filho, e minha alma te abençoe." Jacó serviu-lhe e ele comeu; e trouxe-lhe também vinho, do qual ele bebeu.
Então Isaac, seu pai, disse-lhe: "Aproxima-te, meu filho, e beija-me."
E, aproximando-se Jacó para lhe dar um beijo, Isaac sentiu o perfume de suas vestes, e o abençoou nestes termos. "Sim. o odor de meu filho é como o odor de um campo que o Senhor abençoou.
Deus te dê o orvalho do céu e a gordura da terra, uma abundância de trigo e de vinho!
Sirvam-te os povos e prostrem-se as nações diante de ti! Sê o senhor dos teus irmãos, e curvem-se diante de ti os filhos de tua mãe! Maldito seja quem te amaldiçoar e bendito quem te abençoar!"
Apenas Isaac acabara de abençoar Jacó, e este saíra de junto do seu pai, chegou Esaú da caça.
Preparou também ele um prato suculento e trouxe-o ao seu pai, dizendo: "Levanta-te, meu pai, e come da caça do teu filho, a fim de que tua alma me abençoe."
"Quem és tu?", perguntou-lhe seu pai Isaac. "Eu sou o teu filho primogênito Esaú."
Então Isaac, tomado de emoção violenta, exclamou: "Quem é, pois, aquele que foi à caça e me trouxe o prato que eu comi antes que tu voltasses? Eu o abençoei, e ele será bendito."
Ouvindo estas palavras de seu pai, Esaú soltou um grito cheio de amargura, e disse-lhe: "Abençoa-me também a mim, meu pai!"
"Teu irmão, respondeu-lhe Isaac, veio, fraudulentamente, tomar a tua bênção."
Esaú disse então: "Será porque ele se chama Jacó que me suplantou já duas vezes? Tirou-me meu direito de primogenitura, e eis que agora me rouba minha bênção!" E ajuntou: "Não reservaste, porventura, uma bênção também para mim?"
Isaac respondeu-lhe: "Eu o constituí teu senhor, e dei-lhe todos os seus irmãos por servos e o estabeleci na posse do trigo do vinho. Que posso ainda fazer por ti, meu filho?"
Esaú disse ao seu pai: "Então só tens uma bênção, meu pai? Abençoa-me também a mim, meu pai!" E pôs-se a chorar.
Isaac tomou a palavra: "Eis, disse ele, que a tua habitação será desprovida da gordura da terra e do orvalho que desce dos céus.
Viverás de tua espada, servindo o teu irmão, mas, se te libertares, quebrarás o seu jugo de cima do teu pescoço."
Esaú concebeu ódio por Jacó por causa da bênção que lhe tinha dado seu pai e disse em seu coração: "Virão os dias do luto de meu pai, e matarei meu irmão Jacó."
E foram referidas a Rebeca estas palavras do seu filho primogênito. Ela mandou chamar seu filho mais novo, Jacó, e disse-lhe: "Teu irmão Esaú quer matar-te para se vingar de ti.
Escuta-me, pois, meu filho: vai, foge para junto de Labão, meu irmão, em Harã;
fica em casa dele algum tempo, até que se acalme a cólera do teu irmão.
Assim que passar a sua cólera e tiver ele esquecido do que lhe fizeste, mandar-te-ei buscar. Por que perderia eu vocês dois num só dia?"
Rebeca disse a Isaac: "Estou desgostosa da vida por causa das filhas de Het. Se Jacó tomar uma mulher entre as filhas de Het, para que ainda viver?"
Gênesis 27:1-46
Isaac chamou Jacó e o abençoou, dando-lhe esta ordem: "Não desposarás uma filha de Canaã:
Mas vai a Padã-Arã, à casa de Batuel, pai de tua mãe, e escolhe lá uma mulher entre as filhas de Labão, irmão de tua mãe.
Deus todo-poderoso te abençoe, te faça crescer e multiplicar, de sorte que te tornes uma multidão de povos.
Dê-te ele, como também à tua posteridade, a bênção de Abraão, a fim de que possuas a terra onde moras, e que Deus deu a Abraão."
Isaac despediu Jacó, e este partiu para Padã-Arã, para a casa de Labão, filho de Batuel, o arameu, irmão de Rebeca, a mãe de Jacó e de Esaú.
Ora, Esaú viu que seu pai tinha abençoado Jacó, e o tinha enviado a Padã-Arã para aí tomar uma mulher e que, depois de o ter abençoado, lhe proibira desposar uma filha de Canaã.
Viu também que Jacó, obedecendo aos seus pais, partira para Padã-Arã.
E, compreendendo que as filhas de Canaã não eram bem vistas pelo seu pai,
foi à casa de Ismael e tomou por mulher, além daquelas que já tinha, a Maelet, filha de Ismael, filho de Abraão, irmã de Nabaiot.
Jacó, partindo de Bersabéia, tomou o caminho de Harã.
Chegou a um lugar, e ali passou a noite, porque o sol já se tinha posto. Serviu-se como travesseiro de uma das pedras que ali se encontravam, e dormiu naquele mesmo lugar.
E teve um sonho: via uma escada, que, apoiando-se na terra, tocava com o cimo o céu; e anjos de Deus subiam e desciam pela escada. No alto estava o Senhor,
que lhe dizia: "Eu sou o Senhor, o Deus de Abraão, teu pai e o Deus de Isaac; darei a ti e à tua descendência a terra em que estás deitado.
Tua posteridade será tão numerosa como os grãos de poeira no solo; tu te estenderás, para o ocidente e para o oriente, para o norte e para o meio-dia, e todas as famílias da terra serão benditas em ti e em tua posteridade.
Estou contigo, para te guardar onde quer que fores, e te reconduzirei a esta terra, e não te abandonarei sem ter cumprido o que te prometi."
Jacó, despertando de seu sono, exclamou: "Em verdade, o Senhor está neste lugar, e eu não o sabia!"
E, cheio de pavor, ajuntou: "Quão terrível é este lugar! É nada menos que a casa de Deus; é aqui, a porta do céu."
No dia seguinte, pela manhã, tomou Jacó a pedra: sobre a qual repousara a cabeça e a erigiu em estela, derramando óleo sobre ela.
Deu o nome de Betel a este lugar, que antes se chamava Luz.
Jacó fez então este voto: "Se Deus for comigo, se ele me guardar durante esta viagem que empreendi, e me der pão para comer e roupa para vestir,
e me fizer voltar em paz casa paterna, então o Senhor será o meu Deus.
Esta pedra da qual fiz uma estela será uma casa de Deus, e pagarei o dízimo de tudo o que me derdes."
Gênesis 28:1-22
Jacó pôs-se de novo a caminho e foi para a terra dos filhos do oriente.
Olhando em torno de si, viu no campo um poço junto do qual estavam deitados três rebanhos de ovelhas. Este poço servia de bebedouro para os rebanhos. Mas, sendo grande a pedra que cobria a abertura do poço
somente a removiam de cima quando todos os rebanhos fossem recolhidos. Davam então de beber aos animais e recolocavam a pedra no seu lugar.
Jacó disse aos pastores: "Meus irmãos, de, onde sois?" "Somos de Harã", responderam.
"Conheceis porventura Labão, filho de Nacor?" "Sim."
"Como vai ele?" "Vai muito bem; e eis justamente sua filha Raquel que vem com o rebanho."
"É ainda pleno dia, tornou Jacó, e não é hora de se recolherem os rebanhos. Dai de beber às ovelhas e levai-as de novo ao pasto."
"Não o podemos, responderam eles, antes que todos os rebanhos estejam reunidos. Tiramos então a pedra de cima do poço e damos de beber aos animais."
Falava ainda com eles, quando chegou Raquel com o rebanho do seu pai, porque era pastora.
Logo que Jacó viu Raquel, filha de Labão, irmão de sua mãe, aproximou-se, rolou a pedra de cima da boca do poço e deu de beber às ovelhas de Labão.
Depois beijou Raquel e pôs-se a chorar.
Contou-lhe que era parente de seu pai e filho de Rebeca; e ela correu a anunciar isto ao seu pai.
Tendo Labão ouvido falar de Jacó, filho de sua irmã, correu-lhe ao encontro, abraçou-o, beijou-o e o conduziu à sua casa. Jacó contou-lhe tudo o que se tinha passado,
e Labão disse-lhe: "Sim, tu és de meus ossos e de minha carne." Jacó ficou em casa dele um mês inteiro.
E Labão disse-lhe: "Acaso, porque és meu parente, servir-me-ás de. raça? Dize-me que salário queres."
Ora, Labão tinha duas filhas: a mais velha chamava-se Lia, e a mais nova Raquel.
Lia tinha os olhos embaciados, e Raquel era bela de talhe e rosto.
Jacó, que amava Raquel, disse a Labão: "Eu te servirei sete anos por Raquel tua filha mais nova."
"E melhor, respondeu Labão, dá-la a ti que a outro: fica comigo."
Assim, Jacó serviu por Raquel sete anos, que lhe pareceram dias, tão grande era o amor que lhe tinha.
Disse, pois, a Labão: "Dá-me minha mulher, porque está completo o meu tempo e quero desposá-la."
Labão reuniu. todos os habitantes do lugar e deu um banquete.
Mas, à noite, conduziu, Lia a Jacó, que se uniu com ela.
E deu à sua filha Lia, sua escrava Zelfa.
Pela manhã, viu Jacó que tinha ficado com Lia. E disse a Labão: "Que me fizeste? Não foi por Raquel que te servi? Por que me enganaste?"
"Aqui, respondeu Labão, não é costume casar a mais nova antes da mais velha.
Acaba a semana com esta, e depois te darei também sua irmã, na condição que me sirvas ainda sete anos."
Assim fez Jacó: acabou a semana com Lia, e depois lhe deu Labão por mulher sua filha Raquel,
dando por serva a Raquel sua escrava Bala.
Jacó uniu-se também a Raquel, a quem amou mais do que a Lia. E serviu ainda por sete anos em casa de Labão.
O Senhor, vendo que Lia era desprezada, tornou-a fecunda enquanto Raquel permanecia estéril.
Lia concebeu e deu à luz um filho, ao qual chamou Rubem, "porque, dizia ela, o Senhor olhou minha aflição; agora meu marido me amará".
Concebeu de novo e deu à luz outro filho. "O Senhor, disse ela, vendo que era desdenhada, deu-me ainda este." E pôs-lhe o nome de Simeão.
Concebeu ainda e deu à luz mais um filho. "Desta vez, disse ela, meu marido se apegará a mim, porque já lhe dei à luz três filhos." Por isso deu-lhe o nome de Levi.
Concebeu ainda e deu à luz um filho. E disse: "Desta vez, louvarei ao Senhor." E chamou-o Judá. Depois cessou de ter filhos.
Gênesis 29:1-35
Raquel, vendo que não dava filhos a Jacó, teve inveja de sua irmã: "Dá-me filhos, disse ela ao seu marido, senão morro!"
E Jacó irritou-se com ela. "Acaso, disse ele, posso eu pôr-me no lugar de Deus que te recusou a fecundidade?"
Ela respondeu: "Eis minha serva Bala: toma-a. Que ela dê à luz sobre os meus joelhos e assim, por ela, terei também filhos."
Deu-lhe, pois, por mulher sua escrava Bala, da qual se aproximou Jacó.
Bala concebeu e deu à luz um filho a Jacó.
Disse então Raquel: "Deus fez-me justiça. Ele ouviu minha voz e deu-me um filho." Por isso ela o chamou Dã.
Bala, escrava de Raquel, concebeu de novo e deu à luz um segundo filho a Jacó.
Raquel disse: "Lutei contra minha irmã junto de Deus, e venci!" E deu ao menino o nome de Neftali.
Lia, vendo que não concebia mais, tomou sua escrava Zelfa e deu-a por mulher a Jacó.
Zelfa, escrava de Lia, deu à luz um filho a Jacó.
Lia disse: "Que sorte!" E chamou-o Gad.
Zelfa, escrava de Lia, deu à luz um segundo filho a Jacó.
Lia disse: "Que felicidade! As mulheres me chamarão ditosa." E chamou-o Aser.
Um dia, por ocasião da ceifa, Rubem saiu ao campo e, tendo encontrado umas mandrágoras, levou-as à sua mãe Lia. Raquel disse a Lia: "Rogo-te que me dês as mandrágoras do teu filho."
Lia respondeu: "Já não é bastante o teres tomado meu marido, para que queiras ainda as mandrágoras do meu filho?" "Pois bem, tornou Raquel, em troca das mandrágoras do teu filho, que ele durma contigo esta noite."
À noite, quando Jacó voltou do campo, Lia saiu-lhe ao encontro: "Vem comigo, disse-lhe ela, eu te aluguei em troca das mandrágoras do meu filho." E Jacó dormiu com ela aquela noite.
Deus ouviu Lia, que concebeu e deu à luz um quinto filho a Jacó.
"Deus, disse ela, recompensou-me por eu ter dado minha escrava ao meu marido." E o chamou Issacar.
Lia concebeu ainda e deu à luz um sexto filho a Jacó.
E disse: "Deus deu-me um belo presente; agora meu marido habitará comigo, pois que lhe dei à luz seis filhos." E o chamou Zabulon.
Depois disso, deu à luz uma filha, a quem chamou Dina.
Lembrou-se Deus de Raquel, ouviu-a e tornou-a fecunda.
Raquel concebeu e deu à luz um filho. "Deus, disse ela, tirou o meu opróbrio."
E chamou-o José, dizendo: "Dê-me o Senhor ainda outro filho!"
Tendo Raquel dado à luz José, Jacó disse a Labão: "Deixa-me partir para a minha casa, na minha terra.
Dá-me minhas mulheres e meus filhos, pelos quais te servi, a fim de que eu me vá; tu sabes quanto tempo servi em tua casa."
Labão respondeu-lhe: "Se achei graça aos teus olho... reconheço que o Senhor me abençoou por causa de ti.
Fixa-me o que devo dar-te, ajuntou ele, e dar-te-ei."
Jacó disse-lhe: "Tu sabes como te tenho servido, e como aumentaram os teus rebanhos graças a mim.
Tinhas pouca coisa, antes de minha chegada, e tudo aumentou depois. O Senhor abençoou-te a cada um dos meus passos. Agora, quanto a mim, quando trabalharei eu para minha casa?"
"Que te hei de dar?", disse Labão. Jacó respondeu: "Não me darás nada. Se aceitas o que te vou propor, continuarei a apascentar e guardar o teu rebanho.
Vou hoje passar pelo meio de todos os teus rebanhos e pôr à parte, entre os cordeiros, todo o animal manchado, malhado ou negro, e entre as cabras, tudo o que é manchado ou malhado: isto será o meu salário.
Minha justiça testemunhará em meu favor para o futuro, quando vieres verificar o meu salário: tudo o que não for malhado ou manchado entre as cabras e negro entre os cordeiros, considerar-se-á como roubado."
"Está bem, disse Labão, seja como dizes."
Naquele mesmo dia, pôs ele à parte os bodes malhados e manchados, todas as cabras malhadas ou manchadas, todas aquelas que estavam marcadas de branco, e todos os cordeiros negros; confiou-os aos seus filhos,
e pôs à distância de três dias de jornada entre ele e Jacó, o qual apascentava o resto do rebanho de Labão.
Jacó tomou então varas verdes de álamo, de amendoeira e de plátano; tirou-lhes parte da casca, fazendo faixas brancas e deixando a nu o samo.
Colocou as varas assim preparadas sob os olhos das ovelhas, nas pias e nos bebedouros onde vinham beber. Indo a beber, entravam em calor.
E como entrassem no calor do coito diante dessas varas, concebiam cordeiros riscados, manchados e malhados.
Jacó punha-os à parte, e voltava a face dos animais para o que era malhado e negro no rebanho de Labão. Constituiu assim rebanhos para si, que não se misturaram aos de Labão.
Além disso, Jacó só punha suas varas nos bebedouros sob os olhos das ovelhas em calor, a fim de que seu coito se fizesse perto das varas, quando se tratava de ovelhas vigorosas.
Quando eram fracas, não punha as varas, de sorte que os cordeiros raquíticos eram para Labão e os vigorosos para ele.
Este homem tornou-se assim extremamente rico, e teve muitos rebanhos, escravas e escravos, camelos e jumentos.
Gênesis 30:1-43
Jacó ouviu as palavras dos filhos de Labão, que diziam: "Jacó tomou tudo o que é de nosso pai, e é às suas custas que ele se tornou de tal forma rico."
Observou também, pela fisionomia de Labão, que este não tinha mais para com ele os sentimentos de antes.
O Senhor disse a Jacó: "Volta para a terra dos teus pais, para a tua parentela, e eu estarei contigo."
Então Jacó mandou Raquel e Lia vir ao campo junto dos seus rebanhos:
"Vejo, disse-lhes ele, pelo semblante de vosso pai, que ele não é mais para comigo o mesmo que antes. Mas o Deus de meu pai está comigo.
Sabeis que servi a vosso pai o melhor que pude,
enquanto ele zombou de mim, mudando dez vezes o meu salário; mas Deus não lhe permitiu causar-me prejuízo.
Quando ele dizia: os animais malhados serão o teu salário, todas as ovelhas davam à luz cordeiros malhados, e se dizia: os animais riscados serão o teu salário, todas as ovelhas davam à luz cordeiros riscados.
Foi Deus mesmo que tomou o rebanho de vosso pai para me dar.
No tempo em que os animais deviam conceber, eu levantava os olhos e via em sonhos que os bodes que cobriam as cabras eram listados, malhados e manchados.
Um anjo de Deus disse-me em sonhos: Jacó! Eis-me aqui, respondi.
Levanta os olhos e vê: todos os bodes que cobrem as cabras são listados, malhados e manchados, porque eu vi tudo o que te fez Labão.
Eu sou o Deus de Betel, onde tu me consagraste uma estela e me fizeste um voto. Agora, vamos, sai daqui e volta para a terra de tua família."
Raquel e Lia responderam: "Resta-nos porventura ainda alguma parte de herança na casa de nosso pai?
Não nos tratou ele como estrangeiras, vendendo-nos e devorando o nosso dinheiro?
Toda a riqueza, que Deus tomou de nosso pai, é para nós e para nossos filhos. Faze, pois, o que Deus te disse."
Levantou-se, pois, Jacó, e fez montar seus filhos e suas mulheres nos camelos.
Levou consigo todos os seus rebanhos, todos os bens que tinha ajuntado, o rebanho que lhe pertencia, adquirido em Padã-Arã, e partiu para junto de seu pai Isaac, na terra de Canaã.
Raquel, aproveitando um momento em que seu pai fora tosquiar suas ovelhas, roubou os terafim de seu pai;
e Jacó enganou Labão, o arameu, ocultando-lhe sua fuga.
Fugindo, pois, com tudo o que era seu, atravessou o rio e dirigiu-se para a montanha de Galaad.
Três dias depois, soube Labão da fuga de Jacó.
E, tomando consigo seus irmãos, perseguiu-o durante sete dias de marcha, e alcançou-o na montanha de Galaad.
Deus, porém, apareceu num sonho noturno a Labão, o arameu, e disse-lhe: "Guarda-te de dizer algo a Jacó."
Labão alcançou, pois, Jacó. Este havia levantado sua tenda na montanha, enquanto Labão e seus irmãos tinham plantado a sua na montanha de Galaad.
Labão disse a Jacó: "Que fizeste? Tu me enganaste, e conduziste minhas filhas como prisioneiras de guerra!
Por que fugiste dessa forma, e me lograste em lugar de me avisar? Eu te teria despedido com manifestações de júbilo e com cânticos, ao som do tamborim e da harpa.
Não me deixaste beijar meus filhos e minhas filhas! Procedeste como um insensato.
Eu poderia agora fazer-vos mal, mas o Deus de teu pai disse-me na última noite: Guarda-te de dizer algo a Jacó.
E, se partiste somente porque tinhas saudade da casa paterna, então por que roubaste os meus deuses?"
Jacó respondeu-lhe: "Tive medo, ao pensar que poderias tirar-me tuas filhas;
quanto aos teus deuses, porém, seja morto aquele que os tiver consigo! Examina o que está comigo, em presença de nossos parentes, e retoma o que é teu." Ora, Jacó ignorava o roubo de Raquel.
Labão entrou na tenda de Jacó, na de Lia e na das duas escravas, mas nada encontrou. Saindo da tenda de Lia, entrou na de Raquel.
Esta havia tomado os terafim e, colocando-os na sela do camelo, sentou-se em cima. Labão revistou toda a tenda, sem nada encontrar.
Raquel disse ao seu pai: "Não se irrite o meu senhor, se não posso levantar-me em sua presença, pois acho-me agora com a indisposição que costuma vir às mulheres." Revistou, pois, mas não encontrou os terafim.
Jacó encolerizou-se então contra Labão, e acabrunhou-o de censuras: "Qual é o meu crime?, disse-lhe ele. Qual é o meu pecado, para que te irrites desse modo contra mim?
Revistaste todas as minhas bagagens: que encontraste do que é teu? Mostra-me aqui em presença de meus parentes e dos teus, e sejam eles juízes entre nós dois.
Há vinte anos que estou em tua casa: tuas ovelhas e tuas cabras não abortaram, não comi os carneiros do teu rebanho.
Nunca te trouxe os animais estraçalhados pelas feras. Eu os repunha, pois tu o exigias, quer fossem roubados de dia, quer de noite.
Eu era queimado de dia pelo calor, e de noite pelo frio, e o sono fugia dos meus olhos.
Eis já vinte anos que estou em tua casa; servi-te catorze anos por tuas duas filhas, seis anos pelos teus rebanhos, e dez vezes modificaste o meu salário.
Se o Deus de meu pai, o Deus de Abraão, o Deus terrível de Isaac não se tivesse posto de meu lado, tu me terias hoje despedido com as mãos vazias. Deus viu minhas penas e meus trabalhos, e na última noite ele pronunciou-se.
Labão respondeu a Jacó: "Estas filhas são minhas filhas, estes filhos, meus filhos, e estes rebanhos, meus rebanhos: tudo o que vês é meu. Que farei eu agora contra minhas filhas, ou contra os filhos que elas deram ao mundo?
Vamos, façamos juntos um pacto que nos sirva de testemunho a nós dois."
Jacó tomou uma pedra e erigiu-a em estela,
e disse aos seus parentes: "Trazei pedras." E, tendo juntado muitas, fizeram um monte, sobre o qual comeram.
Labão chamou-o Yegar-Saaduta, e Jacó, Galaad.
Labão disse: "Este monte é hoje testemunha entre mim e ti",e por isso deu-se-lhe o nome de Galaad,
e também Mitspa, porque Labão disse ainda: "Que o Senhor nos vigie a nós ambos, quando nós nos tivermos despedido um do outro.
Se maltratares minhas filhas, e se tomares outras mulheres além delas, não é um homem que estará conosco. Mas toma cuidado, pois é Deus que será testemunha entre nós."
Labão disse ainda a Jacó: "Vês este monte de pedras e esta estela que levantei entre mim e ti.
Este monte é testemunho, e igualmente esta estela, de que eu não ultrapassarei este monte para o teu lado, e que tu não ultrapassarás este monte e esta estela para o meu lado para nos fazer mal.
O Deus de Abraão, o Deus de Nacor, o Deus de seus pais seja juiz entre nós!" E Jacó jurou pelo Deus terrível de Isaac.
Ofereceu um sacrifício sobre a montanha e convidou seus parentes para comer. Comeram e passaram a noite na montanha.
No dia seguinte pela manhã, Labão beijou seus filhos e suas filhas; abençoou-os e retomou o caminho de sua casa.
Gênesis 31:1-55
Jacó ouviu as palavras dos filhos de Labão, que diziam: "Jacó tomou tudo o que é de nosso pai, e é às suas custas que ele se tornou de tal forma rico."
Observou também, pela fisionomia de Labão, que este não tinha mais para com ele os sentimentos de antes.
O Senhor disse a Jacó: "Volta para a terra dos teus pais, para a tua parentela, e eu estarei contigo."
Então Jacó mandou Raquel e Lia vir ao campo junto dos seus rebanhos:
"Vejo, disse-lhes ele, pelo semblante de vosso pai, que ele não é mais para comigo o mesmo que antes. Mas o Deus de meu pai está comigo.
Sabeis que servi a vosso pai o melhor que pude,
enquanto ele zombou de mim, mudando dez vezes o meu salário; mas Deus não lhe permitiu causar-me prejuízo.
Quando ele dizia: os animais malhados serão o teu salário, todas as ovelhas davam à luz cordeiros malhados, e se dizia: os animais riscados serão o teu salário, todas as ovelhas davam à luz cordeiros riscados.
Foi Deus mesmo que tomou o rebanho de vosso pai para me dar.
No tempo em que os animais deviam conceber, eu levantava os olhos e via em sonhos que os bodes que cobriam as cabras eram listados, malhados e manchados.
Um anjo de Deus disse-me em sonhos: Jacó! Eis-me aqui, respondi.
Levanta os olhos e vê: todos os bodes que cobrem as cabras são listados, malhados e manchados, porque eu vi tudo o que te fez Labão.
Eu sou o Deus de Betel, onde tu me consagraste uma estela e me fizeste um voto. Agora, vamos, sai daqui e volta para a terra de tua família."
Raquel e Lia responderam: "Resta-nos porventura ainda alguma parte de herança na casa de nosso pai?
Não nos tratou ele como estrangeiras, vendendo-nos e devorando o nosso dinheiro?
Toda a riqueza, que Deus tomou de nosso pai, é para nós e para nossos filhos. Faze, pois, o que Deus te disse."
Levantou-se, pois, Jacó, e fez montar seus filhos e suas mulheres nos camelos.
Levou consigo todos os seus rebanhos, todos os bens que tinha ajuntado, o rebanho que lhe pertencia, adquirido em Padã-Arã, e partiu para junto de seu pai Isaac, na terra de Canaã.
Raquel, aproveitando um momento em que seu pai fora tosquiar suas ovelhas, roubou os terafim de seu pai;
e Jacó enganou Labão, o arameu, ocultando-lhe sua fuga.
Fugindo, pois, com tudo o que era seu, atravessou o rio e dirigiu-se para a montanha de Galaad.
Três dias depois, soube Labão da fuga de Jacó.
E, tomando consigo seus irmãos, perseguiu-o durante sete dias de marcha, e alcançou-o na montanha de Galaad.
Deus, porém, apareceu num sonho noturno a Labão, o arameu, e disse-lhe: "Guarda-te de dizer algo a Jacó."
Labão alcançou, pois, Jacó. Este havia levantado sua tenda na montanha, enquanto Labão e seus irmãos tinham plantado a sua na montanha de Galaad.
Labão disse a Jacó: "Que fizeste? Tu me enganaste, e conduziste minhas filhas como prisioneiras de guerra!
Por que fugiste dessa forma, e me lograste em lugar de me avisar? Eu te teria despedido com manifestações de júbilo e com cânticos, ao som do tamborim e da harpa.
Não me deixaste beijar meus filhos e minhas filhas! Procedeste como um insensato.
Eu poderia agora fazer-vos mal, mas o Deus de teu pai disse-me na última noite: Guarda-te de dizer algo a Jacó.
E, se partiste somente porque tinhas saudade da casa paterna, então por que roubaste os meus deuses?"
Jacó respondeu-lhe: "Tive medo, ao pensar que poderias tirar-me tuas filhas;
quanto aos teus deuses, porém, seja morto aquele que os tiver consigo! Examina o que está comigo, em presença de nossos parentes, e retoma o que é teu." Ora, Jacó ignorava o roubo de Raquel.
Labão entrou na tenda de Jacó, na de Lia e na das duas escravas, mas nada encontrou. Saindo da tenda de Lia, entrou na de Raquel.
Esta havia tomado os terafim e, colocando-os na sela do camelo, sentou-se em cima. Labão revistou toda a tenda, sem nada encontrar.
Raquel disse ao seu pai: "Não se irrite o meu senhor, se não posso levantar-me em sua presença, pois acho-me agora com a indisposição que costuma vir às mulheres." Revistou, pois, mas não encontrou os terafim.
Jacó encolerizou-se então contra Labão, e acabrunhou-o de censuras: "Qual é o meu crime?, disse-lhe ele. Qual é o meu pecado, para que te irrites desse modo contra mim?
Revistaste todas as minhas bagagens: que encontraste do que é teu? Mostra-me aqui em presença de meus parentes e dos teus, e sejam eles juízes entre nós dois.
Há vinte anos que estou em tua casa: tuas ovelhas e tuas cabras não abortaram, não comi os carneiros do teu rebanho.
Nunca te trouxe os animais estraçalhados pelas feras. Eu os repunha, pois tu o exigias, quer fossem roubados de dia, quer de noite.
Eu era queimado de dia pelo calor, e de noite pelo frio, e o sono fugia dos meus olhos.
Eis já vinte anos que estou em tua casa; servi-te catorze anos por tuas duas filhas, seis anos pelos teus rebanhos, e dez vezes modificaste o meu salário.
Se o Deus de meu pai, o Deus de Abraão, o Deus terrível de Isaac não se tivesse posto de meu lado, tu me terias hoje despedido com as mãos vazias. Deus viu minhas penas e meus trabalhos, e na última noite ele pronunciou-se.
Labão respondeu a Jacó: "Estas filhas são minhas filhas, estes filhos, meus filhos, e estes rebanhos, meus rebanhos: tudo o que vês é meu. Que farei eu agora contra minhas filhas, ou contra os filhos que elas deram ao mundo?
Vamos, façamos juntos um pacto que nos sirva de testemunho a nós dois."
Jacó tomou uma pedra e erigiu-a em estela,
e disse aos seus parentes: "Trazei pedras." E, tendo juntado muitas, fizeram um monte, sobre o qual comeram.
Labão chamou-o Yegar-Saaduta, e Jacó, Galaad.
Labão disse: "Este monte é hoje testemunha entre mim e ti",e por isso deu-se-lhe o nome de Galaad,
e também Mitspa, porque Labão disse ainda: "Que o Senhor nos vigie a nós ambos, quando nós nos tivermos despedido um do outro.
Se maltratares minhas filhas, e se tomares outras mulheres além delas, não é um homem que estará conosco. Mas toma cuidado, pois é Deus que será testemunha entre nós."
Labão disse ainda a Jacó: "Vês este monte de pedras e esta estela que levantei entre mim e ti.
Este monte é testemunho, e igualmente esta estela, de que eu não ultrapassarei este monte para o teu lado, e que tu não ultrapassarás este monte e esta estela para o meu lado para nos fazer mal.
O Deus de Abraão, o Deus de Nacor, o Deus de seus pais seja juiz entre nós!" E Jacó jurou pelo Deus terrível de Isaac.
Ofereceu um sacrifício sobre a montanha e convidou seus parentes para comer. Comeram e passaram a noite na montanha.
No dia seguinte pela manhã, Labão beijou seus filhos e suas filhas; abençoou-os e retomou o caminho de sua casa.
Gênesis 31:1-55
Jacó prossegui o seu caminho e encontrou uns anjos de Deus.
Ao vê-los, exclamou: "É aqui o acampamento de Deus!" Por isso deu àquele lugar o nome de Maanaim.
Despachou diante de si mensageiros a seu irmão Esaú, na terra de Seir, nos campos de Edom.
E deu-lhes esta ordem: "Eis o que direis ao meu senhor Esaú: Assim fala o teu servo Jacó: Habitei em casa de Labão onde estive até o dia de hoje.
Possuo bois, jumentos, ovelhas, servos e servas, e mando agora anunciá-lo ao meu senhor para encontrar graça diante dele."
Os mensageiros voltaram a Jacó, dizendo: "Fomos ter com Esaú: ele vem ao teu encontro com quatrocentos homens."
Jacó foi tomado de pavor e de angústia. Dividiu em dois grupos a gente que estava com ele, assim como as ovelhas, os bois e os camelos.
"Se Esaú, disse ele consigo, atacar um dos grupos e o destruir, ao menos o outro se salvará."
Depois Jacó disse: "Deus de meu pai Abraão, Deus de meu pai Isaac, Senhor que me dissesses: Volta para a tua terra, para o meio de tua parentela, e eu te beneficiarei,
eu sou indigno de todos os favores e de toda a fidelidade que tendes testemunhado ao vosso servo. Só tinha o meu bastão quando atravessei este Jordão, e eis que possuo agora dois acampamentos.
Salvai-me, eu vos peço, das mãos de meu irmão Esaú, pois temo que ele me venha atacar, sem poupar nem mãe nem filhos.
Entretanto, vós me dissestes: Eu te beneficiarei e tornarei tua posteridade inumerável como os grãos de areia do mar."
Jacó passou a noite naquele lugar. Escolheu entre os bens que possuía um presente para o seu irmão Esaú:
duzentas cabras, vinte bodes, duzentas ovelhas, vinte carneiros,
trinta camelas com suas crias, quarenta vacas, dez touros, vinte jumentas e dez jumentos.
Entregou-os aos servos, cada rebanho à parte, e disse-lhes: "Ide adiante de mim, e haja uma distância entre cada rebanho."
E deu esta ordem ao primeiro: "Quando meu irmão Esaú te encontrar e te perguntar quem és, aonde vais, e a quem pertence o rebanho que conduzes,
responderás: Pertence ao teu servo Jacó; é um presente que ele manda ao meu senhor Esaú; ele mesmo vem atrás de nós."
Deu a mesma ordem ao segundo, ao terceiro e a todos os que conduziam os rebanhos: "Quando encontrardes Esaú, disse ele, vós lhe direis a mesma coisa.
E direis que seu servo Jacó vos segue." "Eu o aplacarei, pensou ele, com este presente que me precede; e depois o verei pessoalmente; talvez me fará ele bom acolhimento."
Foi, pois, o presente adiante dele, e ele ficou aquela noite no acampamento.
Naquela mesma noite ele se levantou com suas duas mulheres, suas duas servas e seus onze filhos e passou o vau do Jaboc.
Tomou-os, e os fez passar a torrente com tudo o que lhe pertencia.
Jacó ficou só; e alguém lutava com ele até o romper da aurora.
Vendo que não podia vencê-lo, tocou-lhe aquele homem na articulação da coxa e esta deslocou-se, enquanto Jacó lutava com ele.
E disse-lhe: "Deixa-me partir, porque a aurora se levanta." "Não te deixarei partir respondeu Jacó, antes que me tenhas abençoado."
Ele perguntou-lhe: "Qual é o teu nome?" "Jacó."
"Teu nome não será mais Jacó, tornou ele, mas Israel, porque lutaste com Deus e com os homens, e venceste." Jacó perguntou-lhe:
"Peço-te que me digas qual é o teu nome." "Por que me perguntas o meu nome?", respondeu ele. E abençoou-o no mesmo lugar.
Jacó chamou àquele lugar Fanuel: "porque, disse ele, eu vi a Deus face a face, e conservei a vida".
O sol levantava-se no horizonte, quando ele passou Fanuel. E coxeava de uma perna.
É por isso que os israelitas, ainda hoje, não comem o nervo da articulação da coxa, porque aquele homem tinha tocado nesse nervo da articulação da coxa de Jacó.
Gênesis 32:1-32
Jacó, levantando os olhos, viu Esaú que avançava com quatrocentos homens. Repartiu então os filhos entre Lia, Raquel e as duas servas.
Colocou as servas com seus filhos na frente, depois Lia com os seus, e, por último Raquel com José.
E ele, passando adiante, prostrou-se até a terra sete vezes antes de se aproximar do seu irmão.
Mas Esaú correu-lhe ao encontro e beijou-o; ele atirou-se ao seu pescoço e beijou-o; e puseram-se a chorar.
Levantando os olhos, Esaú viu as mulheres e as crianças: "Quem são estes que tens contigo?", perguntou ele. "São, respondeu Jacó, os filhos que aprouve a Deus dar ao teu servo."
Aproximaram-se então as servas com seus filhos e prostraram-se.
Lia com seus filhos adiantaram-se por sua vez e prostraram-se, e, enfim, José e Raquel, que se prostraram também.
Esaú disse: "Que significa todo esse acampamento que encontrei?" "E, disse Jacó, para ganhar o favor de meu senhor."
Esaú disse-lhe: "Possuo muitos bens, meu irmão, guarda o que te pertence."
"Oh, suplico-te, replicou Jacó, se ganhei teu favor, aceita este presente de minhas mãos; porque te contemplei como se contempla Deus, e me fizeste bom acolhimento.
Aceita o presente que te ofereço; pois Deus cumulou-me de seus favores, e nada me falta." E tanto insistiu que Esaú aceitou.
Esaú disse: "Partamos, ponhamo-nos a caminho; eu te precederei."
Jacó disse-lhe: "Tu vês, meu senhor, que os meninos são delicados; e tenho de cuidar das ovelhas e vacas que amamentam; se os fizer caminhar ainda um só dia, morrerá todo o rebanho.
Que o meu senhor vá, pois, adiante de seu servo; eu seguirei devagar, ao passo do rebanho que vai adiante de mim, e ao passo dos meninos, até que chegue à casa de meu senhor em Seir."
"Permita-me ao menos, disse-lhe Esaú, deixar-te uma parte de meus homens." "Não é necessário, disse Jacó; basta-me ter achado graça aos olhos do meu senhor!"
No mesmo dia, Esaú retomou o caminho de Seir.
Jacó partiu para Socot, onde, tendo edificado uma casa, construiu também cabanas para o seu rebanho. Daí o nome de Socot dado a esse lugar.
De volta de Padã-Arã, Jacó chegou sem contratempos à cidade de Siquém, na terra de Canaã. E acampou diante da cidade.
Comprou por cem moedas de prata aos filhos de Hemor, pai de Siquém, o pedaço de terra onde havia levantado sua tenda.
Levantou aí um altar, ao qual chamou El-Deus de Israel.
Gênesis 33:1-20
Dina, a filha que Lia tinha dado a Jacó, saiu para ver as filhas da região.
Tendo-a visto Siquém, filho de Hemor, o heveu, príncipe daquela terra, raptou-a e dormiu com ela, violentando-a.
Seu coração prendeu-se a Dina, filha de Jacó: ele amou a jovem, e soube falar-lhe ao coração.
E disse então ao seu pai Hemor: "Dá-me esta jovem por mulher."
Ora, Jacó soube do ultraje que ele tinha feito à sua filha, mas, como seus filhos estivessem no campo com o rebanho, não disse nada até que voltassem.
Hemor, pai de Siquém, veio ter com Jacó para lhe falar.
Quando os filhos de Jacó, voltando do campo, souberam o que se tinha passado, indignaram-se muito, porque Siquém se tornara culpado de uma grande infâmia contra Israel, dormindo com a filha de Jacó. Isto são coisas que não se fazem.
Hemor disse-lhes então: "Meu filho Siquém está enamorado de vossa filha; dai-a por mulher, eu vos peço.
Aliai-vos conosco: dai-nos vossas filhas e desposai as nossas.
Habitai no meio de nós, pois a terra estará à vossa disposição; podereis estabelecer-vos e negociar nela, e adquirir propriedades."
De seu lado, Siquém disse ao pai e aos outros irmãos de Dina: "Ache eu graça aos vossos olhos, e dar-vos-ei o que pedirdes.
Seja qual for o preço de compra e os presentes que exigirdes, o que me fixardes, isto eu darei, contanto que me deis a jovem por mulher."
Os filhos de Jacó deram a Siquém e a Hemor uma resposta dolosa, porque Siquém havia ultrajado sua irmã Dina:
"Dar nossa irmã a um incircunciso, disseram eles, é uma coisa que não podemos fazer, porque isto seria desonroso para nós.
Só acederemos ao vosso desejo à condição de que vos torneis como nós, e que todos vossos varões sejam circuncidados.
Então vos daremos nossas filhas e desposaremos as vossas, habitaremos convosco e formaremos todos um só povo.
Mas se não nos quiserdes ouvir e não vos deixardes circuncidar, tomaremos nossa filha e nos retiraremos."
O seu oferecimento agradou a Hemor e ao seu filho.
O jovem não tardou em fazer o que se lhe pedia, porque estava enamorado da filha de Jacó. Era o homem mais considerado de sua família.
Hemor e seu filho foram à porta da cidade e disseram a seus concidadãos:
"Estes homens são pacíficos conosco; fiquem eles na terra e possam aí circular. A região é bastante espaçosa para eles, tanto para a direita como para a esquerda. Desposaremos suas filhas e eles desposarão as nossas.
Mas eles só consentem em ficar conosco, de modo a fazermos todos um só povo, com a condição de que todos os nossos varões sejam circuncidados como o são eles mesmos.
Com isso os seus rebanhos, os seus bens e todos os seus animais, tudo não será nosso? Aceitemos, pois, suas condições a fim de que se estabeleçam entre nós."
Todos os que passavam pela porta da cidade deixaram-se convencer por Hemor e Siquém, seu filho, e todos os varões foram circuncidados.
No terceiro dia, estando todos ainda doentes, os dois filhos de Jacó, Simeão e Levi, irmãos de Dina, tomaram cada um sua espada, penetraram na cidade, que de nada desconfiava, e mataram todos os varões.
Passaram ao fio de espada também Hemor e Siquém, seu filho; tiraram Dina da casa de Siquém e foram-se.
Os filhos de Jacó caíram impetuosamente sobre os mortos e assolaram a cidade, porque haviam ultrajado sua irmã.
Tomaram suas ovelhas, seus bois, seus jumentos e tudo o que havia na cidade como nos campos.
E levaram como espólio todos os seus bens, seus filhos, suas mulheres e tudo o que se encontrava em suas casas.
Jacó disse a Simeão e a Levi: "Vós me lançastes na confusão e me tornastes odioso aos habitantes desta terra, aos cananeus e aos ferezeus. Só tenho comigo alguns homens e, quando toda essa gente se congregar contra mim para me ferir, perecerei com minha família."
Eles responderam: "Porventura, devíamos deixar tratar nossa irmã como uma prostituta?"
Gênesis 34:1-31
Deus disse a Jacó: "Vamos, sobe a Betel e fica ali, e levanta um altar nesse lugar ao Deus que se manifestou a ti, quando fugias diante de teu irmão Esaú."
Jacó disse à sua família e à sua gente: "Tirai do meio de vós os deuses estrangeiros, purificai-vos e mudai vossos vestidos.
Vamos subir a Betel, onde levantarei um altar ao Deus que me ouviu no dia de minha aflição, e que esteve comigo durante minha viagem."
Entregaram a Jacó todos os deuses estrangeiros que tinham, assim como os brincos que traziam nas orelhas, e Jacó enterrou-os debaixo de um terebinto, perto de Siquém.
Partindo eles dali, Deus semeou o pânico nas cidades circunvizinhas, de sorte que não perseguiram os filhos de Jacó.
Chegou, portanto, Jacó com toda a sua gente à Luz, na terra de Canaã, hoje Betel.
Levantou aí um altar e deu a esse lugar o nome de El-Betel, porque foi aí que Deus lhe aparecera, quando fugia diante de seu irmão.
Foi então que morreu Débora, ama de Rebeca. E foi ali sepultada, ao pé de Betel, debaixo de um carvalho, ao qual se chamou carvalho dos Prantos.
Quando Jacó voltou de Padã-Arã, Deus apareceu-lhe novamente e o abençoou.
"Teu nome, disse-lhe ele, é Jacó. Tu não te chamarás mais assim, mas Israel." E chamou-o Israel.
Deus disse-lhe: "Eu sou o Deus todo-poderoso. Sê fecundo e multiplica-te. De ti nascerão um povo e uma assembléia de povos; e de teus rins sairão reis.
A terra que dei a Abraão e a Isaac, eu ta darei e à tua posteridade."
Depois, Deus retirou-se de junto dele.
No mesmo lugar onde Deus lhe falou, Jacó erigiu uma estela sobre a qual fez uma libação, e derramou óleo.
E deu o nome de Betel ao lugar onde Deus lhe tinha falado.
E partiram de Betel. Quando estavam a pouca distância de Efrata, Raquel deu à luz, e o seu parto foi penoso.
Durante as dores do parto, a parteira disse-lhe: "Não temas, porque ainda terás este filho."
E, estando prestes a render a alma - porque estava já agonizante - ela chamou o filho Benoni; o seu pai, porém, chamou-o Benjamim.
Raquel expirou e foi sepultada no caminho de Efrata, hoje Belém.
Jacó erigiu uma estela sobre seu túmulo; é a estela do túmulo de Raquel, que ainda hoje existe.
Israel partiu e plantou sua tenda além de Migdal-Eder.
Foi durante sua estada nessa região que Rubem foi dormir com Bala, concubina de seu pai, e Israel soube.
Os filhos de Jacó foram em número de doze. Filhos de Lia: Rubem, primogênito de Jacó, Simeão, Levi, Judá, Issacar e Zabulon.
Filhos de Raquel: José e Benjamim.
Filhos de Bala, escrava de Raquel: Dã e Neftali.
Filhos de Zelfa, escrava de Lia: Gad e Aser. Tais são os filhos nascidos a Jacó em Padã-Arã.
Jacó foi para junto de seu pai Isaac em Mambré, em Quiriat-Arbé, hoje Hebron, onde tinham habitado Abraão e Isaac.
E todos os dias da vida de Isaac foram cento e oitenta anos.
E morreu. A morte reuniu-o aos seus, velho e saciado de dias. Esaú e Jacó, seus filhos, sepultaram-no.
Gênesis 35:1-29
Eis a descendência de Esaú, também chamado Edom.
Esaú tomou suas mulheres entre as filhas de Canaã: Ada, filha de Elon, o hiteu; Oolibama, filha de Ana, filha de Sebeon, o heveu;
e Basemat, filha de Ismael, irmã de Nabaiot.
Ada deu a Esaú, Elifaz; Basemat deu à luz Rauel, e Oolibama deu à luz Jeus, Ielon e Coré.
Tais são os filhos nascidos a Esaú na terra de Canaã.
Esaú tomou suas mulheres, seus filhos e suas filhas, assim como todo o seu pessoal, seus rebanhos, seus animais e todos os bens que tinha adquirido na terra de Canaã, e mudou-se para longe de seu irmão Jacó.
Seus bens eram, com efeito, numerosos demais para que pudessem morar juntos, e a terra em que habitavam não lhes bastava, por causa dos seus muitos rebanhos.
Esaú estabeleceu-se na montanha de Seir. Esaú chamava-se também Edom.
Eis a descendência de Esaú, pai de Edom, na montanha de Seir.
Estes são os nomes dos filhos de Esaú: Elifaz, filho de Ada, mulher de Esaú; Rauel, filho de Basemat, mulher de Esaú.
Os filhos de Elifaz foram: Temã, Omar, Sefo, Gatão e Cenez.
Elifaz, filho de Esaú, tomou uma concubina, Tamna que lhe deu à luz Amalec. Estes são os filhos de Ada, mulher de Esaú.
Eis os filhos de Rauel: Naat, Zara, Sama e Meza. São estes os filhos de Basemat, mulher de Esaú.
Eis os filhos de Oolibama, filha de Ana, filha de Sebeon, mulher de Esaú: ela deu à luz Esaú, Jeus, Ielon e Coré.
Eis os chefes das tribos dos filhos de Esaú. Filhos de Elifaz, primogênito de Esaú: o chefe Temã, o chefe Omar, o chefe Sefo, o chefe Cenez, o chefe Coré,
o chefe Gatão, o chefe Amalec. Estes são os chefes saídos de Elifaz, na terra de Edom; tais são os filhos de Ada.
Filhos de Rauel, filho de Esaú: o chefe Naat, o chefe Zara, o chefe Sama e o chefe Meza. Tais são os chefes saídos de Rauel, na terra de Edom; estes são os filhos de Basemat, mulher de Esaú.
Filhos de Oolibama, mulher de Esaú: o chefe Jeus, o chefe Ielon e o chefe Coré. Estes são os chefes saídos de Oolibama, filha de Ana e mulher de Esaú.
Tais são os filhos de Esaú, e estes são os seus chefes; isto é, Edom.
Eis os filhos de Seir, o horreu, que habitava naquela terra: Lotã, Sobal, Sebeon, Ana,
Dison, Eser e Disã. Tais são os chefes dos horreus, filhos de Seir, na terra de Edom.
Os filhos de Lotã foram Hori e Hemã; a irmã de Lotã era Tama.
Eis os filhos de Sobal: Alvã, Manaat, Ebal, Sefo e Onão.
Eis os filhos de Sebeon: Aja e Ana. Foi este Ana que encontrou no deserto as fontes de águas quentes, quando pastoreava os jumentos de Sebeon, seu pai.
Eis os filhos de Ana: Dison e Oolibama, filha de Ana.
Eis os filhos de Dison: Handã, Esebã, Jetram e Caran.
Eis os filhos de Eser: Balã, Zavã e Acã.
Eis os filhos de Disã: Hus e Arão.
Eis os chefes dos horreus: o chefe Lotã, o chefe Sobal, o chefe Sebeon, o chefe Ana,
o chefe Dison, o chefe Eser, o chefe Disã. Estes são os chefes dos horreus, que governaram na terra de Seir.
Estes são os reis que reinaram na terra de Edom, antes que os filhos de Israel tivessem rei:
Bela, filho de Beor, reinou em Edom; sua cidade chamava-se Denaba.
Morrendo Bela, Jobab, filho de Zara, de Bosra, reinou em seu lugar.
Morto Jobab, Husão, da terra dos temanitas, reinou em seu lugar.
Morto Husão, Adad, filho de Badad, reinou em seu lugar; ele derrotou Madiã, nas terras de Moab; sua cidade chamava-se Avit.
Morto Adad, Semla, de Masreca, reinou em seu lugar.
Morto Semla, reinou em seu lugar, Saul, de Roobot, que está perto do rio.
À morte de Saul, Balanã, filho de Acor, reinou em seu lugar.
À morte de Balanã, filho de Acor, Hadar reinou em seu lugar; sua cidade chamava-se Faú; sua mulher chamava-se Meetabel, filha de Matred, filha de Mezaab.
Eis os nomes dos chefes saídos de Esaú, segundo suas tribos, seus territórios e seus nomes: o chefe Tama, o chefe Alva, o chefe Jetet,
o chefe Oolibama, o chefe Ela, o chefe Finon,
o chefe Cenez, o chefe Temã, o chefe Mabsar,
o chefe Magdiel, o chefe Hirão. Estes são os chefes de Edom. segundo suas residências na terra que ocupavam. Eis aí Esaú, pai de Edom.
Gênesis 36:1-43
Jacó habitou na região onde seu pai havia morado, na terra de Canaã.
Eis a história da descendência de Jacó: José, ainda jovem, com a idade de dezessete anos, apascentava o rebanho com seus irmãos, os filhos de Bala e os filhos de Zelfa, mulheres de seu pai; e ele contou ao seu pai as más conversas dos irmãos.
Israel amava José mais do que todos os outros filhos, porque ele era o filho de sua velhice; e mandara-lhe fazer uma túnica de várias cores.
Seus irmãos, vendo que seu pai o preferia a eles, conceberam ódio contra ele e não podiam mais tratá-lo com bons modos.
Ora, José teve um sonho, e o contou aos seus irmãos, que o detestaram ainda mais:
"Ouvi, disse-lhes ele, o sonho que tive:
estávamos ligando feixes no campo, e eis que o meu feixe se levantou e se pôs de pé, enquanto os vossos o cercavam e se prostravam diante dele."
Seus irmãos disseram-lhe: "Quererias, porventura, reinar sobre nós e tornar-te nosso senhor?" E odiaram-no ainda mais por causa de seus sonhos e de suas palavras.
José teve ainda outro sonho, que contou aos seus irmãos. "Tive, disse ele, ainda um sonho: o sol, a lua e onze estrelas prostravam-se diante de mim."
Ele contou isso ao seu pai e aos seus irmãos, mas foi repreendido por seu pai: "Que significa, disse-lhe ele, este sonho que tiveste? Viremos, porventura, eu, tua mãe e teus irmãos, a nos prostrar por terra diante de ti?"
Seus irmãos ficaram, pois, com inveja dele, mas seu pai guardou a lembrança desse acontecimento.
Os irmãos de José foram apascentar os rebanhos de seu pai em Siquém.
Israel disse a José: "Teus irmãos guardam os rebanhos em Siquém. Vem: vou mandar-te a eles." "Eis-me aqui", respondeu José.
"Vai, pois, ver se tudo corre bem a teus irmãos e ao rebanho, e traze-me notícias deles." Enviou-o do vale de Hebron, e José foi a Siquém.
Um homem encontrou-o errando pelo campo: "Que buscas?" perguntou ele.
"Busco meus irmãos, respondeu ele. Dize-me onde apascentam os rebanhos."
E o homem respondeu: "Partiram daqui e ouvi-os dizer: Vamos a Dotain." Partiu então José em busca dos seus irmãos e encontrou-os em Dotain.
Eles o viram de longe. Antes que José se aproximasse, combinaram entre si como o haveriam de matar;
e disseram: "Eis o sonhador que chega.
Vamos, matemo-lo e atiremo-lo numa cisterna; diremos depois que uma fera o devorou; e então veremos de que lhe aproveitaram os seus sonhos."
Ouvindo-o, porém, Rubem, quis livra-lo de suas mãos: "Não lhe tiremos a vida, disse ele.
Não derrameis sangue. Jogai-o naquela cisterna, no deserto, mas não levanteis vossa mão contra ele." Pois Rubem pensava livrá-lo de suas mãos para o reconduzir ao pai.
Quando José se aproximou de seus irmãos, eles o despojaram de sua túnica, daquela bela túnica de várias cores que trazia,
e jogaram-no numa cisterna velha, que não tinha água.
E, sentando-se para comer, eis que, levantando os olhos, viram surgir no horizonte uma caravana de ismaelitas vinda de Galaad. Seus camelos estavam carregados de resina, de bálsamo e de ládano, que transportavam para o Egito.
Então Judá disse aos seus irmãos: "Que nos aproveita matar nosso irmão e ocultar o seu sangue?
Vinde e vendamo-lo aos ismaelitas. Não levantemos nossas mãos contra ele, pois, afinal, é nosso irmão, nossa carne." Seus irmãos concordaram.
E, quando passaram os negociantes madianitas, tiraram José da cisterna e venderam-no por vinte moedas de prata aos ismaelitas, que o levaram para o Egito.
Rubem voltou à cisterna, e eis que José já não estava ali.
Rasgou então suas vestes e voltou para junto dos seus irmãos: "O menino desapareceu, disse ele. E eu, para onde irei?"
Tomaram então a túnica de José, mataram um cabrito e a mergulharam no seu sangue.
E mandaram-na levar ao seu pai com esta mensagem: "Eis o que encontramos: vê se não é, porventura, a túnica do teu filho."
Jacó reconheceu-a e exclamou: "É a túnica de meu filho! Uma fera o devorou! José foi estraçalhado!"
E, rasgando as vestes, cobriu-se de um saco, e chorou o seu filho por muito tempo.
Todos os seus filhos e filhas vieram consolá-lo, mas ele não aceitou nenhuma condolência: "É chorando, disse ele, que descerei para junto de meu filho na habitação dos mortos." Foi assim que o seu pai o chorou.
Os madianitas venderam-no a Putifar, no Egito, eunuco do faraó e chefe da guarda.
Gênesis 37:1-36
Naquele tempo, Judá, apartando-se dos seus irmãos, foi para a casa de um homem de Odolão, chamado Hira.
Judá viu ali a filha de um cananeu, de nome Sué, e desposou-a, unindo-se a ela.
Ela concebeu e deu à luz um filho, ao qual chamou Her.
Concebeu novamente e deu ao mundo um filho, e deu-lhe o nome de Onã.
E teve ainda um filho, que chamou Sela. Judá estava em Achzib na ocasião desse nascimento.
Judá escolheu para Her, seu primogênito, uma mulher chamada Tamar.
Her, porém, o primogênito de Judá, era mau aos olhos do Senhor, e o Senhor o feriu de morte.
Então Judá disse a Onã: "Vai, toma a mulher de teu irmão, cumpre teu dever de levirato e suscita uma posteridade a teu irmão."
Mas Onã, que sabia que essa posteridade não seria dele, maculava-se por terra cada vez que se unia à mulher do seu irmão, para não dar a ele posteridade.
Seu comportamento desagradou ao Senhor, que o feriu de morte também.
E Judá disse a Tamar, sua nora: "Conserva-te viúva em casa de teu pai até que meu filho Sela se torne adulto." "Não é bom, pensava ele consigo, que também ele morra como seus irmãos." E Tamar voltou a habitar na casa paterna.
Muito tempo depois, morreu a filha de Sué, mulher de Judá. Passado o luto, subiu Judá a Tamna para a tosquia de suas ovelhas, com seu amigo Hira, o odolamita.
E foi noticiado a Tamar: "Eis que o teu sogro sobe a Tamna para a tosquia de suas ovelhas."
Depôs ela então os seus vestidos de viúva, cobriu-se de um véu, e, assim disfarçada, assentou-se à entrada de Enaim, que se encontra no caminho de Tamna, pois via que Sela tinha crescido e não lha tinham dado por mulher.
Judá, vendo-a, julgou tratar-se de uma prostituta, porque tinha o rosto coberto.
E, chegando-se a ela no caminho, disse: "Queres juntar-te comigo?" {Ignorava ele que se tratava de sua nora.} Ela respondeu: "O que me darás para juntar-me contigo?"
"Mandar-te-ei um cabrito do meu rebanho." "Está bem; mas dá-me então um penhor, até que o tenhas enviado."
"Que penhor queres que eu te dê?" "Teu anel, teu cordão e o bastão que tens na mão." Ele os entregou; em seguida, aproximou-se dela e ela concebeu.
E levantando-se, partiu; tirou o seu véu e retomou seus vestidos de viúva.
E Judá mandou-lhe o cabrito por seu amigo, o odolamita, para retirar o penhor das mãos daquela mulher, mas ele, não a encontrando,
perguntou aos habitantes do lugar: "Onde está aquela prostituta que estava em Enaim, à beira do caminho?" Responderam-lhe: "Não há prostituta nesse lugar!"
Ele voltou para junto de Judá: "Não a encontrei, disse ele, e os moradores daquele lugar disseram-me que não havia nenhuma prostituta ali."
"Guarde ela o meu penhor, respondeu Judá, não nos tornemos ridículos! Eu mandei o cabrito; tu, porém, não a encontraste".
Mais ou menos três meses depois, vieram dizer a Judá: "Tamar, tua nora, conduziu-se mal: vê-se que está grávida." Judá respondeu: "Tirai-a para fora, que ela seja queimada!"
E, enquanto era conduzida, ela mandou dizer ao seu sogro: "Concebi do homem a quem pertence isto: examine bem, ajuntou ela, de quem são este anel, este cordão e este bastão."
Judá, reconhecendo-os, exclamou: "Ela é mais justa do que eu; pois que não a dei ao meu filho Sela." E não a conheceu mais.
E, na ocasião de dar à luz, eis que ela trazia dois gêmeos no seu ventre.
No parto, saindo uma mão, a parteira tomou-a e atou nela um fio vermelho, dizendo: "Este é o que saiu primeiro!"
Mas, como ele retirasse a mão, saiu o seu irmão. "Que brecha fizeste! exclamou a parteira: Que a brecha esteja sobre ti!"
E chamou-se-lhe Farés. Em seguida, veio o seu irmão, com o fio vermelho atado na mão. Deu-se-lhe o nome de Zara.
Gênesis 38:1-30
José foi conduzido ao Egito, e Putifar, um oficial egípcio do faraó, chefe da guarda, comprou-o aos ismaelitas que o levavam.
O Senhor estava com José, e tudo lhe prosperava. Morava na casa do seu senhor, o egípcio.
Seu senhor viu que o Senhor estava com ele e lhe fazia prosperar tudo o que empreendia.
José conquistou a simpatia do seu senhor, que o empregou ao seu serviço, pondo-o à testa de sua casa e confiando-lhe todos os seus bens.
Desde o momento em que José tomou o governo de sua casa e de todos os seus bens, o Senhor abençoou a casa do egípcio, por causa de José: a bênção do Senhor desceu sobre tudo o que lhe pertencia, na casa como nos campos.
Ele entregou todos os seus negócios a José, sem mais se preocupar de coisa alguma, exceto do que se alimentava. Ora, José era belo de corpo e de rosto.
E aconteceu, depois de tudo isto, que a mulher de seu senhor lançou seus olhos em José e disse-lhe: "Dorme comigo."
Mas ele recusou: "Meu senhor, disse-lhe ele, não me pede conta alguma do que se faz na casa, e confiou-me todos os seus bens.
Não há maior do que eu nesta casa; ele nada me interdisse, exceto tu, que és sua mulher. Como poderia eu cometer um tão grande crime e pecar contra Deus?"
Em vão se esforçava ela todos os dias, falando a José; ele não consentia em dormir com ela e unir-se a ela.
Certo dia, tendo ele entrado na casa para fazer seus serviços, e não se encontrando ali ninguém da casa,
ela segurou-o pelo manto, dizendo: "Dorme comigo!" Mas José, largando-lhe o manto nas mãos, fugiu.
Vendo a mulher que ele lhe tinha deixado o manto nas mãos e fugido,
chamou a gente de sua casa e disse-lhes: "Vede: trouxeram-nos este hebreu para a casa a fim de que ele abuse de nós. Este homem veio-me procurar para dormir comigo, mas eu gritei.
E vendo que eu me punha a gritar, deixou seu manto ao meu lado e fugiu."
E guardou junto de si as vestes de José até a volta de seu senhor.
E fez-lhe a mesma narrativa: "O escravo hebreu, disse ela, que nos trouxeste, veio à minha procura para abusar de mim.
Mas, pondo-me a gritar, deixou o seu manto ao meu lado e fugiu."
Ao ouvir isto de sua mulher, contando-lhe como se tinha comportado com ela o seu servo, ele enfureceu-se,
e lançou José na prisão, onde se encontravam detidos os prisioneiros do rei. E José foi encarcerado.
O Senhor estava com ele. Mostrou-lhe sua bondade e fez que ele conquistasse a simpatia do chefe da prisão.
Este confiou a José todos o presos que ali se encontravam, e nada se fazia sem sua ordem.
O chefe da prisão não fiscalizava nada do que fazia José, porque o Senhor estava com ele e fazia-lhe prosperar tudo o que empreendia.
Gênesis 39:1-23
Depois disto, aconteceu que o copeiro e o padeiro do rei do Egito ofenderam o seu senhor.
O faraó, encolerizado contra os seus dois oficiais, o copeiro-mor e o padeiro-mor,
mandou-os encarcerar na casa do chefe da guarda, na prisão onde se encontrava detido José.
O chefe da guarda associou-lhes José para os servir. Havia já um certo tempo que estavam detidos,
quando os dois prisioneiros, o copeiro e o padeiro do rei do Egito, tiveram um sonho numa mesma noite, cada um o seu, com seu sentido particular.
Quando José voltou junto deles no dia seguinte pela manhã, viu que estavam tristes.
Perguntou então aos oficiais do faraó, detidos com ele na casa do seu senhor: "Por que tendes hoje um ar sombrio?"
"Tivemos um sonho, responderam; e não há ninguém para no-los interpretar." "Porventura, não pertence a Deus, replicou José, a interpretação dos sonhos? Rogo-vos que mos conteis."
E o copeiro-mor contou seu sonho a José: "Em meu sonho, disse ele, vi uma cepa que estava diante de mim,
e nesta cepa três varas, que pareciam brotar; saiu uma flor e seus cachos deram uvas maduras.
Eu tinha na mão a taça do faraó; tomei as uvas e espremi-as na taça, que entreguei na mão do faraó."
José disse-lhe: "Eis o significado do teu sonho: as três varas são três dias.
Dentro de três dias, o faraó te reabilitará em tuas funções. Apresentarás ao faraó sua taça, como o fazias antes, quando eras seu copeiro.
Quando fores feliz, lembra-te de mim e faze-me o favor de recomendar-me ao faraó, para que ele me tire desta prisão.
Porque é por um rapto que fui tirado da terra dos hebreus, e aqui, igualmente, eu nada fiz para merecer a prisão."
O padeiro-mor, vendo que José tinha dado uma boa interpretação, disse-lhe: "Eu também, em meu sonho, levava sobre minha cabeça três cestas de pão branco.
Nada de cima, havia toda a sorte de manjares para o faraó; mas as aves do céu comiam-nas na cesta que estava sobre minha cabeça."
"Eis, disse José, o que isto significa: as três cestas são três dias.
Dentro de três dias, o faraó levantará a tua cabeça: ele te suspenderá numa forca, e as aves devorarão a tua carne."
No terceiro dia, celebrava-se o aniversário natalício do faraó, e ele ofereceu um banquete todo o seu pessoal. Ele levantou a cabeça do copeiro-mor, no meio de todos os seus servos:
restabeleceu no seu cargo o copeiro-mor, que apresentou novamente a taça ao faraó,
e mandou suspender no patíbulo o padeiro-mor, segundo a interpretação que José lhes havia dado.
Mas o copeiro-mor não pensou mais em José; esqueceu-o.
Gênesis 40:1-23
Dois anos depois, o faraó teve um sonho: encontrava-se ele perto do Nilo,
de onde saíram sete vacas belas e gordas, que se puseram a pastar a verdura.
Mas, eis que saíram em seguida do mesmo Nilo sete outras vacas, feias e magras, que vieram e se puseram ao lado das outras na margem do rio.
As vacas feias e magras devoraram as sete vacas belas e gordas. E o faraó despertou.
Adormeceu de novo e teve outro sonho: sete espigas grossas e belas saíam de uma mesma haste.
Mas eis que em seguida germinaram sete outras espigas, magras e ressequidas pelo vento do oriente.
E as espigas magras devoraram as sete espigas grossas e cheias. E o faraó despertou: era um sonho.
Chegada a manhã, o faraó com o espírito preocupado, mandou chamar todos os mágicos e sábios do Egito. Contou-lhes seus sonhos, mas nenhum deles soube explicá-los.
Então o copeiro-mor disse-lhe: "Vou confessar a minha falta.
Um dia, tendo-se o faraó irado contra os seus servos, mandou-me meter na prisão em casa do chefe da guarda, com o padeiro-mor.
Eis que uma noite tivemos nós dois um sonho, cada um o seu.
Ora, estava lá conosco um jovem hebreu, escravo do chefe da guarda. Contamos-lhe nossos sonhos, e ele no-los interpretou, a cada um o seu.
E os acontecimentos confirmaram sua interpretação: eu fui restabelecido no meu cargo, e o outro foi pendurado."
O faraó mandou chamar José, o qual foi, imediatamente, tirado do cárcere. Ele barbeou-se, trocou de roupas e apresentou-se diante do faraó.
Este disse-lhe: "Tive um sonho que ninguém pôde interpretar. Mas ouvi dizer de ti, que basta contar-te um sonho para que tu o expliques."
"Não sou eu, respondeu José, mas é Deus quem dará ao faraó uma explicação favorável."
O faraó disse então a José: "Em meu sonho, eu estava à margem do Nilo,
e eis que do Nilo saíram sete vacas gordas e belas, que se puseram a pastar a verdura.
E saíram em seguida sete outras vacas magras, feias e disformes, como jamais vi em todo o Egito.
As vacas magras e feias devoraram as sete primeiras, as gordas,
que entraram em seu ventre como se nada fossem, pois ficaram tão macilentas e feias como antes. Nesta altura despertei.
E tive outro sonho: vi elevar-se de uma mesma haste sete espigas cheias e belas.
Mas eis que sete outras espigas medíocres, finas e queimadas pelo vento do oriente, germinaram em seguida;
e as espigas magras engoliram as sete belas espigas. Em vão contei tudo isto aos mágicos; nenhum deles pôde dar-me a explicação".
José disse ao faraó: "O {duplo} sonho do faraó reduz-se a um só. Deus revelou ao faraó o que ele vai fazer.
As sete belas vacas são sete anos, e as sete belas espigas, igualmente, sete anos; o sonho é um só.
As sete vacas magras e feias que saíram em seguida são também sete anos; e as sete espigas vazias e queimadas pelo vento do oriente serão sete anos de miséria.
É como eu disse ao faraó: Deus lhe revela o que vai fazer.
Haverá sete anos de grande abundância para todo o Egito.
Virão em seguida sete anos de miséria que farão esquecer toda a abundância no Egito. A fome devastará o país.
E a abundância do país não será mais notada, por causa da fome que se seguirá, porque será violenta.
Se o sonho se repetiu duas vezes ao faraó, é que a coisa está bem decretada da parte de Deus, que vai apressar-se em executá-la.
Agora, pois, escolha o rei um homem sábio e prudente para pô-lo à testa do país.
Nomeie também o faraó administradores no país, que recolham a quinta parte das colheitas do Egito, durante os sete anos de abundância.
Eles ajuntarão todos os produtos destes bons anos que vêm, e armazenarão o trigo nas cidades, à disposição do faraó como provisões a conservar.
Estes mantimentos formarão para o país uma reserva em previsão dos sete anos de fome que assolarão o Egito. Dessa forma o país não será arruinado pela fome."
Essas palavras agradaram o faraó e toda a sua gente.
"Poderíamos, disse-lhes ele, encontrar um homem que tenha, tanto como este, o espírito de Deus?"
E disse em seguida a José: "Pois que Deus te revelou tudo isto, não haverá ninguém tão prudente e tão sábio como tu.
Tu mesmo serás posto à frente de toda a minha casa, e todo o meu povo obedecerá à tua palavra: só o trono me fará maior do que tu."
"Vês, disse-lhe ainda, eis que te ponho à testa de todo o Egito."
E o faraó, tirando o anel de sua mão, pôs na mão de José; e o fez revestir-se de vestes de linho fino e meteu-lhe ao pescoço um colar de ouro.
E, fazendo-o montar no segundo dos seus carros, mandou que se clamasse diante dele: "Ajoelhai-vos!" É assim que ele foi posto à frente de todo o Egito,
e o faraó disse-lhe: "Sou eu o faraó: sem tua permissão não se moverá a mão nem o pé em toda a terra do Egito."
O faraó chamou a José Tsafenat-Paneac, e deu-lhe por mulher Asenet, filha de Putifar, sacerdote de On.
José tinha trinta anos quando se apresentou diante do faraó, o rei do Egito. Ele retirou-se da casa do faraó e percorreu todo o país.
A terra produziu abundantemente durante os sete anos de fertilidade.
José ajuntou todo o produto destes sete anos no Egito e os pôs em reserva nas cidades, e os mantimentos dos campos que estavam ao redor de cada cidade, guardou-os na mesma cidade.
José ajuntou trigo como a areia do mar, em tal quantidade que se não podia contar, pois que ela excedia a toda a medida.
Antes que viesse o ano de fome, nasceram a José dois filhos, que lhe deu Asenet, filha de Putifar, sacerdote de On.
José chamou ao primeiro Manassés, "porque, dizia ele, Deus fez-me esquecer de todo o meu trabalho e de toda a minha família."
Chamou ao segundo Efraim, "porque, disse ele, Deus tornou-me fecundo na terra de minha aflição."
Tendo acabado os sete anos de abundância que houve no Egito,
os sete anos de miséria começaram, assim como o tinha predito José. A fome assolou todos os países, mas havia pão em toda a terra do Egito.
Em seguida houve fome também no Egito, e o povo clamou ao faraó pedindo pão. Este disse a todos os egípcios: "Ide a José, e fazei o que ele vos disser."
Como a fome assolasse toda a terra, José abriu todos os celeiros e vendeu víveres aos egípcios. Mas a penúria cresceu no Egito.
E de toda a terra vinha-se ao Egito comprar trigo a José, porque a fome era violenta em toda a terra.
Gênesis 41:1-57
Jacó, sabendo que havia trigo no Egito, disse aos seus filhos: "Por que estais olhando uns para os outros?
Eu soube que há trigo no Egito. Descei lá e comprai-o para nós; poderemos assim viver e escaparemos à morte."
E os dez irmãos de José desceram ao Egito para comprar trigo.
Jacó não deixou partir com seus irmãos Benjamim, irmão de José, "com medo, pensava ele, de que lhe acontecesse alguma desgraça."
Os filhos de Israel chegaram, pois, no meio de uma multidão de outros para comprar víveres, porque a fome reinava na terra de Canaã.
José era o governador de toda a região, e era ele quem vendia o trigo a todo o mundo. Desde sua chegada, os irmãos de José prostraram-se diante dele com o rosto por terra.
José reconheceu-os imediatamente, mas, comportando-se com eles como um estrangeiro, disse-lhes com rudeza: "Donde vindes?" "Da terra de Canaã, responderam eles, para comprar víveres."
Foi assim que José reconheceu a seus irmãos, mas eles não o reconheceram.
E lembrava-se dos sonhos que tivera outrora a respeito deles; disse-lhes: "Vós sois espiões: viestes explorar os pontos fracos do país."
"Não, meu senhor, responderam, teus servos vieram comprar víveres.
Somos todos filhos dum mesmo pai, somos gente honesta; teus servos não são espiões."
"Não é verdade -, disse-lhes ele, viestes explorar os pontos fracos do país."
Eles responderam: "Somos doze irmãos, filhos dum mesmo pai, na terra de Canaã. O mais novo está agora em casa de nosso pai, o outro já não existe."
José disse-lhes: "É bem como eu disse: sois espiões.
Sereis, aliás, postos à prova: pela vida do faraó, não saireis daqui antes que tenha vindo vosso irmão mais novo.
Mandai um de vós buscá-lo; enquanto isso, ficareis prisioneiros. Vossas palavras serão assim provadas, e veremos se dissestes a verdade. Do contrário, pela vida do faraó, sois espiões!"
E mandou metê-los numa prisão durante três dias.
No terceiro dia, José disse-lhes: "Fazei isto, e vivereis, porque sou cheio do temor a Deus.
Se sois gente de bem, que um dentre vós fique detido em prisão; e os outros partam levando o trigo para alimentar vossas famílias.
Trazei-me então vosso irmão mais novo, para que eu possa verificar a verdade de vossas palavras, e não morrereis." Foi o que fizeram.
Disseram uns aos outros: "Em verdade, expiamos o crime cometido contra o nosso irmão, porque víamos a angústia de sua alma quando ele nos suplicava, e não o escutamos! Eis por que veio sobre nós esta desgraça!"
"Não vos tinha eu dito, disse-lhes Rubem, para não pecardes contra o menino? Não quisestes ouvir-me, e eis agora que nos é reclamado o seu sangue!"
Ora, não sabiam que José os compreendia, porque lhes tinha falado por meio de um intérprete.
E José afastou-se deles para chorar. Voltou em seguida e falou-lhes; e escolheu Simeão, ao qual mandou prender na presença deles.
José ordenou depois que se enchessem de trigo os seus sacos, e que se pusesse o dinheiro de cada um em seu saco de viagem, e também que se lhes dessem provisões para o caminho: assim foi feito.
Eles carregaram o trigo sobre os seus jumentos e partiram.
Na estalagem, abrindo um deles o seu saco para dar de comer ao seu jumento, viu que o seu dinheiro estava na boca do saco.
"Devolveram-me o meu dinheiro, disse ele aos seus irmãos; ei-lo aqui no meu saco!" Desfaleceu-se-lhes o coração, e, tomados de espanto, disseram uns aos outros: "Que é isto que Deus nos fez?"
Voltaram para junto de Jacó, seu pai, na terra de Canaã, e contaram-lhe nestes termos tudo o que lhes tinha acontecido:
"O homem que governa o país nos falou asperamente e nos tomou por espiões.
Dissemos-lhe que éramos gente honesta, e não espiões;
que éramos doze irmãos, filhos dum mesmo pai, dos quais um já não existia mais, e o mais novo estava no momento com nosso pai, na terra de Canaã.
O governador do país disse-nos: por isso reconhecerei se sois gente de bem: deixai junto de mim um de vossos irmãos, levai o trigo que precisais para alimentar vossas famílias, e parti.
Conduzir-me-eis então vosso irmão mais novo: assim saberei que não sois espiões, mas gente honesta. Eu vos devolverei então vosso irmão, e podereis negociar no país."
E, esvaziando os seus sacos, eis que o pacote de dinheiro de cada um se encontrava em seu saco. Quando eles e seu pai viram seu dinheiro, tiveram medo.
Jacó disse-lhes: "Vós me tirais os meus filhos! José já não existe, Simeão tampouco, e quereis me tomar ainda Benjamim! Tudo vem cair sobre mim!"
Rubem disse-lhe: "Tira a vida aos meus dois filhos, se eu não te reconduzir Benjamim! Confia-o a mim: eu to reconduzirei."
"Meu filho, tornou Jacó, não descerá convosco, porque seu irmão morreu, e só resta ele. Se lhe acontecesse um acidente nesta viagem que ides fazer, faríeis descer os meus cabelos brancos à habitação dos mortos, sob o peso da dor."
Gênesis 42:1-38
A fome pesava sobre o país.
E tendo acabado o trigo trazido do Egito, o pai disse aos seus filhos: "Voltai e comprai-nos um pouco de víveres."
Judá respondeu-lhe: "Aquele homem nos declarou formalmente que não voltássemos à sua presença sem levar conosco nosso irmão.
Se mandas nosso irmão conosco, desceremos para comprar víveres.
Mas, se o não deixas ir, não desceremos, porque ele nos disse: Não sereis admitidos em minha presença, se vosso irmão não estiver convosco."
Israel disse: "Por que me fizestes este mal, dando-lhe a conhecer que tínheis ainda um irmão?"
"Aquele homem, responderam eles, perguntou por nós e por nossa família, e quis saber se nosso pai vivia ainda, se tínhamos outro irmão; e respondemos às suas perguntas. Podíamos, porventura, adivinhar que ele nos ia mandar levar a ele o nosso irmão?"
E Judá disse a Israel, seu pai: "Deixa partir o menino comigo, e pôr-nos-emos a caminho para essa viagem. Desse modo poderemos viver, e escaparemos à morte, nós, tu e nossos filhinhos.
Eu respondo por ele: é de mim que tu o reclamarás. Se eu não to reconduzir e não o recolocar diante de ti, serei eternamente culpado diante de ti.
Se não tivéssemos demorado tanto, certamente já pela segunda vez estaríamos de volta."
"Se assim é, disse-lhes Israel, seu pai, tomai em vossas bagagens os melhores produtos da terra, e levai-os como presente a esse homem: um pouco de bálsamo, um pouco de mel, resina, ládano, nozes de pistácia e amêndoas.
Levai também convosco o dinheiro em dobro para restituir a soma que encontrastes na boca dos sacos, certamente por engano.
Tomai vosso irmão, parti e ide ter com esse homem.
Que o Deus todo-poderoso vos faça ganhar os favores desse homem, a fim de que ele deixe voltar vosso irmão, juntamente com Benjamim. Quanto a mim, se devo ser privado de meus filhos, paciência, que eu seja privado deles!"
Tomaram, pois, consigo o presente e uma soma dobrada de dinheiro, assim como Benjamim, e partiram para o Egito. E apresentaram-se a José.
José, vendo-os e com eles Benjamim, disse ao seu intendente: "Faze entrar estes homens na casa, mata um animal, e prepara-o, pois comerão comigo ao meio-dia."
Fez o intendente como José tinha dito: introduziu-os na casa de José.
Vendo isto, ficaram amedrontados: "É, diziam eles, por causa do dinheiro, encontrado da outra vez nos nossos sacos, que nos conduzem aqui. Vão-nos assaltar, cair sobre nós, escravizar-nos e apoderar-se de nossos jumentos."
Então, aproximando-se do intendente da casa de José, falaram-lhe à entrada da casa:
"Desculpa, meu senhor, disseram eles, viemos já uma vez comprar víveres.
Quando chegamos à estalagem e abrimos nossos sacos, o dinheiro de cada um se encontrava na boca de seu saco: era o peso exato do dinheiro. Tornamos a trazê-lo conosco;
e trazemos, ao mesmo tempo, outro dinheiro para comprar víveres. Não sabemos quem tenha metido nosso dinheiro em nossos sacos."
"Ficai tranqüilos, respondeu-lhes ele, nada temais. É o vosso Deus, o Deus de vossos pais, quem vos pôs um tesouro em vossos sacos; o vosso dinheiro me foi entregue." Depois trouxe-lhes Simeão.
Fê-los em seguida entrar na casa de José, deu-lhes água para lavarem os pés e forragem para os seus jumentos.
E, enquanto esperavam por José, que devia voltar ao meio-dia, preparavam o seu presente, pois foi-lhes anunciado que comeriam em casa dele.
Logo que José entrou em casa, ofereceram-lhe os presentes que tinham trazido, prostrando-se diante dele até a terra.
Ele perguntou pela saúde deles e ajuntou: "Vosso velho pai, do qual me falastes, vai bem? Ainda vive?"
"Teu servo, nosso pai, está passando bem; e vive ainda", responderam-lhe inclinando-se até o solo.
Então, levantando os olhos, José viu Benjamim, seu irmão, filho de sua mãe. "É este, disse ele, vosso irmão mais novo do qual me falastes?" E ajuntou: "Que Deus te faça misericórdia, meu filho!"
E retirou-se precipitadamente, porque suas entranhas se tinham comovido por causa de seu irmão, e tinha vontade de chorar; entrou em seu quarto e deu livre curso às lágrimas.
Depois de ter lavado o rosto saiu e, procurando dominar-se, disse: "Servi a mesa".
Serviu-se-lhe à parte, seus irmãos também à parte, e igualmente à parte os egípcios, seus comensais, porque lhes é proibido comer com hebreus; isto é para eles uma coisa abominável.
Os irmãos de José foram colocados diante dele, desde o mais velho até o mais novo, segundo sua idade, o que lhes fez olhar uns para os outros assombrados.
José mandou que se lhes trouxessem porções de sua própria mesa, e a parte de Benjamim foi cinco vezes maior que a dos outros. Eles beberam e alegraram-se com ele.
Gênesis 43:1-34
José deu esta ordem ao intendente de sua casa: "Enche de víveres os sacos destes homens tanto quanto possam conter, e põe o dinheiro de cada um na boca do saco.
Porás minha taça de prata na boca do saco do mais novo, com o preço do seu trigo". E fez o intendente como José lhe mandara.
De manhã, ao romper do dia, foram despedidos com seus jumentos.
Deixaram a cidade, mas, não tendo ido ainda muito longe, José disse ao seu intendente: "Levanta-te e persegue estes homens e, quando os tiveres alcançado, dir-lhes-ás: Por que pagastes o bem com o mal?
{A taça que roubastes} é aquela em que bebe o meu senhor e da qual se serve para suas adivinhações. Fizestes muito mal."
O intendente, tendo-os alcançado, falou-lhes desse modo.
Eles responderam-lhe: "Por que fala assim o meu senhor? Longe de teus servos a idéia de fazerem semelhante coisa!
Nós te trouxemos de Canaã o dinheiro que tínhamos encontrado na boca dos sacos. Por que, pois, haveríamos de roubar prata ou ouro na casa de teu senhor?
Que aquele dos teus servos com quem for encontrada a taça morra, e, ao mesmo tempo, nós nos tornemos escravos do meu senhor".
"Está bem! disse-lhes ele. Seja como dissestes! Aquele com quem for encontrada a taça será meu escravo. Vós outros sereis livres."
E, imediatamente, pôs cada um o seu saco por terra e o abriu.
O intendente revistou-os começando pelo mais velho e acabando pelo mais novo; e a taça foi encontrada no saco de Benjamim.
Eles rasgaram suas vestes e, tendo cada um carregado de novo o seu jumento, voltaram para a cidade.
Judá e seus irmãos entraram em casa de José, que estava ainda em sua casa, e prostraram-se por terra diante dele.
José disse-lhes: "Que é isso que fizestes? Não sabíeis que sou um homem dotado da faculdade de adivinhar?"
Judá respondeu: "Que podemos dizer a meu senhor? Que falaremos? Como nos justificar? Deus descobriu o crime de teus servos. Somos os escravos do meu senhor, nós e aquele junto de quem foi encontrada a taça."
"Longe de mim, replicou José, o pensamento de agir dessa forma! Mas aquele em poder de quem foi encontrada a taça, esse será o meu escravo. Vós outros, voltai em paz para junto de vosso pai."
Então Judá adiantou-se e disse a José: "Rogo-te, meu senhor, que permitas ao teu servo dizer uma palavra aos ouvidos do meu senhor, e não se acenda a tua ira contra o teu servo, porque tu és como o próprio faraó.
Meu senhor havia perguntado aos seus servos: Tendes ainda vosso pai? Tendes um irmão?
E nós havíamos respondido ao meu senhor que tínhamos um velho pai e um irmãozinho, filho de sua velhice, do qual o irmão havia morrido; e que, como ele foi deixado o único de sua mãe, seu pai o amava.
Disseste aos teus servos: Trazei-o para junto de mim, a fim de que o veja com meus olhos.
Havíamos respondido ao meu senhor que o menino não podia abandonar o seu pai, pois, se o fizesse, seu pai morreria.
E disseste aos teus servos: Se vosso irmãozinho não vier convosco, não sereis admitidos na minha presença.
Quando voltamos para a casa do teu servo, nosso pai, referimos-lhe as palavras do meu senhor.
E, quando nosso pai nos mandou voltar para comprar alguns víveres,
respondemos-lhe: Não podemos descer. Mas, se nosso irmão mais novo nos acompanhar, fá-lo-emos, pois que não seremos admitidos na presença do governador, se nosso irmão não for conosco.
Teu servo, nosso pai, nos replicou: Sabeis que minha mulher me deu dois filhos.
Um desapareceu de minha casa, e eu disse: Certamente foi devorado. E não mais o revi até hoje.
Se me tirais ainda este, e lhe acontecer alguma desgraça, fareis descer os meus cabelos brancos à habitação dos mortos, sob o peso da dor.
Se agora volto para junto de teu servo, meu pai, sem levar conosco o menino, ele, cuja vida está ligada à do menino,
desde que notar que ele não está conosco, morrerá. E teus servos terão feito descer à habitação dos mortos, sob o peso da aflição, os cabelos brancos do teu servo, nosso pai.
Ora, o teu servo respondeu pelo menino junto de meu pai; e disse-lhe que, se ele não lho reconduzisse, seria eternamente culpado para com seu pai.
Rogo-te, pois: aceita que teu servo fique escravo de meu senhor em lugar do menino, para que este possa voltar com seus irmãos.
Como poderia eu apresentar-me diante do meu pai, se o menino não for comigo? Oh, eu não poderia suportar a dor que sobreviria a meu pai!"
Gênesis 44:1-34
Então José, já não se podendo conter diante de todos os assistentes, exclamou: "Fazei sair todo o mundo." Desse modo, ninguém ficou com ele, quando se deu a conhecer aos seus irmãos.
Pôs-se a chorar tão alto que os egípcios da casa do faraó o ouviram.
E disse aos seus irmãos: "Eu sou José! Meu pai vive ainda?" Mas não lhe puderam responder, porque estavam pasmados de se encontrar diante dele.
"Aproximai-vos", disse-lhes ele; e eles aproximaram-se. E ele disse-lhes: "Eu sou José, vosso irmão, que vendestes para o Egito.
Mas agora não vos entristeçais, nem tenhais remorsos de me ter vendido para ser conduzido aqui. É para vos conservar a vida que Deus me enviou adiante de vós.
Porque eis já dois anos que a fome assola a terra, e haverá ainda cinco anos sem amanho nem colheita.
Deus enviou-me adiante de vós para que subsista um resto de vossa raça na terra, e para vos conservar a vida por uma grande libertação.
Não sois vós, pois, que me haveis mandado para aqui, mas Deus mesmo. Ele tornou-me como o pai do faraó, chefe de toda a sua casa e governador de todo o Egito.
Apressai-vos em voltar para junto de meu pai e dizei-lhe: Eis o que diz o teu filho José: Deus elevou-me ao cargo de chefe de todo o Egito. Vem para junto de mim sem demora.
Habitarás na terra de Gessém, bem perto de mim, com teus filhos, teus netos, tuas ovelhas, teus bois e tudo o que te pertence.
Eu te sustentarei, pois haverá ainda cinco anos de fome; e assim não cairás na miséria, nem tu, nem tua casa, nem nada do que te pertence.
Vereis com vossos olhos, e meu irmão Benjamim também, que sou bem eu quem vos fala.
Contai ao meu pai as honras que recebo no Egito, e tudo o que vistes, e depois apressai-o para que venha para cá."
Então ele jogou-se ao pescoço de seu irmão Benjamim e pôs-se a chorar; Benjamim também chorou sobre os seus ombros.
Beijou em seguida a todos os seus irmãos, chorando sobre eles, e puseram-se todos a conversar com ele.
A notícia da chegada dos irmãos de José espalhou-se logo na casa do faraó, e foi bem acolhida pelo faraó e por todo o seu pessoal.
Ele disse a José: "Dize a teus irmãos: Eis o que ides fazer: carregai vossos animais e voltai à terra de Canaã.
Tomai vosso pai e vossas famílias e vinde para junto de mim. Dar-vos-ei o que há de melhor no Egito e vos alimentarei com a gordura da terra.
Encarrego-te de dizer-lhes: Eis o que ides fazer: Tomai carros no Egito para vossos filhos e vossas mulheres, trazei vosso pai e vinde!
Não façais caso do que tereis de deixar, porque o que há de melhor em todo o Egito é vosso."
Assim fizeram os filhos de Israel. Seguindo a ordem do faraó, José deu-lhes carros e provisões para o caminho.
Deu-lhes também a todos mudas de roupas; a Benjamim, porém, deu trezentas moedas de prata e cinco mudas de roupas.
Mandou, igualmente, ao seu pai dez jumentos carregados dos melhores produtos do Egito e dez jumentas carregadas de trigo, pão e provisões para sua viagem.
E, despedindo seus irmãos que partiam, disse-lhes: "Não alterqueis pelo caminho."
Partiram do Egito e chegaram junto de Jacó, seu pai, na terra de Canaã.
E anunciaram-lhe a boa nova: "José vive ainda, disseram-lhe eles; e é mesmo ele quem governa todo o Egito." Mas o coração de Jacó permaneceu frio, porque não acreditava no que ouvia.
Entretanto, quando lhe disseram todas as palavras que José lhes havia dito, e viu os carros que José tinha enviado para o transportar, seu espírito se reanimou.
"Basta! disse ele; José, meu filho, vive ainda. Irei e o verei antes de morrer."
Gênesis 45:1-28
Israel partiu com tudo o que lhe pertencia. Chegou a Bersabéia, onde ofereceu sacrifícios ao Deus de seu pai Isaac.
Em uma visão noturna Deus disse-lhe: "Jacó! Jacó!" "Eis-me aqui", respondeu ele.
E Deus disse: "Eu sou Deus, o Deus de teu pai. Não temas descer ao Egito, porque ali farei de ti uma grande nação.
Descerei contigo ao Egito, e eu mesmo te farei de novo subir de lá. José fechar-te-á os olhos."
E Jacó deixou Bersabéia. Os filhos de Israel levaram seu pai, assim como seus filhos e suas mulheres, nos carros que o faraó tinha enviado para os transportar.
Tomaram também seus rebanhos e os bens que tinham adquirido na terra de Canaã,
e Jacó com toda a sua família partiu para o Egito. Levou consigo os seus filhos e seus netos, suas filhas e suas netas, enfim, toda a sua família.
Eis os nomes dos filhos de Israel que foram para o Egito: Jacó e seus filhos.
O primogênito de Jacó: Rubem. Os filhos de Rubem: Henoc, Falu, Esron e Carmi.
Os filhos de Simeão: Jamuel, Jamin, Aod, Jaquim, Soar, e Saul, filho da Cananéia.
Os filhos de Levi: Gerson, Gaat e Merari.
Os filhos de Judá: Her, Onã, Sela, Farés e Zara. Her e Onã, porém, morreram em Canaã. Os filhos de Farés: Hesron e Hamul.
Os filhos de Issacar: Tola, Fua, Jó e Semron.
Os filhos de Zabulon: Sared, Elon e Jaelel.
São estes os filhos que Lia deu a Jacó em Padã-Arã, assim como sua filha Dina. Total de seus filhos e filhas: trinta e três pessoas.
Os filhos de Gad: Sefion, Hagi, Suni, Esebon, Heri, Arodi e Areli.
Os filhos de Aser: Jamné, Jesua, Jessui e Beria, assim como sua irmã Sara. Os filhos de Beria: Heber e Melquiel.
São estes os filhos que Zelfa, dada por Labão à sua filha Lia, deu à luz a Jacó: dezesseis pessoas.
Filhos de Raquel, mulher de Jacó: José e Benjamim.
No Egito José tivera de Asenet, filha de Putifar, sacerdote de On, Manassés e Efraim.
Os filhos de Benjamim: Bela, Bocor, Asbel, Gera, Naamã, Equi, Ros, Mofim, Ofim e Ared.
São estes os filhos que Raquel deu a Jacó. Total: quatorze pessoas.
Filho de Dan: Husim.
Filhos de Neftali: Jasier, Guni, Jeser e Salém.
São estes os filhos que Bala, dada por Labão à sua filha Raquel, deu à luz a Jacó. Total: sete pessoas.
O total das pessoas saídas de Jacó, que vieram com ele para o Egito, sem contar as mulheres de seus filhos, era de setenta ao todo.
José teve dois filhos nascidos no Egito. O total das pessoas da família de Jacó que foram para o Egito era de setenta.
Jacó tinha enviado Judá adiante dele para informar a José de sua chegada a Gessém. Quando chegaram a Gessém,
José mandou preparar o seu carro e montou para ir ao encontro de seu pai em Gessém. E, logo que o viu, jogou-se ao seu pescoço e chorou longo tempo em seus braços.
"Agora posso morrer, disse-lhe Israel, porque vi o teu rosto, e vives ainda!"
José disse aos seus irmãos: "Vou avisar o faraó, dizendo: Meus irmãos e a família de meu pai que estavam em Canaã, vieram para junto de mim;
os homens são pastores, criadores de animais, e trouxeram suas ovelhas e seus bois com tudo o que lhes pertence.
Quando o faraó mandar chamar-vos e vos perguntar qual é vossa profissão,
responder-lhe-eis: Teus servos foram sempre criadores de animais, desde sua juventude até o presente, e nossos pais também. Desse modo podereis ficar na terra de Gessém, porque os egípcios têm aversão aos pastores."
Gênesis 46:1-34
José foi, pois, informar o faraó: "Meu pai, disse ele, e meus irmãos chegaram da terra de Canaã com suas ovelhas, seus bois e tudo o que lhes pertence. Eles estão na terra de Gessém."
José levara consigo cinco de seus irmãos, que apresentou ao faraó.
Este disse-lhes: "Qual é vossa profissão?" Responderam: "Teus servos são pastores, como sempre o foram nossos pais.
Viemos, ajuntaram eles, para morar no país porque não há mais pastagem para os rebanhos de teus servos, sendo muito grande a fome na terra de Canaã. Permite, pois, aos teus servos habitarem na terra de Gessém."
O faraó disse a José: "Teu pai e teus irmãos vieram para junto de ti; a terra do Egito está à tua disposição: instala-os na melhor parte do país.
Que eles habitem na terra de Gessém; e, se conheces entre eles alguns que sejam capazes, pô-los-ás à frente dos rebanhos que me pertencem."
José fez então vir Jacó, seu pai, e o apresentou ao faraó.
Jacó abençoou o faraó. Este disse-lhe: "Que idade tens?"
Jacó respondeu-lhe: "O número dos anos de minha peregrinação é de cento e trinta anos. Curtos e maus foram os anos de minha vida, e não atingiriam o número dos que viveram meus pais durante sua peregrinação."
E, depois de ter abençoado o faraó, Jacó despediu-se dele.
José instalou seu pai e seus irmãos em uma propriedade do país do Egito, na melhor parte da região, a terra de Ramsés, como o tinha ordenado o faraó.
E José forneceu víveres a seu pai, a seus irmãos e a toda sua família, proporcionalmente ao número dos filhos.
E faltou pão em toda a terra, porque a fome era tão violenta que a terra do Egito e a terra de Canaã estavam esgotadas.
José tinha ajuntado todo o dinheiro que se encontrava no Egito e em Canaã, como preço do trigo que compravam, e o tinha depositado no tesouro do faraó.
Quando havia acabado todo o dinheiro do Egito e de Canaã, todos os egípcios vieram dizer a José: "Dá-nos pão. Por que morreremos na tua presença por falta de dinheiro?"
José respondeu: "Trazei vossos animais, se não tendes dinheiro, e dar-vos-ei pão em troca."
Trouxeram, pois, seus animais a José, o qual lhes deu pão em troca dos cavalos, dos rebanhos de ovelhas, dos bois e dos jumentos. Dessa forma, naquele ano, fornecera-lhes pão em troca de todos os seus rebanhos.
E aquele ano passou. No ano seguinte, voltaram a ele e disseram-lhe: "Não podemos ocultar do meu senhor que o dinheiro, tendo-se esgotado, e nossos animais, tendo já passado para as mãos de meu senhor, não nos restam agora senão nossos corpos e nossas terras para oferecer ao meu senhor.
Por que perecermos diante de teus olhos, nós e nossas terras? Compra-nos a nós e a nossas terras em troca de pão, e nós e nossas terras seremos escravos do faraó. Dá-nos sementes, para que vivamos e não morramos, e não seja desolado o nosso solo".
José adquiriu, assim, para o faraó, todas as terras do Egito, porque cada egípcio vendia o seu campo, obrigado pela fome; e o país tornou-se propriedade do faraó.
De um extremo a outro do território, ele reduziu a população à servidão.
As terras dos sacerdotes foram as únicas que não comprou, porque estes recebiam do faraó uma ração determinada para o seu sustento. Por isso não venderam suas propriedades.
José disse ao povo: "Eu vos comprei hoje, vós e vossas terras, para o faraó. Aqui tendes sementes: semeai vossos campos.
No tempo da colheita, dareis a quinta parte ao faraó: as outras quatro partes vos servirão para semente do campo e para vosso alimento com vossos filhos e os que moram convosco."
Eles responderam: "Tu nos salvaste a vida. Tenhamos graça aos olhos de meu senhor e seremos de bom grado escravos do faraó."
José instituiu assim uma lei que ainda hoje está em vigor, em virtude da qual uma quinta parte da colheita pertence ao faraó. Somente as terras dos sacerdotes não se tornaram sua propriedade.
Israel estabeleceu-se, pois, no Egito, na terra de Gessém. Adquiriram aí propriedades, foram fecundos e multiplicaram-se grandemente.
Jacó viveu ainda dezessete anos no Egito. A duração de sua vida foi de cento e quarenta e sete anos.
E, aproximando-se do seu termo os dias de Israel, chamou o seu filho José e disse-lhe: "Se achei graça diante de teus olhos, mete, rogo-te, tua mão debaixo de minha coxa e promete-me, com toda a bondade e fidelidade, que não me enterrarás no Egito.
Quando eu me tiver deitado com meus pais, levar-me-ás para fora do Egito e me enterrarás junto deles em seu túmulo." José respondeu: "Farei como dizes." "Jura-mo", replicou Jacó.
José jurou-lhe e Israel prostrou-se sobre a cabeceira de sua cama.
Gênesis 47:1-31
Depois disso, vieram anunciar a José: "Teu pai está doente." Tomou então com ele seus dois filhos, Manassés e Efraim.
Jacó foi avisado disso: "Eis, disseram-lhe, que o teu filho José vem te ver". Israel, reunindo suas forças, assentou-se no seu leito.
E disse a José: "O Deus todo-poderoso apareceu-me em Luz, na terra de Canaã, e abençoou-me.
Disse-me: Eu te tornarei fecundo e te multiplicarei até fazer de ti uma assembléia de povos, e darei esta terra à tua posteridade em possessão eterna.
Agora, os dois filhos que te nasceram no Egito antes que eu viesse para junto de ti, são meus filhos: Efraim e Manassés são meus, com o mesmo título que Rubem e Simeão.
Os filhos, porém, que tiveste depois deles, são teus: é conforme o nome de seus irmãos que eles terão parte na repartição da herança.
Quando eu voltava de Padã, tua mãe Raquel morreu em caminho, perto de mim, na terra de Canaã, a alguma distância de Efrata; foi ali que a enterrei, no caminho de Efrata, hoje Belém."
Israel viu os filhos de José e disse: "Quem são estes?"
"São, respondeu José, os filhos que Deus me deu aqui". "Faze-os aproximarem-se, para que eu os abençoe".
Os olhos de Israel tinham-se enfraquecido tanto pela idade, que já não podia ver. José fê-los aproximarem-se dele e Israel, tomando-os em seus braços, beijou-os.
Depois disse a José: "Não esperava mais rever-te, e eis que Deus me fez ver teus filhos".
José tirou-os dos joelhos de seu pai e prostrou-se com o rosto por terra.
Tomou depois os dois, Efraim pela mão direita, para colocá-lo à esquerda de Israel, e Manassés pela mão esquerda, para colocá-lo à direita de Israel, e fê-los aproximarem-se.
Mas Israel estendeu a mão direita e pô-la sobre a cabeça de Efraim, o caçula, e a mão esquerda sobre a cabeça de Manassés. Cruzou assim as mãos {porque Manassés era o primogênito}.
Israel abençoou José, dizendo: "O Deus em cujo caminho andaram meus pais Abraão e Isaac, o Deus que tem sido o meu pastor durante toda a minha vida até este dia,
o anjo que me guardou de todo o mal, abençoe estes meninos! Seja perpetuado neles o meu nome e o de meus pais Abraão e Isaac, e multipliquem-se abundantemente nesta terra!"
Vendo José que seu pai tinha colocado a mão direita sobre a cabeça de Efraim, contrariou-se e tomou a mão de seu pai para removê-la da cabeça de Efraim para a cabeça de Manassés.
E disse-lhe: "Não assim, meu pai; é este aqui o primogênito; põe tua mão direita sobre sua cabeça".
Seu pai, porém, recusou: "Eu sei, meu filho, disse ele, eu sei. Ele também se tornará um povo e será grande; mas seu irmão mais novo crescerá mais do que ele e sua posteridade tornar-se-á uma multidão de nações".
Abençoou-os, pois, naquele dia, e disse: "Israel vos nomeará em suas bênçãos; dir-se-á: Deus te torne semelhante a Efraim e a Manassés". Foi assim que ele pôs Efraim na frente de Manassés.
Israel disse a José: "Vou morrer. Mas Deus estará convosco e vos reconduzirá à terra de vossos pais.
Dou-te a mais que teus irmãos, uma porção que conquistei aos amorreus com minha espada e meu arco".
Gênesis 48:1-22
Jacó chamou seus filhos e lhes disse: "Reuni-vos, porque eu quero anunciar-vos o que vos há de acontecer nos dias vindouros:
Ajuntai-vos e ouvi, filhos de Jacó. Escutai Israel, vosso pai.
Rubem, tu és o meu primogênito, minha força, primícias do meu vigor. Notável em dignidade e notável em poder.
Transbordante como a água, não terás o primeiro lugar, porque subiste ao leito de teu pai, e desse modo maculaste o meu leito.
Simeão e Levi são irmãos; suas espadas são instrumentos de violência.
Minha alma não participe de suas maquinações, meu coração jamais se associe às suas reuniões! Porque em sua cólera mataram homens e em seu furor enervaram touros.
Maldita cólera que os levou à violência, maldito furor que os induziu à crueldade! Hei de dispersá-los em Jacó, hei de espalhá-los em Israel.
Judá, teus irmãos te louvarão. Pegarás pela nuca os inimigos; os filhos de teu pai se prostrarão em tua presença.
Filhote de leão, Judá: voltas trazendo a caça, meu filho. Dobra-se, deita-se como um leão; como uma leoa: quem o despertará?
Não se apartará o cetro de Judá, nem o bastão de comando dentre seus pés, até que venha aquele a quem pertence por direito, e a quem devem obediência os povos.
Amarra à videira o jumentinho, à cepa o filho da jumenta. Lava com o vinho suas vestes, com o sangue das uvas o seu manto.
O vinho aumenta o brilho de seus olhos, seus dentes são brancos como o leite.
Zabulon habita à beira do mar, no litoral, onde aportam os navios, e seu flanco se estende por Sidon.
Issacar é um jumento forte, deitado nos currais.
Vê que é bom o descanso e a terra agradável: curva os ombros sob a carga, sujeita-se ao tributo.
Dã julgará seu povo, como uma das tribos de Israel.
Dã será uma serpente no caminho, uma cobra na estrada, que morde a pata do cavalo e derruba o cavaleiro.
Espero em vosso socorro, Senhor!
Gad será saqueado por quadrilhas de assaltantes, mas também os assaltará e perseguirá.
Aser tem um pão saboroso, que constitui as delícias dos reis.
Neftali é uma gazela solta, que tem lindos filhotes.
José é broto de uma árvore fértil, broto de uma árvore fértil junto à nascente: seus ramos crescem acima do muro.
Provocam-no, atiram contra ele, atacam-no os flecheiros,
mas, seu arco permanece firme, seus braços e mãos desembaraçados pelas mãos do Poderoso de Jacó, pelo nome do Pastor, que é a pedra de Israel,
graças ao Deus de teu pai, que te ajuda, graças ao todo-poderoso, que te abençoa com as bênçãos do céu altíssimo, com as bênçãos do profundo abismo, com as bênçãos dos peitos e do seio.
As bênçãos de teu pai sobrepujam as bênçãos das antigas montanhas, as aspirações das colinas eternas. Que elas desçam sobre a cabeça de José, sobre a fronte do príncipe de seus irmãos!
Benjamim, lobo voraz, de manhã devora a presa e à tarde reparte o despojo."
São estes todos que formam as doze tribos de Israel. Foi isso que lhes disse seu pai ao abençoá-los. A cada um deu uma bênção particular.
Em seguida, fez-lhes esta recomendação: "Eis que vou ser reunido aos meus. Enterrai-me junto de meus pais na caverna da terra de Efrom, o hiteu,
na caverna da terra de Macpela, defronte de Mambré, na terra de Canaã, essa caverna que Abraão havia comprado a Efrom, o hiteu, ao mesmo tempo que a terra, para ter a propriedade de uma sepultura.
Foi aí que enterraram Abraão e Sara, sua mulher; foi aí que enterraram Isaac e Rebeca, sua mulher; e foi aí que enterrei Lia".
{Essa propriedade, bem como a caverna que nela se encontra, foram compradas aos filhos de Het.}
E, tendo Jacó dado aos seus filhos esta última recomendação, recolheu os pés em sua cama, e expirou. E foi reunido aos seus.
Gênesis 49:1-33
José atirou-se então sobre o rosto de seu pai e o beijou chorando.
Ordenou depois aos médicos que o serviam, que embalsamassem seu pai; e os médicos embalsamaram Israel.
Gastaram nisso quarenta dias, que é o tempo necessário ao embalsamamento. Os egípcios choraram-no durante setenta dias.
Passado o tempo do pranto, José disse à casa do faraó: "Se achei graça aos vossos olhos, dizei de minha parte ao faraó
que meu pai me fez jurar-lhe: Eu vou morrer, disse-me ele; tu me enterrarás no túmulo que adquiri na terra de Canaã. Permite-me, pois, subir e enterrar meu pai; depois voltarei".
O faraó respondeu: "Vai sepultar teu pai como ele te fez jurar".
José partiu para sepultar seu pai. Todos os servos do faraó, os anciãos de sua casa e todos os anciãos do Egito,
toda a casa de José, seus irmãos e a casa de seu pai o seguiram. Deixaram na terra de Gessém somente seus filhinhos, suas ovelhas e seus bois.
Carros e cavaleiros acompanhavam-no, de sorte que a caravana era muito grande.
Chegando à eira de Atad, além do Jordão, fizeram uma grande e solene lamentação, e José celebrou, em honra de seu pai, um pranto de sete dias.
Vendo esse pranto na eira de Atad, o povo daquela terra disse: "Grande pranto é esse dos egípcios!" Daí o nome de Abel-Misraim dado a esse lugar, que está situado além do Jordão.
Os filhos de Jacó fizeram, pois, o que ele lhes tinha ordenado.
Levaram-no para Canaã e enterraram-no na caverna da terra de Macpela, que Abraão tinha comprado, juntamente com a propriedade de Efrom, o hiteu, defronte de Mambré, para ter a propriedade de uma sepultura.
Depois do enterro, José voltou para o Egito com seus irmãos e todos os que o tinham acompanhado nos funerais de seu pai.
Os irmãos de José, vendo que seu pai morrera, disseram entre si: "Será que José nos tomará em aversão e irá vingar-se de todo o mal que lhe fizemos?"
Mandaram, pois, dizer-lhe: "Antes de morrer, teu pai recomendou-nos
que te pedíssemos perdão do crime que teus irmãos cometeram, de seu pecado, de todo o mal que te fizeram. Perdoa, pois, agora esse crime àqueles que servem o Deus de teu pai". Ouvindo isso, José chorou.
Seus irmãos vieram jogar-se aos seus pés, dizendo: "Somos teus escravos!"
José disse-lhes: "Não temais: posso eu pôr-me no lugar de Deus?
Vossa intenção era de fazer-me mal, mas Deus tirou daí um bem; era para fazer, como acontece hoje, com que se conservasse a vida a um grande povo.
Não temais, pois: eu vos sustentarei a vós e a vossos filhos". Estas palavras, que lhes foram direito ao coração, reconfortaram-nos.
José habitou no Egito, e também a família de seu pai. Viveu cento e dez anos.
Viu os descendentes de Efraim até a terceira geração. Igualmente, os filhos de Maquir, filho de Manassés, vieram à luz sobre os joelhos de José.
José disse a seus irmãos: "Vou morrer; mas Deus vos visitará seguramente e vos fará subir desta terra para a terra que jurou dar a Abraão, Isaac e a Jacó".
E José fez que os filhos de Israel jurassem: "Quando Deus vos visitar, disse ele, levareis daqui os meus ossos".
José morreu com a idade de cento e dez anos. Foi embalsamado e depositado num sarcófago no Egito.
Gênesis 50:1-26`;
