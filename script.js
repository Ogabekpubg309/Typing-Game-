const words = ["oʻyin", "tezlik", "kod", "HTML", "JavaScript", "oʻrganish", "raqam", "dastur"];
let score = 0;

const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

function newWord() {
    wordElement.textContent = words[Math.floor(Math.random() * words.length)];
}

inputElement.addEventListener("input", function () {
    if (inputElement.value === wordElement.textContent) {
        score++;
        scoreElement.textContent = "Ball: " + score;
        inputElement.value = "";
        newWord();
    }
});

newWord();
