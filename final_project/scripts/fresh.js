async function loadFruitData() {
    try {
      const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
      const data = await response.json();
  
      if (Array.isArray(data)) {
        return data; // Return the array of fruits
      } else {
        console.error('Invalid fruit data format: Expected an array.');
        return [];
      }
    } catch (error) {
      console.error('Error loading fruit data:', error);
      return [];
    }
  }
  
// script.js
// Your existing code for fetching weather data

// Function to update the specialty drinks count in the local storage and display it
function updateSpecialtyDrinksCount() {
    const specialtyDrinksCount = localStorage.getItem('specialtyDrinksCount') || 0;
    const specialtyDrinksCountElement = document.querySelector('.specialty-drinks-count');
    specialtyDrinksCountElement.textContent = `Number of Specialty Drinks Submitted: ${specialtyDrinksCount}`;
  }
  
  
  
    // Do additional processing with the form data if needed
  
    // Increment the specialty drinks count
    let specialtyDrinksCount = localStorage.getItem('specialtyDrinksCount') || 0;
    specialtyDrinksCount = parseInt(specialtyDrinksCount) + 1;
    localStorage.setItem('specialtyDrinksCount', specialtyDrinksCount.toString());
  
    // Update the specialty drinks count display
    updateSpecialtyDrinksCount();
  
    // Clear the form fields after submission
    document.getElementById('firstName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('fruit1').value = '';
    document.getElementById('fruit2').value = '';
    document.getElementById('fruit3').value = '';
    document.getElementById('specialInstructions').value = '';
  
    // Optionally, display a success message to the user
    alert('Form submitted successfully!');
  
  
  // Call the function to update the specialty drinks count on page load
  window.addEventListener('DOMContentLoaded', () => {
    updateSpecialtyDrinksCount();
  });
  

  // Populate the select elements with fruit options
  async function populateFruitOptions() {
    const fruitData = await loadFruitData();
  
    const fruitSelects = document.querySelectorAll('select[id^="fruit"]');
    fruitSelects.forEach((select) => {
      fruitData.forEach((fruit) => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.text = fruit.name;
        select.appendChild(option);
      });
    });
  }
  
  // Calculate and display the nutritional values
  //function calculateNutritionalValues() {
   // const fruitData = loadFruitData();
   // const fruitSelects = document.querySelectorAll('select[id^="fruit"]');
    //const selectedFruits = Array.from(fruitSelects).map((select) => select.value);
  
    //const selectedFruitData = fruitData.filter((fruit) => selectedFruits.includes(fruit.name));
  
    //const totalNutritionalValues = {
     // carbohydrates: 0,
      //protein: 0,
      //fat: 0,
      //sugar: 0,
      //calories: 0,
    //};
  
    //selectedFruitData.forEach((fruit) => {
    //  totalNutritionalValues.carbohydrates += fruit.carbohydrates;
     // totalNutritionalValues.protein += fruit.protein;
      ///totalNutritionalValues.fat += fruit.fat;
      //totalNutritionalValues.sugar += fruit.sugar;
      //totalNutritionalValues.calories += fruit.calories;
    //});
  
    //return totalNutritionalValues;
  //}
  
  // Display the order summary
  function displayOrderSummary() {
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const specialInstructions = document.getElementById('specialInstructions').value;
  //  const nutritionalValues = calculateNutritionalValues();
  
    const orderSummary = `
      <h2>Order Summary:</h2>
      <p><strong>Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Fruit 1:</strong> ${document.getElementById('fruit1').value}</p>
      <p><strong>Fruit 2:</strong> ${document.getElementById('fruit2').value}</p>
      <p><strong>Fruit 3:</strong> ${document.getElementById('fruit3').value}</p>
      <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
    `;
  
    document.getElementById('orderSummary').innerHTML = orderSummary;
    
  }
  
  // Event handler for form submission
  function submitForm() {
    displayOrderSummary();
  }
  
  

  // Footer 

window.addEventListener('DOMContentLoaded', function() {
    var lastModified = document.lastModified;
    var lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = 'Last modified: ' + lastModified + ' .:|:. Bountiful Foods .:|:. Nomore T. Zhanje |:. WDD230 ' ;
});
