/*console.log("Up and running!") ;

var cardOne = "queen" ;
var cardTwo = "queen" ;
var cardThree = "king" ;
var cardFour = "king" ;
console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);**/

var cards = [
	{
		rank : "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank : "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank : "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank : "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];


var cardsInPlay = [] ;

//start checkForMatch function
var checkForMatch = function (){
	if (cardsInPlay.length === 2)
	{

		if (cardsInPlay[0] === cardsInPlay[1])
		{
			alert("You found a match!");
		}
		else
		{
		alert("Sorry, try again.")
		}
	}		
};

//start flipcard function
var flipcard = function (cardId){
	
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push (cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch ();
	
}; // end flipCard function


flipcard (0);
flipcard (2);

