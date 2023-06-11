/*const hamburger = document.getElementById('hamburgerChamber');
const menu = document.querySelector('.toggleMenu');

 hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  });

  const viewsButton = document.getElementById('viewsButton');
  const totalVisitorsContainer = document.getElementById('totalVisitorsContainer');
  
  viewsButton.addEventListener('click', function() {
    totalVisitorsContainer.classList.toggle('active');
    
    if (totalVisitorsContainer.classList.contains('active')) {
      viewsButton.innerHTML='<i class="fas fa-eye"></i>'
      totalVisitorsContainer.style.display = 'block';
      document.body.style.overflow = 'hidden'; 
    } else {
      viewsButton.innerHTML='<i class="fas fa-eye-slash"></i>'
      totalVisitorsContainer.style.display = 'none';
      document.body.style.overflow = ''; 
    }
  });*/

  function toggleMenu(){
    document.getElementById("menu").classList.toggle("primaryNav");
}
  
  const userVisit  = document.querySelector(".user-visit");


let lastVisitTime = localStorage.getItem("visits-localstorage"); 
let currentTimestamp = Date.now();
const msForDay = 86400000;
const lastVisitInDays = Math.floor((currentTimestamp - lastVisitTime) / msForDay);
localStorage.setItem("visits-localstorage", currentTimestamp);

 function calculateDays() {
    lastVisitInDays;
    const message = `| 🤗 Welcome back! Your last visit was ${lastVisitInDays} days ago |`;
    return message;
}

if (lastVisitInDays >= 1) {
    userVisit.textContent = calculateDays();
    } else {
        userVisit.textContent = ` |  👋 Welcome to The Cape Town Chamber!  This is your first visit   |`;
     }