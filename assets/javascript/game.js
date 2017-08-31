//Game Starts:
	//display random target number for user to match between 19 - 120
	//assign each crystal random number between 1 - 12
	//wins = 0
	//losses = 0

var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log(randomNumber)

var gemNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var randomGemNumber = gemNumber[Math.floor(Math.random()* gemNumber.length)];
console.log(randomGemNumber)

$(":button").on('click', function(){
	alert("It worked!");
});
	


var wins = 0
var losses = 0