"use strict";
function $(id) {
    return document.getElementById(id);
}
;
function renderCard(string) {
    var cardVal = string.split("");
    if (cardVal[0] == "T") {
        cardVal[0] = "10";
    }
    ;
    var colored = false;
    if (cardVal[1] == "H" || cardVal[1] == "D") {
        colored = true;
    }
    switch (cardVal[1]) {
        case "S":
            cardVal[1] = "♠";
            break;
        case "D":
            cardVal[1] = "♦";
            break;
        case "C":
            cardVal[1] = "♣";
            break;
        case "H":
            cardVal[1] = "♥";
            break;
    }
    var newCard = document.createElement("div");
    newCard.classList.add("card");
    var rank = document.createElement("span");
    rank.classList.add("rank");
    var suit = document.createElement("span");
    suit.classList.add("suit");
    newCard.append(rank);
    newCard.append(suit);
    rank.textContent = cardVal[0];
    suit.textContent = cardVal[1];
    return newCard;
}
;
var doug = document.querySelector(".hand");
//init
doug.append(renderCard("2C"));
doug.append(renderCard("TS"));
doug.append(renderCard("KD"));
doug.append(renderCard("AH"));
doug.append(renderCard("5C"));
