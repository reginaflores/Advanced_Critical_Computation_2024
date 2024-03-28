//----------Met Museum API----------//
// https://metmuseum.github.io/
// https://www.metmuseum.org/art/collection/search/436535

//General principle: 
//Call the Met API using a url provided by the Met API documetation and return an image

//Resources:
//https://www.geeksforgeeks.org/javascript-fetch-method/

//Watch this helpful video for some nice notes:
//https://www.youtube.com/watch?v=yUGXqaV-qVw

/*-------------------------------------------------*/


//STEP 1: DEFINE THE API URL

//Define my API
let searchTerm = "dog";
let searchUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + searchTerm;


//STEP 2: FETCH REQUEST TO GET GET THE DATA

fetch(searchUrl)
    .then(response => {
        console.log(response);
        console.log("Response status:", response.status); // Log the response status
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data); // Log the JSON response
        displayResults(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

//STEP 3: WRANGLE DATA -- EVERY API IS DIFFERENT 
//HERE YOU ARE PARSING THROUGH THE DATA AND PULLING OUT
//THE SPECIFIC ELEMENTS IN THE JSON YOU WANT

//Notice that in the MET API it gives you a list of Ids and you have to ping 
//the API a second time to get the actual meta data for each object id
function displayResults(data) {
    const resultsContainer = document.getElementById("searchResults");

    console.log("wrangle the data");
    let objectIDs = data.objectIDs.splice(0, 10);
    console.log(objectIDs);

    // Using forEach() to add the prefix to each number
    objectIDs.forEach(objectID => {
        let objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
        fetch(objectUrl)
            .then(response => {
                return response.json()
            })
            .then(objectData => {
                const title = objectData.title;
                console.log(title);
                const imageUrl = objectData.primaryImageSmall;
                console.log(imageUrl);

                let resultItem = document.createElement("div");
                resultItem.innerHTML = `
                  <h2>${title}</h2>
                  <img src="${imageUrl}" alt="${title}">
                `;
                resultsContainer.appendChild(resultItem);
    
            })
            .catch(error => {
                console.error('Error fetching object data:', error);
            });

    });
}
// Note that we are using the forEach method which is just like using a for loop:
    // for (let i = 0; i < objectIDs.length; i++) {
    //     let objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectIDs[i]}`;

    //     fetch(objectUrl)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(objectData => {
    //             const title = objectData.title;
    //             console.log(title);
    //             const imageUrl = objectData.primaryImageSmall;
    //             console.log(imageUrl);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching object data:', error);
    //         });
    // }

