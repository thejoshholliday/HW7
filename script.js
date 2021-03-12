document.body.style.backgroundColor = "#66a7e3"

function clickSalvador(){
	salvador.classList.add("clear")
	philadelphia.classList.remove("clear")
	starbucks.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I could look at surrealist art for years! I love how visually absurd they are."
}

let salvador = document.querySelector("#salvador");
salvador.addEventListener("click", clickSalvador);

function clickPhiladelphia(){
	philadelphia.classList.add("clear")
	salvador.classList.remove("clear")
	starbucks.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "I was born in Philadelphia, Pennsylvania on January 7th, 2001!"
}

let philadelphia = document.querySelector("#philadelphia");
philadelphia.addEventListener("click", clickPhiladelphia);


function clickStarbucks(){
	starbucks.classList.add("clear")
	philadelphia.classList.remove("clear")
	salvador.classList.remove("clear")
	let p = document.querySelector("#bio");
	p.innerHTML = "My favorite starbucks order is a vanilla sweet cream cold foam cold brew!"
}

let starbucks = document.querySelector("#starbucks");
starbucks.addEventListener("click", clickStarbucks);


