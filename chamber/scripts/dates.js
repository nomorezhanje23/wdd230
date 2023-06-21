/*select the DOM elements to manipulate (we will output to these)*/
const datefield = document.querySelector("time");
// for european/family history format with day first.
const datefieldUK = document.querySelector("aside");
//const datemessage = document.querySelector("p");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// "full" or long, medium, short options ... try them

//datefield.textContent = fulldate;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
//datemessage.innerHTML = `Today is <strong>${fulldate}</strong>. What are you going to do?`;

const today = new Date();
const year = today.getFullYear();

const msg = `&copy;  ${year}  .:| Cape Town Chambers .:|:. Nomore T. Zhanje |:. WDD230
<b>last modified: </b>${document.lastModified}`;

const el = document.getElementById("myfooter");
el.innerHTML = msg;

function newDate(){
    return new Date();
}

const jour = newDate().getDay();

console.log(jour);

document.addEventListener("DOMContentLoaded", function(){
    if (jour === 1 || jour === 2) {
        const element = document.getElementById('banner');
        element.style.display = 'block';
    }
})

