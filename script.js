const words = [
    "daraxt", "quyosh", "kitob", "maktab", "talaba", "osmon", "yashil", "oila", "dost", "yoz",
    "oyna", "tog", "hayot", "oyin", "baho", "oyoq", "bahor", "kulgi", "yulduz", "chang",
    "qalam", "dehqon", "shahar", "uy", "tungi", "yangi", "musicha", "bog", "baliq", "suv",
    "shamol", "tuproq", "kocha", "barg", "gullar", "xabar", "telefon", "soat", "olma", "shakar",
    "osh", "doira", "toza", "havo", "hamkor", "tezlik", "uchrashuv", "gap", "meva", "oy",
    "chaqmoq", "oshiq", "qalb", "buloq", "sayohat", "qalpoq", "qush", "navo", "obod", "bekat",
    "togay", "qum", "muhabbat", "sadoqat", "yulduzcha", "bobo", "buvi", "ism", "sher", "jon",
    "yil", "qushcha", "tashabbus", "ustoz", "fido", "yosh", "sayyor", "shodlik", "baxmal",
    "qahramon", "xushchaqchaq", "sehr", "sokin", "yoqimli", "marvarid", "dengiz", "gumbaz",
    "shifokor", "tabiat", "choqqi", "kozgular", "tarbiya", "baxt", "yorqin", "juda", "shirin",
    "zamon", "andishali", "fikr", "shart", "baraka", "saboq", "mahalla", "kuch", "yaxshilik",
    "katta", "kichik", "qiziq", "yozuvchi", "sanat", "bilim", "ishonch", "tayin", "foydali",
    "mohir", "ustozlar", "sadoqatli", "tozalash", "mard", "shirinlik", "qovun", "tarvuz",
    "uzum", "nok", "shaftoli", "gilos", "anjir", "yashnash", "barqaror", "mojiza", "yorug",
    "yomonlik", "hunar", "qarindosh", "mustahkam", "asar", "vosita", "olijanob", "xalq",
    "davlat", "sinf", "kitobxona", "xalqaro", "ziyo", "quvnoq", "bahoriy", "oquvchi",
    "ahloq", "fidoiy", "tashkilot", "xalqparvar", "sohaning", "yuksak", "madaniyat",
    "ajoyib", "mukofot", "sabr", "iroda", "jozibador", "ehtiyotkor", "maqsad", "kashfiyot",
    "tejamkor", "jasur", "mashhur", "samarali", "ishchan", "chidamli", "jihat", "ulkan",
    "muvaffaqiyat", "natija", "jarayon", "muomala", "iqtidor", "shon", "shavkat",
    "qadimiy", "taraqqiyot", "ijodkor", "ilm", "ijod", "boylik", "kelajak", "mardlik",
    "mahsulot", "samimiy", "saxovat", "mehmon", "otash", "sevimli", "ziyo", "yodgorlik",
    "ilhom", "soddalik", "jasorat", "bek", "shifo", "zamon", "fayz", "bunyodkor", "tinchlik",
    "hudud", "doimiy", "choqqi", "anatomiya", "muvozanat", "serquyosh", "bogcha", "chaman",
    "qadriyat", "istehkom", "marhum", "ehson", "umr", "mohir", "zavq", "masofa", "yashamoq"
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
