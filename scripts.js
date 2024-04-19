// scripts.js

document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const dice = document.getElementById('dice');

    // Generate a random number from 1 to 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Create an array of rotations for each face of the dice
    const rotations = [
        'rotateY(0deg)', // face 1
        'rotateY(90deg)', // face 2
        'rotateY(180deg)', // face 3
        'rotateY(-90deg)', // face 4
        'rotateX(90deg)', // face 5
        'rotateX(-90deg)' // face 6
    ];

    // Apply the rotation based on the rolled number
    dice.style.transform = rotations[randomNumber - 1];
}
