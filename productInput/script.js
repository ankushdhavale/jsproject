const movieName = document.getElementById("movieName");
const movieUrl = document.getElementById("movieUrl");
const movieYear = document.getElementById("movieYear");
const mainForm = document.getElementById("form");
const mainDiv = document.querySelector(".main");
const submitBtn = document.querySelector("#submit");
const filterInputData = document.querySelector(".inputFilter");
const movieProducts = [];

mainForm.addEventListener("submit", (e) => {
	e.preventDefault();
    addToMovieProducts();
    movieName.value = "";
    movieUrl.value = "";
    movieYear.value = "";
});

const addToMovieProducts = () => {
	const movieObj = {
		name: movieName.value,
		url: movieUrl.value,
		year: movieYear.value,
	};
	movieProducts.push(movieObj);
	displayMovieCard(movieProducts);
};

const displayMovieCard = (movieProduct) => {
    mainDiv.innerHTML = "";
    movieProduct.forEach((movie) => {
        const movieDiv = document.createElement("div");
        const movieh2 = document.createElement("h3");
        const movieImg = document.createElement("img");
        const movieYearPara = document.createElement("p");
        movieh2.textContent = "Title : "+movie.name;
		movieImg.src = movie.url;
		movieYearPara.textContent ="Year : "+ movie.year;
		movieDiv.classList = "movieContent";
		movieDiv.append(movieImg, movieh2, movieYearPara);
		mainDiv.appendChild(movieDiv);
	});
};

filterInputData.addEventListener("input", (e) => {
	const filterByYearData = movieProducts.filter((movieYear) => {
		return movieYear.year.startsWith(e.target.value);
    });
    console.log(filterByYearData);
    displayMovieCard(filterByYearData);
});

console.log(movieProducts);
