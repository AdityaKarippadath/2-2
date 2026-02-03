const squares = document.querySelectorAll(".square");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let currentMole = null;
let gameTimer = null;
let moleTimer = null;
let timeLeft = 30;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    const randomIndex = Math.floor(Math.random() * squares.length);
    currentMole = squares[randomIndex];
    currentMole.classList.add("mole");
}

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    // Show mole every 800ms
    moleTimer = setInterval(randomSquare, 800);

    // Countdown timer
    gameTimer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameTimer);
            clearInterval(moleTimer);
            alert("Game Over! Your final score is: " + score);
        }
    }, 1000);
}

// Detect clicks
squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square === currentMole) {
            score++;
            scoreDisplay.textContent = score;
            square.classList.remove("mole");
            currentMole = null;
        }
    });
});
