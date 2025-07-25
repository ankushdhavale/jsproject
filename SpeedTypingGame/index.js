const API_URL = "http://api.quotable.io/random"
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");


quoteInputElement.addEventListener("input", () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll("span");
    const arrayValue = quoteInputElement.value.split("");
    // console.log("arr",arrayValue);
    
    let correct = true;

    arrayQuote.forEach((char, index) => {
        const character = arrayValue[index];
        // console.log(character);
        
        if (character == null) {
            char.classList.remove("correct");
            char.classList.remove("incorrect");
            correct = false;
        } else if (character === char.innerText) {
            char.classList.add("correct");
            char.classList.remove("incorrect");
        } else {
            char.classList.remove("correct");
            char.classList.add("incorrect");
            correct = false;
        }
    })

    if (correct) renderNextQuote();
})

const getRandomQuote = async () => {
    const res = await fetch(API_URL);
    const randomQuote = await res.json();
    // console.log(randomQuote.content);
    return randomQuote.content;
}

const renderNextQuote = async () => {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerHTML = "";
    quote.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        quoteDisplayElement.appendChild(span);
    });
    quoteInputElement.value = null;
    startTimer();
}


let startTime;
const startTimer = () => {
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(() => {
        timerElement.innerText = getTimerTime();
    }, 1000);
}

const getTimerTime = () => {
    return Math.floor((new Date() - startTime) / 1000);
}
renderNextQuote();
