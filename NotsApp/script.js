const titleInp = document.querySelector(".titleInp");
const notsInp = document.querySelector(".notsInp");
const addBtn = document.querySelector(".addBtn");
const notsContent = document.querySelector(".notsContent");

addBtn.addEventListener("click", () => {
    if (titleInp.value.length===0) {
        alert("You can should be add something in title input");
        return;
    }
    if (notsInp.value.length===0) {
        alert("You can should be add something in Nots input");
        return;
    }
    let contentDiv = document.createElement("div");
    let titlePara = document.createElement("p");
    let notsPara = document.createElement("p");
    let line = document.createElement("hr");
    titlePara.innerHTML = titleInp.value;
    contentDiv.classList = "content";
    notsPara.innerHTML = notsInp.value;
    contentDiv.append(titlePara,line, notsPara);
    notsContent.appendChild(contentDiv);
})