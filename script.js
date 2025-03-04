let words = {
    easy: ["olma", "kitob", "maktab", "quyon", "suv"],
    medium: ["telefon", "internet", "samolyot", "hisob"],
    hard: ["algoritm", "matematika", "statistika", "innovatsiya"]
};

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let time = 30;
let combo = 0;
let topScores = JSON.parse(localStorage.getItem("topScores")) || [0, 0, 0, 0, 0];

const wordDisplay = document.getElementById("word");
const input = document.getElementById("input");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highScore");
const timeDisplay = document.getElementById("time");
const difficultySelect = document.getElementById("difficulty");
const restartBtn = document.getElementById("restart");
const topScoresList = document.getElementById("topScores");

highScoreDisplay.textContent = highScore;

function getNewWord() {
    let difficulty = difficultySelect.value;
    let wordList = words[difficulty];
    wordDisplay.textContent = wordList[Math.floor(Math.random() * wordList.length)];
}

function updateScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        highScoreDisplay.textContent = highScore;
    }
}

input.addEventListener("input", () => {
    if (input.value.toLowerCase() === wordDisplay.textContent) {
        score++;
        combo++;

        if (combo % 10 === 0) time += 5;

        scoreDisplay.textContent = score;
        updateScore();

        input.value = "";
        getNewWord();
    }
});

function updateLeaderboard() {
    topScores.push(score);
    topScores.sort((a, b) => b - a);
    topScores = topScores.slice(0, 5);
    localStorage.setItem("topScores", JSON.stringify(topScores));

    topScoresList.innerHTML = topScores.map((s, i) => `<li>${i + 1}. ${s}</li>`).join("");
}

restartBtn.addEventListener("click", () => {
    updateLeaderboard();
    score = 0;
    time = 30;
    combo = 0;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = time;
    getNewWord();
});

setInterval(() => {
    if (time > 0) {
        time--;
        timeDisplay.textContent = time;
    } else {
        alert("O‘yin tugadi! Sizning ballingiz: " + score);
        updateLeaderboard();
    }
}, 1000);

difficultySelect.addEventListener("change", getNewWord);

getNewWord();
