const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const btn = document.querySelector("button");


let toggle = true;
btn.addEventListener("click", () => {
	if (toggle) {
		img1.src = "https://c8.alamy.com/comp/2WC6W8A/shinchan-cute-vector-2WC6W8A.jpg";
		img2.src = "https://freepngimg.com/thumb/categories/402.png";	
	} else {
		img2.src = "https://c8.alamy.com/comp/2WC6W8A/shinchan-cute-vector-2WC6W8A.jpg";
		img1.src = "https://freepngimg.com/thumb/categories/402.png";	
	}

	toggle = !toggle;
})
