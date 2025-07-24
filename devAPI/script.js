const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const mainDiv = document.querySelector(".main");

btn.addEventListener("click", async () => {
    const res = await fetch(`https://dev.to/api/articles?tag=${input.value}`);
    const data = await res.json();
    // console.log(data);
    displayData(data);
})


const displayData = (data) => {
   data.forEach((ele,i) => {
    const div = document.createElement("div");
    div.classList = "mainDiv";
    const img = document.createElement("img");
    img.alt = ele.title;
    img.src = ele.social_image;
    const titlePara = document.createElement("p");
    const decPara = document.createElement("p");
    titlePara.textContent = ele.title;
    decPara.textContent = ele.description;
    div.appendChild(img, titlePara, decPara);
    mainDiv.appendChild(div);
   }); 
}