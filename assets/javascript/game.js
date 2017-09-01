//Game Starts:
$(document).ready(function(){

var wins = 0
var losses = 0

function startGame(){
	totalScore = "";
	randomGemNumber1 = "";
	randomGemNumber2 = "";
	randomGemNumber3 = "";
	randomGemNumber4 = "";
}

//display random target number for user to match between 19 - 120
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log(randomNumber)
$("#targetNumber").html(randomNumber)

//assign each crystal random number between 1 - 12
var gemNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var randomGemNumber1 = gemNumber[Math.floor(Math.random()* gemNumber.length)];
var randomGemNumber2 = gemNumber[Math.floor(Math.random()* gemNumber.length)];
var randomGemNumber3 = gemNumber[Math.floor(Math.random()* gemNumber.length)];
var randomGemNumber4 = gemNumber[Math.floor(Math.random()* gemNumber.length)];

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

//display total score based on values from 'click' function from various gems
$(".gems").on("click", function(){
	randomGemNumber1 = parseInt(randomGemNumber1);
	randomGemNumber2 = parseInt(randomGemNumber2);
	randomGemNumber3 = parseInt(randomGemNumber3);
	randomGemNumber4 = parseInt(randomGemNumber4);

	$("#totalScore").text(this.value)

})

//if user hits target number exactly, wins++
//if user goes over target number, losses++
//after user wins or loses, game begins again wtih new assigned numbers; not having to refresh page!

})

