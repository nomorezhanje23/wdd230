function windchill(temp, windSpeed) {
    return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16));
}
const windchillElement = document.querySelector("#Wind-Chill");
let temp = document.querySelector("#Temp").textContent;
let windSpeed = document.querySelector("#Wind-Speed").textContent;
let chill = windchill(temp, windSpeed);
windchillElement.innerHTML = temp >= 50 ? "N/A" : chill + "°F";

/*notes

const celsiusTemperature = parseFloat(
  document.getElementById("weatherDegree").textContent.replace("°C", "")
);
const windSpeedKmph = parseFloat(
  document.getElementById("windSpeed").textContent.replace("km/h", "")
);
const windChillSpan = document.getElementById("windChill");

//Formula of wind chill
const windChill = (tempCelsius, windMph) => {
  return (
    35.74 +
    0.6215 * tempCelsius -
    35.75 * Math.pow(windMph, 0.16) +
    0.4275 * tempCelsius * Math.pow(windMph, 0.16)
  ).toFixed(2);
};

//convert °c to °f
const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
//convert km/h to m/hs
const windSpeedMph = windSpeedKmph / 1.60934;

//Valid range to Wind chill
if (fahrenheitTemperature >= 50 && windSpeedMph > 3.0) {
  //Output
  windChillSpan.textContent = `${windChill(celsiusTemperature, windSpeedMph)}`;
} else {
  windChillSpan.textContent = "N/A";
}
*/