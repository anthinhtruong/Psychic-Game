

var wins = 0;
	var losses = 0;
	var guessLeft = 9;
	var yourGuess = ['']

	var guessLibrary = [ 'a' , 'b' , 'c','d','e','f','g','h','i','k' , 'j', 'l','m','n','o','p','q','r', 's', 't','u','v','w','x','y','z'];


	document.onkeyup = function(){

		// Everytime the user "onkeyup", Guesses goes down by 1
		guessLeft-- ;
		console.log(guessLeft);

		if (guessLeft === 0){
			alert('Game Over');

			wins = 0;
			losses = -1;
			guessLeft = 9;
			yourGuess = [];


		}

		// Define User vs Computer
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		

		var computerGuess = guessLibrary[Math.floor(Math.random() * guessLibrary.length)]
		

		// Compare to determine Wins and Losses

		if (userGuess === computerGuess){
				wins++;
				console.log('Wins: ' + wins);
				

			}

			else{
				++losses;
				console.log('Losses: ' + losses);
				

			}

			// Adding User Guesses to yourGuest array
			yourGuess.push(userGuess);
			console.log('list:'+ yourGuess);


		

			

		// Write recorded Wins and Losses to html

		document.getElementById('wins').innerHTML = 'Wins: ' + wins
		document.getElementById('losses').innerHTML = 'Losses: ' + losses
		document.getElementById('guess-left').innerHTML = 'Guesses Left: ' + guessLeft
		document.getElementById('guess-count').innerHTML = 'Your Guess: ' + yourGuess
	}