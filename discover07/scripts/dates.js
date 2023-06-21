const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0, 
  rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const today = new Date();
const year = today.getFullYear();

const msg = `&copy;  ${year}  .:| Cape Town Chamber .:|:. Nomore T. Zhanje |:. WDD230
<b>last modified: </b>${document.lastModified}`;

const el = document.getElementById("myfooter");
el.innerHTML = msg;

const userVisit  = document.querySelector(".user-visit"); //class of HTML

//VARIABLES
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