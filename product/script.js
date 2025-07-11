const allProducts = document.querySelector(".products");
const inp = document.querySelector("input");
const priceSortBtn = document.querySelector("#sortPrice");
const ratingSortBtn = document.querySelector("#sortRating");


const productsArray = [
  {
    id: 1,
		title: "Wireless Bluetooth Headphones",
		price: 1999,
		rating: 4.5,
	},
	{
    id: 2,
		title: "Fitness Smartwatch",
		price: 2999,
		rating: 4.2,
	},
	{
    id: 3,
		title: "Gaming Keyboard RGB",
		price: 1499,
		rating: 4.0,
	},
	{
    id: 4,
		title: "USB-C Power Bank 10000mAh",
		price: 999,
		rating: 4.1,
	},
	{
    id: 5,
		title: "Noise Cancelling Earbuds",
		price: 2499,
		rating: 4.6,
	},
	{
    id: 6,
		title: "Full HD Web Camera",
		price: 1799,
		rating: 3.9,
	},
	{
    id: 7,
		title: "Wireless Mouse",
		price: 499,
		rating: 4.3,
	},
	{
    id: 8,
		title: "Laptop Stand Adjustable",
		price: 799,
		rating: 4.4,
	},
	{
    id: 9,
		title: "External Hard Drive 1TB",
		price: 4499,
		rating: 4.7,
	},
	{
    id: 10,
		title: "LED Desk Lamp",
		price: 599,
		rating: 4.2,
	},
];



//display all products
const displayProduct = (productList) => {
  allProducts.innerHTML = "";
  
  if (productList.length === 0) {
    allProducts.innerHTML = `<p>Product Not Found</p>`
    return;
  }

  productList.forEach((prod) => {
	const prodDiv = document.createElement("div");
	prodDiv.classList.add("product");

	prodDiv.innerHTML = `
    <h4>${prod.title}</h4>
    <p>₹${prod.price}</p>
    <p>${prod.rating}⭐</p>
  `;

	allProducts.appendChild(prodDiv);
});
}
displayProduct(productsArray);


///search 
inp.addEventListener("input", (e) => {
	const matchingArray = productsArray.filter((ele) => {
		return ele.title.toLowerCase().startsWith(e.target.value.toLowerCase());
  });
  displayProduct(matchingArray);
});


//sorting by rating
ratingSortBtn.addEventListener("click", () => {
  const sorted = [...productsArray].sort((a, b) => a.rating - b.rating);
  displayProduct(sorted);
})

//sorting price low to high
priceSortBtn.addEventListener("click", () => {
  const sorted = [...productsArray].sort((a, b) => a.price - b.price);
  displayProduct(sorted);
})

