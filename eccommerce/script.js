const productCard = document.querySelector(".productCard");
const allProduct = document.querySelector(".allProduct");
const jeProduct = document.querySelector(".jeProduct");
const rangeInp = document.querySelector(".rangeInp");
const starTwoAbove = document.querySelector(".starTwoAbove");
const checkDiv = document.querySelectorAll(".checkDiv");
const starFourAbove = document.querySelector(".starFourAbove");

let productData = [];
let count = 0;
const apiData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    productData = [...data];
    displayProductCard(productData);
}
apiData();


const displayProductCard = (data) => {  
    productCard.innerHTML = "";
    if (data.length === 0) {
        const para = document.createElement("p");
        para.textContent = "Product Not Found";
        productCard.append(para);
        return;
    }
    
    data.forEach((ele) => {
        const div = document.createElement('div');
        div.classList = "proDiv";
        const imgDiv = document.createElement("div");
        const prodImg = document.createElement('img');
        imgDiv.classList = "prodImg";
        imgDiv.appendChild(prodImg);
        prodImg.src = ele.image;
        const titlePara = document.createElement('p');
        titlePara.classList = "title";
        titlePara.textContent = ele.title.slice(0, 20);
        const rating = document.createElement("p");
        rating.textContent ="Rating "+ ele.rating.rate;
        const textPara = document.createElement('p');
        textPara.classList = "text";
        textPara.textContent = ele.description.slice(0,20)+" ...";
        const pricePara = document.createElement('p');
        pricePara.classList = "price";
        pricePara.textContent = "₹ "+ele.price;
        div.append(imgDiv, titlePara, textPara, pricePara,rating);
        productCard.appendChild(div);
    })

}


document.querySelector(".sidebar").addEventListener("click", (e) => {
    let category = e.target.value;
    if (e.target.value === "all") {
        displayProductCard(productData);
        return;
    }
    console.log(productData);
    if (!category) return;
    const categoryData = productData.filter((ele) =>ele.category.toLowerCase()===category.toLowerCase())
    displayProductCard(categoryData);
    console.log(categoryData);
    
})


/// price filter

rangeInp.addEventListener("input", (e) => {
    const rangeFilterData = productData.filter((ele) => ele.price >= e.target.value);
    displayProductCard(rangeFilterData)
    console.log(e.target.value);
})


starTwoAbove.addEventListener("input", (e) => {
    const ratingFilter = productData.filter((ele) => ele.rating.rate >= e.target.value);
    displayProductCard(ratingFilter);
})

starFourAbove.addEventListener("input", (e) => {
    console.log(e.target.value);
    const ratingFilter = productData.filter((ele) => ele.rating.rate >= e.target.value);
    displayProductCard(ratingFilter);
})