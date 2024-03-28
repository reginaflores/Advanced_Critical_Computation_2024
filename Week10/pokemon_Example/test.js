// accessing an api is really easy now using simple using fetch
//https://www.youtube.com/watch?v=37vxWr0WgQk


let searchTerm = "pikachu";
let searchURL = "https://pokeapi.co/api/v2/pokemon/" + searchTerm;

fetch(searchURL)
	.then(response => {
		if(!response.ok){
			throw new Error("could not fetch reource");
		}
		console.log(response);
		return response.json();
	})
	.then(data => {
		console.log(data);
		dataResults(data);
	})
	.catch(error => console.error(error));

	function dataResults(data){
		let resultsContainer = document.getElementById("resultsdiv");

		const name = data.name;
		console.log(name);
		const sprite = data.sprites.front_default;
		console.log(sprite);

		let resultItem = document.createElement("div");
		resultItem.innerHTML = `
		  <h2>${name}</h2>
		  <img src="${sprite}">
		`;
		resultsContainer.appendChild(resultItem);


	}