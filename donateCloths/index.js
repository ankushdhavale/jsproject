const productDiv = document.getElementById("productList");


const data = [
    {
		image_url:
			"https://images.assetsdelivery.com/compings_v2/bsd555/bsd5551808/bsd555180800691.jpg",
		name: "Donation Box Tee",
		size: "M",
		gender: "Unisex",
		age: "Adult",
	},
	{
		image_url:
			"https://i.etsystatic.com/23842934/r/il/ca09a6/3653781413/il_570xN.3653781413_ri89.jpg",
		name: "Heart Tee Donation",
		size: "L",
		gender: "Female",
		age: "Teen",
	},
	{
		image_url:
			"https://5.imimg.com/data5/ECOM/Default/2025/1/478040625/JO/HT/TW/88736396/t-shirt-blood-donation-88-t-shirt-blood-donation-collection-38537523495139-250x250.jpg",
		name: "Charity Tee",
		size: "S",
		gender: "Male",
		age: "Child",
	},
	{
		image_url:
			"https://rlv.zcache.com/red_heart_save_a_life_give_blood_donation_t_shirt-r80f5a60230bd4de4b5b1042b2ac0bff3_k2grt_644.jpg",
		name: "Feed Kids Donation Tee",
		size: "M",
		gender: "Unisex",
		age: "Child",
	},
	
	{
  image_url: "https://thumbs.dreamstime.com/b/stylish-high-detailed-graphic-businessmen-set-cartoon-male-characters-men-fashion-clothes-flat-style-vector-illustration-74135736.jpg",
  name: "Africa Hope Charity Tee",
  size: "M",
  gender: "Unisex",
  age: "Adult"
},
{
  image_url: "https://danddclothing.com/cdn/shop/articles/African_Clothing_s_For_Men.jpg?v=1623667240",
  name: "Charity Sees the Need Tee",
  size: "L",
  gender: "Unisex",
  age: "Adult"
},
{
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgaXeyVr7ewZBIc-kF2O-PXdy2uzKmg4eDCg&s",
  name: "Custom Charity Group Tee",
  size: "S",
  gender: "Unisex",
  age: "Child"
},
{
  image_url: "https://surhi.in/cdn/shop/files/DSC00240_643de708-5085-4fb9-94eb-aa1037cf1501.jpg?v=1720431410",
  name: "Hope is Here Donation Tee",
  size: "M",
  gender: "Unisex",
  age: "Child"
},
{
  image_url: "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fHww",
  name: "Charity Poster Tee",
  size: "XL",
  gender: "Male",
  age: "Adult"
},
{
  image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBmWoPUqWp-KBtriqBD-UuJGoh4wI9XJKMA&s",
  name: "Strong is Beautiful Tee",
  size: "S",
  gender: "Female",
  age: "Adult"
},
{
  image_url: "https://img.freepik.com/premium-photo/cool-fashion-casual-men-outfit-wooden-table_93675-18917.jpg",
  name: "Long‑Sleeve Charity Logo Tee",
  size: "M",
  gender: "Unisex",
  age: "Adult"
},
{
  image_url: "https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png",
  name: "Fundraising Support Tee",
  size: "L",
  gender: "Unisex",
  age: "Adult"
},
{
  image_url: "https://www.shutterstock.com/image-photo/variety-different-color-woman-shorts-260nw-273277766.jpg",

  name: "Charity Graphic Tee",
  size: "M",
  gender: "Unisex",
  age: "Adult"
},
{
  image_url: "https://www.shutterstock.com/image-photo/elegant-female-clothes-blank-paper-600nw-2249061455.jpg",
  name: "TGC Hair Donation Tee",
  size: "L",
  gender: "Unisex",
  age: "Adult"
},
{
  image_url: "https://9f8e62d4.delivery.rocketcdn.me/wp-content/uploads/2023/03/INVERTED-TRIANGLE-body-type.jpg",
  name: "New Day Charity Donation Tee",
  size: "L",
  gender: "Unisex",
  age: "Adult"
}

]


const fetchData = async () => {
    try {
        // const data = await data;
        displayData(data);
    } catch (err) {
        console.log(err);
    }
}
fetchData();
console.log(data);

function displayData(data) {
	productDiv.textContent = ""
	data.forEach((e, i) => {
        const div = document.createElement("div")
        div.classList.add('cloth')
		const img = document.createElement("img")
        img.src = e.image_url
        img.classList="productImg"
		img.alt = e.name
		const name = document.createElement("h3")
		name.textContent = e.name
		const age = document.createElement("p")
		age.textContent = e.age
		const gender = document.createElement("p")
		gender.textContent = e.gender
		const size = document.createElement("p")
		size.textContent = "size: " + e.size
		div.append(img, name, age, gender, size)
		productDiv.appendChild(div)
	})
}


document.querySelectorAll(".age").forEach((ele) => {
    ele.addEventListener("input", (e) => {
        if (e.target.value === "age") return displayData(data);
        const ageFilterData = data.filter((el) => el.age.toLowerCase() === e.target.value.toLowerCase());
        displayData(ageFilterData);
        
    })
})

document.querySelectorAll(".size").forEach((ele) => {
    ele.addEventListener("input", (e) => {
        if (e.target.value === "size") return displayData(data);
        const ageFilterData = data.filter((el) => el.size.toLowerCase() === e.target.value.toLowerCase());
        displayData(ageFilterData);
        
    })
})

document.querySelectorAll(".gender").forEach((ele) => {
    ele.addEventListener("input", (e) => {
        if (e.target.value === "gender") return displayData(data);
        const ageFilterData = data.filter((el) => el.gender.toLowerCase() === e.target.value.toLowerCase());
        displayData(ageFilterData);
        
    })
})


document.getElementById