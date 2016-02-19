$(document).ready(function(){

/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

var prevGuess=0;
var numGuesses=0;
var secretNumber=Math.floor((Math.random()*100)+1);
console.log(secretNumber);

function newGame(){
	//setNumber();
	prevGuess=0;
	numGuesses=0;
	$('#guessList').empty();
	$('#feedback').text('Make your guess!');
	$('#count').text('0');
	$('#userGuess').val('');
}

newGame();

$('.new').click(function(){
	newGame();
});

$('#guessButton').click(function(){
	submitGuess();
});

$(document).on("keydown",function(event){
	if((event.keyCode==13) || (event.keyCode==10)){
		event.preventDefault();
		submitGuess();
	}
});

$('form').submit(function(){
	event.preventDefault();
});

function submitGuess(){
	var guess=$('#userGuess').val();
	if (isNaN(guess)){
		alert('Please enter a number');
		return false;
	}
	if((guess<1) || (guess>100)){
		alert('Please enter a number between 1 to 100');
	}
	$('#count').text(++numGuesses);
	$('#feedback').text(getGuessResult(guess));
	prevGuess=guess;
	$('#guessList').append('<li>' + guess + '</li>');
	$('#userGuess').val('');
}

var difference;

function getGuessResult(guess){
	if(guess==secretNumber){
		$('#feedback').text("Correct!!");
	}
	else if(guess>secretNumber){
		difference=guess-secretNumber;
		if(difference<10){
			$('#feedback').text("Very Hot");
		}
		else if((difference<20) && (difference>=10)){
			$('#feedback').text("Hot");
		}
		else if((difference<30) && (difference>=20)){
			$('#feedback').text("Kinda Hot");
		}
		else if((difference<40) && (difference>=30)){
			$('#feedback').text("Cold");
		}
		else if((difference<50) && (difference>=40)){
			$('#feedback').text("Very Cold");
		}
		else{
			$('#feedback').text("Ice Cold");
		}
	}
	else{
		difference=secretNumber-guess;
		if(difference<10){
			$('#feedback').text("Very Hot");
		}
		else if((difference<20) && (difference>=10)){
			$('#feedback').text("Hot");
		}
		else if((difference<30) && (difference>=20)){
			$('#feedback').text("Kinda Hot");
		}
		else if((difference<40) && (difference>=30)){
			$('#feedback').text("Cold");
		}
		else if((difference<50) && (difference>=40)){
			$('#feedback').text("Very Cold");
		}
		else{
			$('#feedback').text("Ice Cold");
		}
	}
}
});