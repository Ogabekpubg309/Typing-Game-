const words = ["kitob", "maktab", "oyna", "daryo", "tog'", "osmon", "shamol", "quyosh", "tun", "yulduz", "shahar", "yo‘l"];
let score = 0;
let activeWords = [];

function generateWord() {
    const wordText = words[Math.floor(Math.random() * words.length)];
    const wordElement = document.createElement("div");
    wordElement.classList.add("word");
    wordElement.textContent = wordText;
    wordElement.style.left = Math.random() * 80 + "%";
    document.getElementById("game-area").appendChild(wordElement);

    let speed = 2;
    let position = 0;
    
    function moveWord() {
        if (position < 100) {
            position += speed / 10;
            wordElement.style.top = position + "%";
            requestAnimationFrame(moveWord);
        } else {
            wordElement.remove();
        }
    }
    
    moveWord();
    activeWords.push({ word: wordText, element: wordElement });
}

function checkInput(event) {
    const inputText = event.target.value.toLowerCase();
    for (let i = 0; i < activeWords.length; i++) {
        if (activeWords[i].word === inputText) {
            activeWords[i].element.remove();
            activeWords.splice(i, 1);
            document.getElementById("word-input").value = "";
            score += 10;
            document.getElementById("score").textContent = "Hisob: " + score;
            break;
        }
    }
}

document.getElementById("word-input").addEventListener("input", checkInput);
setInterval(generateWord, 2000);
