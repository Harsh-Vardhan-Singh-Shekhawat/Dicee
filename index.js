
    var ranNum1 = (Math.floor(Math.random()*6)) +1; //1-6
    var ranImage1 = "images/dice"+ranNum1+".png"; // images/dice1.png - 6.png
    
    var image1 = document.querySelectorAll("img")[0];
 
    image1.setAttribute("src",ranImage1);
    
    var ranNum2 = (Math.floor(Math.random()*6)) +1; //1-6
    var ranImage2 = "images/dice"+ranNum2+".png"; // images/dice1.png - 6.png
    
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",ranImage2);
    
    if(ranNum1>ranNum2){
        var heading = document.querySelector("h1");
            heading.innerHTML = "Player 1 Wins!";
    }else if(ranNum1<ranNum2){
        var heading = document.querySelector("h1");
        heading.innerHTML = "Player 2 Wins!";
    }else{
        var heading = document.querySelector("h1    ");
        heading.innerHTML = "It's a tie!";
    }
    
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }
