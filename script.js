let words = {
    easy: [
        "olma", "kitob", "maktab", "quyon", "suv", "oy", "quyosh", "bog'", "shamol", "gul", "qalam", "yoz", "ish", "makon", "xon",
        "meva", "do'st", "tosh", "qum", "daryo", "havo", "muhabbat", "yurak", "tong", "ko'cha", "yo'l", "orzu", "ko'z", "qush", 
        "bahor", "tun", "tong", "yer", "osmon", "g'azal", "uy", "bobo", "noma", "ona", "ota", "bolalar", "qish", "yozuvchi", 
        "baliq", "kitoblar", "dars", "daftar", "yangi", "hunar", "xalq", "millat", "madaniyat", "hayot", "fikr", "tasavvur",
        "paxta", "cho'pon", "o'roq", "o'quvchi", "o'qituvchi", "tibbiyot", "shifokor", "rassom", "musiqa", "san'at", "shoir",
        "sehr", "jumla", "bog'", "yo'l", "yo'lbars", "oyna", "kitobxona", "qalamdon", "kompyuter", "telefon", "ro'zg'or",
        "xat", "yod", "savol", "javob", "lola", "laziz", "mayin", "oq", "qora", "yashil", "ko'k", "qizil", "pushti",
        "tashabbus", "tugma", "ishga", "soat", "ancha", "shamol", "sher", "yo'lbars", "oy", "tush", "kuz", "hayot", "maqsad",
        "sadoqat", "ona", "yurt", "osmon", "yulduz", "savdo", "urush", "tin", "suv", "sog'liq", "farzand", "ko'zgu",
        "quyosh", "olam", "zamzam", "gul", "tabassum", "yo'l", "shamol", "o'rik", "yaproq", "osmon", "ko'rpa",
        "yaxshi", "yomon", "foydali", "zararli", "shirin", "achchiq", "qalin", "ingichka", "katta", "kichik",
        "tez", "sekin", "yuqori", "past", "keng", "tor", "baland", "pastroq", "yaqin", "uzoqqa",
        "do'stlik", "beg'araz", "halol", "pok", "muloyim", "qattiq", "shirin", "achchiq", "xush", "yoqimli",
        "ovoz", "yangi", "eski", "bo'sh", "to'la", "yaxshi", "yomon", "yorqin", "xira", "yashil",
        "ko'k", "qizil", "pushti", "sariq", "oq", "qora", "kulrang", "yorug'", "quyuq", "shaffof",
        "yorug'lik", "malla", "kamalak", "sharq", "g'arb", "shimol", "janub", "o't", "o'rmon", "shamol",
        "qum", "g'or", "yashirin", "muhabbat", "sadqa", "saxovat", "mehmon", "mehmonxona", "ovqat",
        "ichimlik", "taom", "non", "shirinlik", "tuz", "suv", "qahva", "choy", "ayron", "shirinlik"
    ],
    medium: [
        "telefon", "internet", "samolyot", "hisob", "dastur", "matematika", "kompyuter", "soat", "qalamdon", "kursi",
        "uyg‘onish", "imtihon", "tashkilot", "o‘yin", "shamol", "quvvat", "tartib", "parvarish", "qulaylik",
        "oliy", "universitet", "samarali", "ilm", "ta’lim", "kafedra", "qobiliyat", "yutuq", "barcha", "tizim",
        "loyiha", "investor", "innovatsiya", "foydalanish", "tahlil", "buxgalter", "boshqarish", "zamon", "o‘zgarish",
        "mukammal", "reklama", "tijorat", "firma", "brend", "platforma", "kompaniya", "marketing", "muvaffaqiyat",
        "audit", "kredit", "depozit", "resurs", "bank", "xalqaro", "aloka", "texnologiya", "kod", "dasturchi"
    ],
    hard: [
        "algoritm", "matematika", "statistika", "innovatsiya", "fizika", "kimyo", "astronomiya", "sanoat", "muammo",
        "strategiya", "marketing", "analitika", "investitsiya", "davlat", "rivojlanish", "tadqiqot", "fan",
        "metodologiya", "falsafa", "estetika", "optimizatsiya", "paradigma", "ma'lumotnoma", "kripto", "tahlil",
        "tizimlashtirish", "modellash", "arxitektura", "sinergiya", "intellekt", "ekologiya", "genealogiya",
        "innovatsion", "komponent", "sofistikatsiya", "fenomen", "nazariya", "prakademik", "infratuzilma",
        "futuroloji", "neurotexnologiya", "kosmologiya", "kvant", "elektronika", "robototexnika", "sensor",
        "biokimyo", "molekulyar", "kriptografiya", "superkompyuter", "biomekanika", "nanotexnologiya"
    ]
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
