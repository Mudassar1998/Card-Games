class deck {
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
		} return deck;
	}

shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 50; i++)
	{
		let location1 = Math.floor((Math.random() * Deck1.length));
		let location2 = Math.floor((Math.random() * Deck1.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}
};
const Deck1 = new deck(["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"], ["spades", "diamonds", "clubs", "hearts"]);

Deck1.generateCards();
console.log(Deck1.generateCards());
console.log(Deck1.shuffle());


