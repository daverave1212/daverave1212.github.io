

function mapDatabase(){
	var map = {};
	for(let i = 0; i<Database.length; i++){
		map[Database[i].name] = Database[i];
	}
	return map;
}


function Card(n, c, t, cost, text, race, power){
	this.name = "Default";
	this.civilization = "Light";
	this.type = "Evolution Creature";
	this.cost = 1337;
	this.text = "This is not supposed to be here";
	this.race = "Guardian";
	this.power = 13337;
	this.isFaceUp = true;
	
}

CardDatabase = null;
setTimeout(function(){
	//console.log(Database.createCard("Fear Fang"))
	CardDatabase = mapDatabase();
	CardDatabase.createCard = function(cardName){
		let theCard = CardDatabase[cardName];
		return new Card(cardName, theCard.civilization, theCard.type, theCard.cost, theCard.text, theCard.race, theCard.power);
	}
}, 2000);



function Player(){
	this.hand = new CardZone();
	this.battleZone = new CardZone();
	this.deck = new CardZone();
	this.manaZone = new CardZone();
	this.graveyard = new CardZone();
	
	this.deck.loadRandomDeck = function(){
		for(let i = 1; i<=5; i++){ this.addCardFromDatabase("Fear Fang")}
		for(let i = 1; i<=5; i++){ this.addCardFromDatabase("Reusol, the Oracle")}
		for(let i = 1; i<=5; i++){ this.addCardFromDatabase("Aqua Vehicle")}
		for(let i = 1; i<=5; i++){ this.addCardFromDatabase("Skeleton Soldier, the Defiled")}
		for(let i = 1; i<=5; i++){ this.addCardFromDatabase("Writhing Bone Ghoul")}
		for(let i = 1; i<=5; i++){ this.addCardFromDatabase("Immortal Baron, Vorg")}
	}
	
	this.draw = function(){
		this.hand.addCardFaceDown(this.deck.popTopCard());
	}
}

function CardZone(){
	this.cards = []

	this.addCardFaceUp = function(card){
		card.isFaceUp = true
		this.cards.push(card)
	}
	this.addCardFaceDown = function(card){
		card.isFaceUp = false
		this.cards.push(card)
	}
	this.populateRandomly = function(){
		for(let i = 1; i<=2; i++){ this.addCardFaceDown(CardDatabase.createCard("Fear Fang"))}
		for(let i = 1; i<=2; i++){ this.addCardFaceDown(CardDatabase.createCard("Reusol, the Oracle"))}
		for(let i = 1; i<=2; i++){ this.addCardFaceDown(CardDatabase.createCard("Aqua Vehicle"))}
		for(let i = 1; i<=2; i++){ this.addCardFaceDown(CardDatabase.createCard("Skeleton Soldier, the Defiled"))}
		for(let i = 1; i<=2; i++){ this.addCardFaceDown(CardDatabase.createCard("Writhing Bone Ghoul"))}
		for(let i = 1; i<=2; i++){ this.addCardFaceDown(CardDatabase.createCard("Immortal Baron, Vorg"))}
	}
	
	this.popTopCard = function(){
		return this.cards.pop()
	}
	
	this.drawFaceUpFrom = function(anotherDeck){
		this.addCardFaceUp(anotherDeck.popTopCard());
	}
	
	this.drawFaceDownFrom = function(anotherDeck){
		this.addCardFaceDown(anotherDeck.popTopCard());
	}
}


function main(){
	var p = new Player();
	p.deck.populateRandomly();
	console.log(p.deck);
}setTimeout(main, 2500);










