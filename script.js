const words = [
    "daraxt", "quyosh", "kitob", "maktab", "talaba", "osmon", "yashil", "oila", "do'st", "yoz"
    "oyna", "tog", "hayot", "o'yin", "baho", "oyoq", "bahor", "kulgi", "yulduz", "chang"
];

let score = 0;
const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

function newWord() {
    wordElement.textContent = words[Math.floor(Math.random() * words.length)];
}

inputElement.addEventListener("input", function () {
    if (inputElement.value.toLowerCase() === wordElement.textContent.toLowerCase()) {
        score++;
        scoreElement.textContent = "Ball: " + score;
        inputElement.value = "";
        newWord();
    }
});

newWord();
