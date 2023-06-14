//start by the url of the JSON file
const url ="https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

//first part from the  text

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards");

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    //notes from bro blazzard JSON
    let daybirth = document.createElement("text");
    let birthplace = document.createElement("text");
    let deathYear = document.createElement("text");
    let age = document.createElement("text");

    let portrait = document.createElement("img");

    //dates of birth and death of the prophets from the function above
    let dateofbirth = `${prophet.birthdate}`;
    let dateofdirth = `${prophet.death}`;

    // retrieving the year only from the date string[ use .slice(-4) to extract the last four characters of the string.]
    let birthyear = dateofbirth.slice(-4);
    let deathyear = dateofdirth.slice(-4);

    // Getting the prophet's age; death/current year - birth year
    let prophetAge = Number(deathyear) - Number(birthyear);

     //code to position the card and the potrait vertically
    card.classList.add("prophet-card");
    portrait.classList.add("prophet-img");

    // Information to be displayed after validating the conditions below
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    daybirth.textContent = `Date of Birth: ${dateofbirth}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    deathYear.textContent = `Time of Death: ${dateofdirth}`;
    age.textContent = `Died at Age: ${prophetAge}`;
//-----------------------------------Notes from activity ---------------------------------
    // Build the image portrait by setting all the relevant attribute

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt",`Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    //From the notes Append the section(card) with the created elements
    cards.appendChild(card);
    card.appendChild(h2);
    card.appendChild(daybirth);
    card.appendChild(birthplace);

    // Get current year T(now)
    const nowT = new Date();
    let currentYear = nowT.getFullYear();

    // The age of the the Prophet
    let currentAge = Number(currentYear) - Number(birthyear);

    // Display the time of death and age for the deceased prophets
    if (deathYear.textContent !== `Time of Death: null`) {
      card.appendChild(deathYear);
      card.appendChild(age);
    } else {
      // Display the age of the living prophet
      age.textContent = ` Current Age: ${currentAge}`;
      card.appendChild(age);
    }
    card.appendChild(portrait);
  });
};
 