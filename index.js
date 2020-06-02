var randomNumber1;
var randomNumber2;

function refresh(){
randomNumber1 = Math.round(Math.random() * 5);
if(randomNumber1 == 1){
	document.querySelector(".img2").src = "images/dice1.png";
}
else if(randomNumber1 == 2){
	document.querySelector(".img2").src = "images/dice2.png";
}
else if(randomNumber1 == 3){
	document.querySelector(".img2").src = "images/dice3.png";
}
else if(randomNumber1 == 4){
	document.querySelector(".img2").src = "images/dice4.png";
}
else if(randomNumber1 == 5){
	document.querySelector(".img2").src = "images/dice5.png";
}
else if(randomNumber1 == 6){
	document.querySelector(".img2").src = "images/dice6.png";
}
randomNumber2 = Math.round(Math.random() * 5);
if(randomNumber2 == 1){
	document.querySelector(".img1").src = "images/dice1.png";
}
else if(randomNumber2 == 2){
	document.querySelector(".img1").src = "images/dice2.png";
}
else if(randomNumber2 == 3){
	document.querySelector(".img1").src = "images/dice3.png";
}
else if(randomNumber2 == 4){
	document.querySelector(".img1").src = "images/dice4.png";
}
else if(randomNumber2 == 5){
	document.querySelector(".img1").src = "images/dice5.png";
}
else if(randomNumber2 == 6){
	document.querySelector(".img1").src = "images/dice6.png";
}

	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").innerHTML = "Player 2 Wins ✌";
	}
	else if(randomNumber2 > randomNumber1) {
		document.querySelector("h1").innerHTML = "Player 1 Wins 👆";
	}
	else{
		document.querySelector("h1").innerHTML = "Its a draw 🤙";
	}
}