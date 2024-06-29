window.onload = function() {
    // Generate random numbers between 1 and 6 for each player
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number for Player 1
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Random number for Player 2

    // Select the dice images
    var diceImage1 = document.querySelector(".img1");
    var diceImage2 = document.querySelector(".img2");

    // Set the src attribute for each dice image based on the random numbers
    diceImage1.src = "./images/dice" + randomNumber1 + ".png";
    diceImage2.src = "./images/dice" + randomNumber2 + ".png";

    // Select the heading element
    var heading = document.querySelector("h1");

    // Determine the winner and update the heading text
    if (randomNumber1 > randomNumber2) {
        heading.textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        heading.textContent = "Player 2 Wins!";
    } else {
        heading.textContent = "It's a Tie!";
    }
};
