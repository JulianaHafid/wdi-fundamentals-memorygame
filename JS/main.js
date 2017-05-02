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

var score = 0;

//start checkForMatch function
var checkForMatch = function (){

  		
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			
			score += 1;
			alert("You found a match! and your score: " + score);
			console.log ("Current Score: " + score);
		}
		else
		{
			alert("Sorry, try again.")
		}
		
		
		//remove the two cards in cardsInPlay, only two cards at given time.
		for (var i = 0; i<=cardsInPlay.length; i++ )
		{
			//console.log (i + " : "+ cardsInPlay);	
			cardsInPlay.pop ();	
			
		}

		
}; // end checkMatch();

//start flipcard function
var flipcard = function (){
	
	//var cardId;
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push (cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	console.log ("Card flipped" + cardId)
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2)
	{
		checkForMatch ();
	}
	

}; // end flipCard function

var resetAllCard = function (){
	
	window.location.reload(true);
	
};

var createBoard = function (){
	var cardElement;
	for (var i = 0; i <cards.length ; i++)
	{
		console.log ("in here: createBoard");
		cardElement = document. createElement('img');
		cardElement.setAttribute('src',"images/back.png");
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click', flipcard);
        document.getElementById('game-board').appendChild(cardElement);

        var resetCards = document.getElementsByTagName ('button')[0];
        resetCards.addEventListener('click',resetAllCard);
	}
		//cardElement.setAttribute('src',"images/back.png");
		
};


createBoard();

