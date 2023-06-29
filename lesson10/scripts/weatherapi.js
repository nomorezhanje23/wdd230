const apiKey = '68110922788fb3366962c7002b6bb55c';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=${apiKey}`;


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const weatherInfoElement = document.getElementById('weatherpart');
  const temp = weatherData.main.temp.toFixed(0);
  const iconsrc = weatherData.weather[0].icon;
  const desc = weatherData.weather[0].description;

  const htmlContent = `
    <p>The current temperature in Fairbanks, Alaska is <strong>${temp}°F</strong></p>
    <h2>Current Condition Icon</h2>
    <figure>
      <img class="weather-img" alt="Weather icon" src="https://openweathermap.org/img/wn/${iconsrc}@2x.png">
      <img src="" alt="" id="weather-icon">
      <figcaption>${desc}</figcaption>
    </figure>`;
  weatherInfoElement.innerHTML = htmlContent;
}
apiFetch();