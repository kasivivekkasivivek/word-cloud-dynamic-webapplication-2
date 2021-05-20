let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsContainer = document.getElementById("wordsContainer");
let errorMsg = document.getElementById("errorMsg");
let userInput = document.getElementById("userInput");
let addBtn = document.getElementById("addBtn");
addBtn.onclick = function() {
    addWordToCloud();
}

function createAndAdd(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordE1 = document.createElement("span");
    wordE1.textContent = word;
    wordE1.style.fontSize = randomFontSize;
    wordE1.classList.add("m-3");
    wordsContainer.appendChild(wordE1);
}
for (let i of wordCloud) {
    createAndAdd(i);
}

function addWordToCloud() {
    let userInputWord = userInput.value;
    if (userInputWord !== "") {
        userInput.value = "";
        errorMsg.textContent = "";
        createAndAdd(userInputWord);
    } else {
        errorMsg.textContent = "Please enter a word";
    }
}
