//----------Met Museum API----------//
// https://metmuseum.github.io/
//


document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const searchTerm = document.getElementById("searchInput").value;
    const searchUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + searchTerm;

    console.log("Fetching data from:", searchUrl); // Log the URL being fetched

    fetch(searchUrl)
      .then(response => {
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
  });

  function displayResults(data) {
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous results
  
    if (data.objectIDs.length === 0) {
      resultsContainer.textContent = "No results found.";
      return;
    }
  
    const objectIDs = data.objectIDs.slice(0, 10); // Limit to 10 results for demonstration
  
    objectIDs.forEach(objectID => {
      const objectUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;
      fetch(objectUrl)
        .then(response => response.json())
        .then(objectData => {
          if (objectData.primaryImageSmall) { // Check if there's an image available
            const title = objectData.title;
            const imageUrl = objectData.primaryImageSmall;
            const description = objectData.objectDate;
            const artist = objectData.artistDisplayName;
  
            const resultItem = document.createElement("div");
            resultItem.innerHTML = `
              <h2>${title}</h2>
              <img src="${imageUrl}" alt="${title}">
              <p><strong>Artist:</strong> ${artist}</p>
              <p><strong>Description:</strong> ${description}</p>
            `;
            resultsContainer.appendChild(resultItem);
          }
        })
        .catch(error => {
          console.error('Error fetching object data:', error);
        });
    });
  }
  