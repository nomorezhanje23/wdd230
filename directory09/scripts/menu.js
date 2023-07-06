function toggleMenu(){
    document.getElementById("menu").classList.toggle("primaryNav");
}

let lastVisitTime = localStorage.getItem("visits-localstorage"); //LAST VISIT
let currentTimestamp = Date.now(); //CURRENT DATE IN MILLISECONDS
const msForDay = 86400000; //MILLISECONDS IN A DAY
const lastVisitInDays = Math.floor((currentTimestamp - lastVisitTime) / msForDay); //DIFERENCE IN DAYS

localStorage.setItem("visits-localstorage", currentTimestamp); //UPDATE LAST VISIT

 function calculateDays() {
    lastVisitInDays;
    const message = `| 🤗 Welcome back! Your last visit was ${lastVisitInDays} days ago |`;
    return message;
}

if (lastVisitInDays >= 1) {
    userVisit.textContent = calculateDays();
    } 
else {
        userVisit.textContent = ` |  😎 Welcome to The Cape Town Chamber!  This is your first visit  😎 |`;
     }