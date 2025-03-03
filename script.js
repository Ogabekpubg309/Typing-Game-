let words = {
    easy: [
        "olma", "kitob", "maktab", "daraxt", "shahar", "quyon", "suv", "oy", "yoz", "yil",
        "ona", "ota", "bola", "daryo", "qush", "devor", "yulduz", "havo", "qalam", "qogoz",
        "gullar", "tuproq", "do‘st", "oyna", "ish", "soat", "qo‘ng‘iroq", "qo‘shimcha", "tashqarida", "ichkarida",
        "mashina", "kitoblar", "maktablar", "shaharlar", "bahor", "kuz", "qish", "yozgi", "suvlar", "oylar",
        "yulduzlar", "havorang", "qizil", "yashil", "ko‘k", "oq", "qora", "bezak", "maydon", "shodlik"
    ],
    medium: [
        "kompyuter", "telefon", "internet", "samolyot", "fayl", "dastur", "hisob", "uyg‘onish", "vazifa",
        "joriy", "matn", "ko‘rsatma", "televizor", "kino", "musiqa", "sayohat", "maqola", "gazeta", "tasvir",
        "shamol", "yomg‘ir", "sanoq", "o‘qituvchi", "savol", "javob", "sinf", "ekran", "shisha", "tugma", "monitor",
        "klaviatura", "sichqoncha", "sinov", "o‘yin", "baholar", "kitobxona", "toza", "ishlatish", "amaliyot",
        "qulay", "tajriba", "foydali", "oddiy", "shifokor", "dorilar", "o‘rmon", "gullar", "cho‘l", "qum"
    ],
    hard: [
        "dasturchilik", "muammolar", "innovatsiya", "elektronika", "matematika", "fizika", "kimyo", "tahlil",
        "statistika", "muvozanat", "fizikaviy", "mualliflik", "psixologiya", "algoritm", "falsafa", "geometriya",
        "protsessor", "generator", "eksperiment", "tezkorlik", "xatolik", "samaradorlik", "tizim", "informatsiya",
        "operatsiya", "jadval", "rivojlanish", "insoniyat", "model", "parametr", "maqsad", "muvofiqlik",
        "translyatsiya", "murakkablik", "moslashish", "ixtiro", "shaxsiyat", "mustaqillik", "innovatsiyalar",
        "motivatsiya", "ijodkorlik", "potensial", "avtomatlashtirish", "hisob-kitob", "tahliliy", "kategoriya",
        "statistik", "murakkab", "masofaviy", "gipoteza", "resurs"
    ]
};

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let time = 30;
let combo = 0;
let currentWord = "";

const wordDisplay = document.getElementById("word");
const input = document.getElementById("input");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highScore");
const timeDisplay = document.getElementById("time");
const difficultySelect = document.getElementById("difficulty");

highScoreDisplay.textContent = highScore;

function getNewWord() {
    let difficulty = difficultySelect.value;
    let wordList = words[difficulty];
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    wordDisplay.textContent = currentWord;
}

function updateScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        highScoreDisplay.textContent = highScore;
    }
}

input.addEventListener("input", () => {
    if (input.value.toLowerCase() === currentWord) {
        score++;
        combo++;
        scoreDisplay.textContent = score;
        updateScore();

        if (combo % 5 === 0) {
            time += 5;
            timeDisplay.textContent = time;
        }

        input.value = "";
        getNewWord();
    }
});

setInterval(() => {
    if (time > 0) {
        time--;
        timeDisplay.textContent = time;
    } else {
        alert("O‘yin tugadi! Sizning ballingiz: " + score);
        score = 0;
        time = 30;
        combo = 0;
        scoreDisplay.textContent = score;
        timeDisplay.textContent = time;
        getNewWord();
    }
}, 1000);

difficultySelect.addEventListener("change", getNewWord);

getNewWord();
