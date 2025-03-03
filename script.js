const words = [
    "daraxt", "quyosh", "kitob", "maktab", "talaba", "osmon", "yashil", "oila", "dost", "yoz",
    "oyna", "tog", "hayot", "oyin", "baho", "oyoq", "bahor", "kulgi", "yulduz", "chang",
    "qalam", "dehqon", "shahar", "uy", "tungi", "yangi", "musicha", "bog", "baliq", "suv",
    "shamol", "tuproq", "kocha", "barg", "gullar", "xabar", "telefon", "soat", "olma", "shakar",
    "osh", "doira", "toza", "havo", "hamkor", "tezlik", "uchrashuv", "gap", "meva", "oy",
    "chaqmoq", "oshiq", "qalb", "buloq", "sayohat", "qalpoq", "qush", "navo", "obod", "bekat"
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
