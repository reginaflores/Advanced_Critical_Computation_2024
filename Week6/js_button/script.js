/////////////////////////////////////////
//example 1 with html button element
function onButtonClick() {
    alert('Button clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

/////////////////////////////////////////
//example 2: putting names in an array
// Script to handle name input
// let enteredName = ''; // if you wanted to store a value
let enteredNames = []; //if you wanted to store an array of values

function handleSubmit() {
    let nameInput = document.getElementById('nameInput');
    let enteredName = nameInput.value.trim();

    if (enteredName !== '') {
        enteredNames.push(enteredName);
        alert('Entered Name: ' + enteredName);

        // Reset the input field after submitting
        nameInput.value = '';
        // Update the displayed list of entered names
        updateEnteredNamesList();
    } else {
        alert('Please enter a valid name.');
    }
}

document.getElementById('nameInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
});

// Function to update the displayed list of entered names
function updateEnteredNamesList() {
    const enteredNamesList = document.getElementById('enteredNamesList');
    enteredNamesList.innerHTML = 'Entered Names: ' + enteredNames.join(', ');
}

/////////////////////////////////////////
//example 3: all js -- notice there is no html elements in the index file
const newButtonContainer = document.createElement('div');
newButtonContainer.classList.add('example-box');

const newButtonLabel = document.createElement('p');
newButtonLabel.textContent = 'Example 3:';

const newButton = document.createElement('button');
newButton.textContent = 'Click me! I change color!';
newButtonContainer.appendChild(newButtonLabel);
newButtonContainer.appendChild(newButton);

document.body.appendChild(newButtonContainer);

newButton.addEventListener('click', () => {
    // Generate a random color
    const randomColor = getRandomColor();

    // Apply the random color to the button background
    newButton.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Using js for style
newButton.style.fontFamily = 'Courier New';
newButton.style.border = '1px solid #ddd';
newButton.style.padding = '20px';
newButton.style.margin = '10px';
newButton.style.borderRadius = '8px';
newButton.style.backgroundColor = '#f9f9f9';
newButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

