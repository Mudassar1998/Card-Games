class Deck {
	constructor(ranks, suits, cards) {
		this.ranks = ranks;
		this.suits = suits;
		this.cards = cards;
	}
	generateCards() {
		let deck = new Array();
		for (let i = 0; i < this.suits.length; i++) {
			for (let x = 0; x < this.ranks.length; x++) {
				let card = { Rank: this.ranks[x], Suit: this.suits[i] };
				deck.push(card);
			}
		} 
		this.cards=deck
		return deck;
	}
	shuffleCards() {
		
		return shuffle(this.cards);
	
	}
	draw(){
		return this.cards.pop();
	}
	deal(numHands, cardsPerHand){
		const hands = [];
		for (let i=0; i<numHands; i++){
			const hand = new Hand();
			for (let j=0; i<cardsPerHand; j++){
				const card = this.draw();
				hand.addCard(card);
			}
			hands.push(hand);
		}
		return hands;
	}
};
function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}


const Deck1 = new Deck(["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"], ["spades", "diamonds", "clubs", "hearts"]);

Deck1.generateCards();

console.log(Deck1);



