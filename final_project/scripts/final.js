 // Menu
 function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
// JavaScript code to fetch weather data from OpenWeatherMap API and update the page

const apiKey = '68110922788fb3366962c7002b6bb55c';
const city = 'Carlsbad';
const countryCode = 'US';

// Fetch current weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const temperatureElement = document.getElementById('temperature');
        const humidityElement = document.getElementById('humidity');
        const descriptionElement = document.getElementById('description');
        //const weatherIconElement = document.getElementById('weatherIcon');

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        //const weatherIcon = data.weather[0].icon;

        temperatureElement.textContent = temperature + '°C';
        humidityElement.textContent = humidity + '%';
        descriptionElement.textContent = description;
        //weatherIconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
    })
    .catch(error => console.log('Error fetching current weather:', error));

// Fetch 3-day forecast data
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const forecastListElement = document.getElementById('forecastList');

        for (let i = 0; i < data.list.length; i += 8) {
            const forecastData = data.list[i];
            const date = new Date(forecastData.dt_txt);
            const temperature = forecastData.main.temp;
            const weatherIcon = forecastData.weather[0].icon;

            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${date.toDateString()}</strong> - ${temperature}°C <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather Icon">`;
            forecastListElement.appendChild(listItem);
        }
    })
    .catch(error => console.log('Error fetching forecast:', error));

// Function to update the specialty drinks count from the local storage
function updateSpecialtyDrinksCount() {
  const specialtyDrinksCount = localStorage.getItem('specialtyDrinksCount') || 0;
  const specialtyDrinksCountElement = document.querySelector('.specialty-drinks-count');
  specialtyDrinksCountElement.textContent = `Number of Specialty Drinks Submitted: ${specialtyDrinksCount}`;
}

// Call the functions to update the page on load
window.addEventListener('DOMContentLoaded', () => {
  updateWeatherCard();
  updateSpecialtyDrinksCount();
});
// Footer 

window.addEventListener('DOMContentLoaded', function() {
    var lastModified = document.lastModified;
    var lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = 'Last modified: ' + lastModified + ' .:| Bountiful Foods .:|:. Nomore T. Zhanje |:. WDD230 ' ;
});

