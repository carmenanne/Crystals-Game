//Game Starts:
$(document).ready(function(){


var wins = 0
var losses = 0


var score = 0

//display random target number for user to match between 19 - 120
var randomNumber = parseInt(Math.floor(Math.random() * (120 - 19) + 19));
console.log(randomNumber)
$("#targetNumber").text(randomNumber)

//assign each crystal random number between 1 - 12
var gemNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var randomGemNumber1 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
var randomGemNumber2 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
var randomGemNumber3 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
var randomGemNumber4 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);

var reset = function(){
	score = 0;
	randomNumber = parseInt(Math.floor(Math.random()*(120-19)+19));
	console.log(randomNumber)
	$("targetNumber").val(randomNumber)//why won't the html change to reflect the new #, console.log works fine??

	randomGemNumber1 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
	randomGemNumber2 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
	randomGemNumber3 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
	randomGemNumber4 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
	$("#ambergem").val(randomGemNumber1)
	$("#emerald").val(randomGemNumber2)
	$("#redgem").val(randomGemNumber3)
	$("#sapphire").val(randomGemNumber4)
}

$("#ambergem").val(randomGemNumber1)
$("#emerald").val(randomGemNumber2)
$("#redgem").val(randomGemNumber3)
$("#sapphire").val(randomGemNumber4)


$("#ambergem").on("click", function(){
 	console.log(this.value)
 })

$("#emerald").on("click", function(){
 	console.log(this.value)
})

$("#redgem").on("click", function(){
 	console.log(this.value)
})

$("#sapphire").on("click", function(){
 	console.log(this.value)
})

//display total score based on values from 'click' function from various gems added together
$(".gems").on("click", function(jewel){
	
	score = score + parseInt(this.value)
	$("#totalScore").text("Total score: " + score)
	

	if (score < randomNumber) {
		console.log("keep going")
		
	}

	else if (score > randomNumber){
		console.log("You loose")
		losses++
		$("#losses").text("Losses: " + losses)
		
		reset()
	}

	else {
		console.log("WINNER!")
		wins++
		$("#wins").text("Wins: " + wins)
		
		reset()
	}


})



	
})

