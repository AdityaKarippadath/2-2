let historyList = [];

function rollDice() {
    const dice = document.getElementById("dice");
    const history = document.getElementById("history");

    // Generate random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Display number on dice
    dice.textContent = randomNumber;

    // Add to history
    historyList.unshift(randomNumber);

    // Keep only last 10 rolls (optional)
    if (historyList.length > 10) {
        historyList.pop();
    }

    // Update history display
    history.innerHTML = "";
    historyList.forEach((roll, index) => {
        const li = document.createElement("li");
        li.textContent = `Roll ${historyList.length - index}: ${roll}`;
        history.appendChild(li);
    });
}
