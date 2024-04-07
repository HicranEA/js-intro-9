/**
 * bmi = weight / height ^ 2
 */

// Step 1
// Get elements
// input, btn, result
const heightEl= document.getElementById('height');
const weightEl = document.getElementById('weight');
const btnEl = document.querySelector('button');
const resultsEl = document.querySelector('#results');

// Step 2
// Attach an event
// Get values
// Do calculations



// Step 3
// Show result => append to DOM


btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    const heightValue = parseInt(heightEl.value);
    const weightValue = parseInt(weightEl.value);

    const bmi = (weightValue / (heightValue / 100) ** 2).toFixed(2);

    resultsEl.innerHTML = bmi;
})








