let historyList = [];

function rollDice() {
    const dice = document.getElementById("dice");
    const history = document.getElementById("history");

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    dice.textContent = randomNumber;

    historyList.unshift(randomNumber);

    if (historyList.length > 10) {
        historyList.pop();
    }

    history.innerHTML = "";
    historyList.forEach((roll, index) => {
        const li = document.createElement("li");
        li.textContent = `Roll ${historyList.length - index}: ${roll}`;
        history.appendChild(li);
    });
}
