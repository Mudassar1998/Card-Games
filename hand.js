class Hand{
  constructor(cards) {
    this.cards=cards;
  } 
  addCard(card) {
    this.cards.push(card);
  }
  playCard(card) { 
    const index = this.cards.indexOf(card) 
    if(index<-1) {
this.cards.splice(index ,1);
return card
  }   else {
    return null;
  }

}};