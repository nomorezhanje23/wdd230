// Function to update the specialty drinks count in the local storage and display it

function updateSpecialtyDrinksCount() {
    const specialtyDrinksCount = localStorage.getItem('specialtyDrinksCount') || 0;
    const specialtyDrinksCountElement = document.querySelector('.specialty-drinks-count');
    specialtyDrinksCountElement.textContent = `Number of Specialty Drinks Submitted: ${specialtyDrinksCount}`;
  }

  
  
  // Function to submit the form and store the data in local storage
  function submitForm() {
    
  
    
  
   
    let specialtyDrinksCount = localStorage.getItem('specialtyDrinksCount') || 0;
    specialtyDrinksCount = parseInt(specialtyDrinksCount) + 1;
    localStorage.setItem('specialtyDrinksCount', specialtyDrinksCount.toString());
  
    
    updateSpecialtyDrinksCount();
  
    
    document.getElementById('firstName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('fruit1').value = '';
    document.getElementById('fruit2').value = '';
    document.getElementById('fruit3').value = '';
    document.getElementById('specialInstructions').value = '';
  
    
    alert('Form submitted successfully!');
  }
  
  
  window.addEventListener('DOMContentLoaded', () => {
    updateSpecialtyDrinksCount();
  });
  