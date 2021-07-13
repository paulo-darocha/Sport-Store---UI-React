import kayak from "../images/kayak.jpg";
import lifejacket from "../images/lifejacket.jpg";
import bolaFutebol from "../images/bolaFutebol.jpg";
import stadium from "../images/stadium.jpg";
import cornerFlag from "../images/cornerFlag.jpg";
import thinkingCap from "../images/thinkingCap.jpg";
import unsteadChair from "../images/unsteadChair.jpg";
import humanChessC from "../images/humanChessC.jpg";
import blingKing from "../images/blingKing.jpg";
import pranchSurf from "../images/pranchSurf.jpg";
import tabuleiroXadrez from "../images/tabuleiroXadrez.jpg";
import baliza from "../images/baliza.jpg";
import standUpBoard from "../images/standUpBoard.jpg";

const initialData = () => {
	return {
		categories: [
			{ name: "Watersports", description: "" },
			{ name: "Futebol", description: "" },
			{ name: "Chess", description: "" }
		],
		products: [
			{
				id: 1, name: "Kayak", category: "Watersports",
				description: "A boat for one person", price: 275,
				image: kayak, detail: "Suas qualidades de deslizamento, controle e manobrabilidade tornam o Ouassou" +
					" em um caiaque na “praia” muito divertido. O design de sua popa com alças integradas permite alongar" +
					", nadar com barbatanas e embarcar facilmente. O Ouassou também é ideal para o surf. A espátula de" +
					" seu capacete vem diretamente das pranchas de surf longboard e dos caiaques de rodeio. É rápido e" +
					" manobrável. Sua face fina e suas bordas proporcionam uma surpreendente estabilidade direcional."
			},
			{
				id: 2, name: "Lifejacket", category: "Watersports",
				description: "Protective and fashionable", price: 48.95,
				image: lifejacket, detail: "A nossa equipa de entusiastas desenvolveu este colete o praticante de kayak," +
					" stand up paddle (SUP), vela ou catamaran de nível principiante. Colete de ajuda à flutuação 50 N leve," +
					" corte cavado, fácil de vestir e ajustar. Permite uma boa liberdade de movimentos, independentemente" +
					" do desporto náutico que praticar. Flutuabilidade: 50N. Cumpre norma EN ISO 12402-5. Correia entrepernas" +
					" tam. 25-40 kg"
			},
			{
				id: 3, name: "Bola de Futebol", category: "Futebol",
				description: "FIFA-approved size and weight", price: 19.50,
				image: bolaFutebol, detail: "Concebida para treinos e jogos, não tem costuras e está certificada pela FIFA," +
					" para te garantir um desempenho de alto nível no terreno. O seu design dinâmico está inspirado no aspeto" +
					" único da bola de jogo oficial da UEFA Champions League."
			},
			{
				id: 4, name: "Corner Flags", category: "Futebol",
				description: "Give your playing field a professional touch",
				price: 34.95, image: cornerFlag, detail: ""
			},
			{
				id: 5, name: "Stadium", category: "Futebol",
				description: "Flat-packed 35,000-seat stadium", price: 795,
				image: stadium, detail: ""
			},
			{
				id: 6, name: "Thinking Cap", category: "Chess",
				description: "Improve brain efficiency by 75%", price: 16,
				image: thinkingCap, detail: ""
			},
			{
				id: 7, name: "Unsteady Chair", category: "Chess",
				description: "Secretly give your opponent a disadvantage",
				price: 29.95, image: unsteadChair, detail: ""
			},
			{
				id: 8, name: "Human Chess Board", category: "Chess",
				description: "A fun game for the family", price: 75,
				image: humanChessC, detail: ""
			},
			{
				id: 9, name: "Bling Bling King", category: "Chess",
				description: "Gold-plated, diamond-studded King", price: 27.8,
				image: blingKing, detail: "Bling King Firework Performance: 16 shots with crackling tails and bursts, " +
					"with red silver & green peonies with glitter. The best thing about the Bling King firework is..." +
					" The bling factor! This short and sweet firework provides you with all the bling to add to your display." +
					" Which firework should you buy alongside Bling King? With Bling King being a shorter duration firework" +
					" it would go well going alongside a longer duration firework like Wildfire or Celestial Conquest." +
					" Bling King would compliment them well!"
			},
			{
				id: 10, name: "Prancha de Surf", category: "Watersports",
				description: "Prancha de Surf em espuma 6'900. Vendida com 3 quilhas. Olaian", price: 202,
				image: pranchSurf, detail: "Concebida pela nossa equipa de surfistas apaixonadas para os praticantes que querem surfar" +
					" com toda a segurança ondas de 50 cm a 1,50m. Uma prancha de surf em espuma de gama alta ideal em termos de" +
					" segurança em spots sobrelotados. Desenvolvida no nosso centro de conceção em Hendaia na costa Basca"
			},
			{
				id: 11, name: "Xadrez Dobrável Grande", category: "Chess",
				description: "Grande conjunto de xadrez dobrável de madeira magnética felted game board 39cm * 39cm interior", price: 119,
				image: tabuleiroXadrez, detail: "Grande conjunto de xadrez dobrável de madeira magnética felted game board 39cm * 39cm interior." +
					" Especificação: Idade: >5 Anos Material: Modo de ensino de madeira: Tipo de livro: Damas e xadrez Is_customized: Sim. " +
					"Marca: Nordic, Categoria: Jogos de Tabuleiro, Cor: Tabuleiro de xadrez de 39CM, " +
					"Identificação da Fruugo: 56045287-114172434, EAN: 3503930778614, Matrícula de retalhista:"
			},
			{
				id: 12, name: "Baliza de Futebol Media", category: "Futebol",
				description: "Balizas de futebol SG 500 em aço, equipadas com verdadeiros cantos.", price: 55,
				image: baliza, detail: "Procura uma baliza de futebol resistente? Desenvolvemos a gama Classic Goal SG 500" +
					" em aço, equipadas com verdadeiros cantos, para se descobrir as sensações do jogo. Resistência à abrasão: Com estrutura" +
					" e forma específica em aço, resiste aos choques e às intempéries. Facilidade de montagem / desmontagem: Montagem" +
					" sem parafusos nem ferramentas. Estabilidade: Estável em todas as superfícies mesmo sem aderência (estacas)."
			},
			{
				id: 13, name: "Tabela de sup inflável ZRay R2", category: "Watersports",
				description: "Inflável paddle Comprimento: 14,0 (426cm) Largura: 28 (71cm) Espessura: 15 cm", price: 559,
				image: standUpBoard, detail: "Este tabuleiro de corrida vai surpreendê-lo com seu incrível desempenho na água; além disso, graças" +
					" à sua forma estreita e pontuda ela vai cortar a água melhor. O Zray R2 será perfeito na água e você vai" +
					" sentir como se estivesse voando quando o vento soprar a seu favor. Seu volume e rigidez de 340 litros" +
					" permitem que você navegue na água sem fazer quase nenhum esforço. Equipada com tecnologia DR HD, esta" +
					" placa está mais rígida do que nunca. O Zray R2 tem um kick pad na parte de trás da placa, que é destinado" +
					" para quem já tem mais experiência. Graças a este bloco você será capaz de fazer manobras quando você" +
					" participar de competições ou orientar sua prancha quando você navegar em favor do vento."
			}
		],
		orders: []
	}
};

export default initialData;





// const initialData = () => {
//     return { 
//         categories: ["Watersports", "Futebol", "Chess"],
//         products: [
//             { id: 1, name: "Kayak", category: "Watersports", 
//                 description: "A boat for one person", price: 275 },
//             { id: 2, name: "Lifejacket", category: "Watersports", 
//                 description: "Protective and fashionable", price: 48.95 },
//             { id: 3, name: "Futebol Ball", category: "Futebol", 
//                 description: "FIFA-approved size and weight", price: 19.50 },
//             { id: 4, name: "Corner Flags", category: "Futebol", 
//                 description: "Give your playing field a professional touch", 
//                 price: 34.95 },
//             { id: 5, name: "Stadium", category: "Futebol", 
//                 description: "Flat-packed 35,000-seat stadium", price: 79500 },
//             { id: 6, name: "Thinking Cap", category: "Chess", 
//                 description: "Improve brain efficiency by 75%", price: 16 },
//             { id: 7, name: "Unsteady Chair", category: "Chess", 
//                 description: "Secretly give your opponent a disadvantage", 
//                 price: 29.95 },
//             { id: 8, name: "Human Chess Board", category: "Chess", 
//                 description: "A fun game for the family", price: 75 },
//             { id: 9, name: "Bling Bling King", category: "Chess", 
//                 description: "Gold-plated, diamond-studded King", price: 1200 }
//         ],
//         orders: []
//     }
//   };

//   export default initialData;