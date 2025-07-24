const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");
const startBtn = document.querySelector("#start");

// const min = prompt(""); 
let min = 5;
let sec = 60;

startBtn.addEventListener("click", () => {
    setInterval(() => {
        sec--;
        second.textContent = sec;
        minutes.textContent = min;
        if (sec<= 0) {
        sec = 60;
        min--;
    }
    }, 1000)
    
})