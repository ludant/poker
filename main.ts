'use strict';

function $(id) {
  return document.getElementById(id);
};

let rank_vals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let suit_vals = ['S', 'D', 'C', 'H'];
let suit_syms = ['♠', '♦', '♣', '♥'];

let deck = []
for (let i = 0; i < 52; i++) {
	deck.push(new Card(i))
}

function Card(val) {
	this.val = val;
	this.rank = rank_vals[(val % 13)];
	this.suit = suit_vals[Math.floor(val / 13)];
	this.sym = suit_syms[Math.floor(val / 13)];
	this.red = false;
	if (this.suit == 'H' || this.suit == 'D') {
		this.red = true;
	}
	this.render = function() {
		let newCard = document.createElement('div');
		newCard.classList.add('card');
		let rankSpan = document.createElement('span');
		rankSpan.classList.add('rank');
		let suitSpan = document.createElement('span');
		suitSpan.classList.add('suit');
		newCard.append(rankSpan);
		newCard.append(suitSpan);
		rankSpan.textContent = this.rank;
		suitSpan.textContent = this.sym;
		if (this.red) {
			newCard.classList.add('red');
		}
		return newCard;
	};
}

//init
let doug = document.querySelector('.hand');
function drawCard(num) {
	doug.append(deck[num].render());
}
for (let i = 0; i < 5; i++) {
	let num = ~~(Math.random() * 52);
	drawCard(num);
}
