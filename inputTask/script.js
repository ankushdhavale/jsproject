const textArea = document.querySelector("#text");
const len = document.querySelector(".length");
const vowCount = document.querySelector(".vowels");
const consoCount = document.querySelector(".consonants");
const spaceCount = document.querySelector(".space");

let vowelCount = 0;
let consonantCount = 0;

textArea.addEventListener("input", (e) => {
    console.log(e.data===' ');
    const value = textArea.value;
    const vowels = value.match(/[aeiou]/gi)||[];
    const consonants = value.match(/[qwrtypsdfghjklzxcvbnm]/gi)||[];
    const space = value.match(/\s/g)||[];
    vowCount.textContent = vowels.length;
    consoCount.textContent = consonants.length;
    spaceCount.textContent = space.length;
    len.textContent = textArea.value.length - space.length;
    const maxInputLength = textArea.value.length - space.length
    
    if (maxInputLength >= 140) {
        alert("You Can only type 140 Character");
    }
})


