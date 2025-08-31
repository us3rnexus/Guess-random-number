let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("input").value, 10);
    const resultDiv = document.getElementById("random-number");
    // Clear any previous timeout
    if (window.clearResultTimeout) {
        clearTimeout(window.clearResultTimeout);
    }
    if (isNaN(userGuess)) {
        resultDiv.textContent = "Please enter a valid number!";
        resultDiv.style.color = "red";
        resultDiv.style.fontWeight = "bold";
        window.clearResultTimeout = setTimeout(() => {
            resultDiv.textContent = "";
        },3000);
        return;
    }
    if (userGuess === randomNumber) {
        resultDiv.textContent = "Congratulations! You guessed it right!";
        resultDiv.style.color = "green";
        resultDiv.style.fontWeight = "bold";
    } else if (userGuess < randomNumber) {
        resultDiv.textContent = "Too low! Try again.";
        resultDiv.style.color = "blue";
        resultDiv.style.fontWeight = "bold";
        window.clearResultTimeout = setTimeout(() => {
            resultDiv.textContent = "";
        }, 3000);
    } else {
        resultDiv.textContent = "Too high! Try again.";
        resultDiv.style.color = "red";
        resultDiv.style.fontWeight = "bold";
        window.clearResultTimeout = setTimeout(() => {
            resultDiv.textContent = "";
        }, 3000);
    }

}
