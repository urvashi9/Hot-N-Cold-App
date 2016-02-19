<<<<<<< HEAD
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
=======
//initialize variables
'use strict';
var secretNumber, 
userGuess, 
pastGuesses = [], 
count,
guessHtml, 
userFeedback,
alreadyGuessed,
newButton,
form ,
input,
feedback,
countElement,
guessList;

$(document).ready(pageLoad);

 function pageLoad(){
	
	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

  	//fetch dom objects
  	newButton = $('a.new');
  	form = $('form');
  	input = form.find('#userGuess');
  	feedback = $('#feedback');
  	countElement = $('#count');
  	guessList = $('#guessList');

    //page load
    newGame();
    //event handlers
    form.submit(function(event){
      event.preventDefault();
      getUserGuess();
    });
    newButton.click(newGame);
}

//new game function
function newGame(){
	form.find('input[type=submit]').css('opacity','1');
	resetVariables();
	render();
	generateNumber();
}

//get the user guess
function getUserGuess(){
	//get the user guess
	userGuess = input.val();
	//reset input value
	input.val('');
	//focus on input for next guess
	input.focus();
	//ensure valid input
	if(checkGuess()){return ;}
	//generate feedback
	generateFeedback();
	//track the past user guesses
	trackGuess();
	//increment the count
	guessCount();
	//render changes to the page
	render();
}

  	//check for valid input
  	function checkGuess(){
  		if(userGuess % 1 !== 0){
  			alert('please input a number');
  			return true;
  		}
  		if(userGuess < 0 || userGuess > 101){
  			alert('please choose a number between zero and 100');
  			return true;
  		}
  		if(pastGuesses.length > 0){
			$.each(pastGuesses,function(guess,value){
				if(userGuess == value){
					alreadyGuessed = true;
				}
			}); 
		}
		if(alreadyGuessed){
			alreadyGuessed = false;
			alert('You guessed this number already');
			return true;
		}
    return false;
	}

//generate user feedback
function generateFeedback(){
	if(secretNumber == userGuess){
		winner();
	} else if(Math.abs(secretNumber - userGuess) < 10){
		userFeedback = 'hot';
	} else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
		userFeedback = ' Kinda hot';
	} else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
		userFeedback = 'less than warm';
	} else {
		userFeedback = 'cold';
	}
}

//keep track of the users past guesses
function trackGuess(){
	pastGuesses.push(userGuess);
	guessHtml = '';
	if(pastGuesses[0].length) {
		$.each(pastGuesses,function(guess,value){
			guessHtml += '<li>' + value + '</li>';
		});
	}
}

//keep track of guess count
function guessCount(){
	count++;
}

	//page render function
function render(){
	guessList.html(guessHtml);
	countElement.html(count);
	feedback.html(userFeedback);
}

function winner(){
	userFeedback = 'You Won. Click new game to play again';
	form.find('input[type=submit]').css('opacity','0');
}
  	
//generate secret number
function generateNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;
}

//reset variable 
function resetVariables(){
	count = 0;
	pastGuesses = [];
	guessHtml='';
	userGuess = '';
	userFeedback = 'Make your Guess!';
}
  	
  	

  


>>>>>>> 0ea735abcc4f2eab6b6eaffd2b1227a5cbddb99f

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