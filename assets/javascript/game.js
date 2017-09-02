//Game Starts:
$(document).ready(function(){

var wins = 0
var losses = 0
var score = 0

//display random target number for user to match between 19 - 120
var randomNumber = parseInt(Math.floor(Math.random() * (70- 50) + 50));
console.log(randomNumber)
$("#targetNumber").html(randomNumber)

//assign each crystal random number between 1 - 12
var gemNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var randomGemNumber1 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
var randomGemNumber2 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
var randomGemNumber3 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);
var randomGemNumber4 = parseInt(gemNumber[Math.floor(Math.random()* gemNumber.length)]);

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
//var score = 0
$(".gems").on("click", function(jewel){
	
	score = score + parseInt(this.value)
	$("#totalScore").text("Total score: " + score)
	
	//console.log(score)
	if (score < randomNumber) {
		console.log("keep going")
		
	}

	else if (score > randomNumber){
		console.log("You loose")
		losses++
		$("#losses").text("Losses: " + losses)
		
		startGame()
	}

	else {
		console.log("WINNER!")
		wins++
		$("#wins").text("Wins: " + wins)
		
		startGame()
	}


})



	
})

