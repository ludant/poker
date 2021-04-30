'use strict';

function $(id: string) {
  return document.getElementById(id);
};

const rankVals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suitVals = ['S', 'D', 'C', 'H'];
const suitSyms = ['♠', '♦', '♣', '♥'];

let deck = []
for (let i = 0; i < 52; i++) {
	deck.push(new Card(i))
}

function Card(val: number) {
	this.val = val;
	this.rank = rankVals[(val % 13)];
	this.suit = suitVals[Math.floor(val / 13)];
	this.sym = suitSyms[Math.floor(val / 13)];
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

function chanceFlush(cards: []) {
	let draw = 7 - cards.length
  return 
}

function nCr(n: number, r: number) {
	return factorial(n) / (factorial(r) * factorial(n - r));
}

let f = [];
function factorial(n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 

//init
let hand = document.querySelector('.hand');
function drawCard(num) {
	hand.append(deck[num].render());
}
for (let i = 0; i < 5; i++) {
	let num = ~~(Math.random() * 52);
	drawCard(num);
}
