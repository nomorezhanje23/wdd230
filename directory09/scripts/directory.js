//start by the url of the JSON file
const url ="https://nomorezhanje23.github.io/wdd230/directory09/data.json";

//first part from the  text

async function getCompanyData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
  const cards = document.querySelector("div.cards");

  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    //notes from my JSON
    let address = document.createElement("text");
    let phone = document.createElement("text");
    let website = document.createElement("text");
    let membership = document.createElement("text");

    let portrait = document.createElement("img");

    //dates of birth and death of the prophets from the function above
    let dateofbirth = `${company.birthdate}`;
    let dateofdirth = `${company.death}`;

    // retrieving the year only from the date string[ use .slice(-4) to extract the last four characters of the string.]
    //let birthyear = dateofbirth.slice(-4);
    //let deathyear = dateofdirth.slice(-4);

    // Getting the prophet's age; death/current year - birth year
   // let prophetAge = Number(deathyear) - Number(birthyear);

     //code to position the card and the potrait vertically
    card.classList.add("company-card");
    portrait.classList.add("company-img");

    // Information to be displayed after validating the conditions below
    h2.textContent = `${company.companyname}`;
    address.textContent = `Adress: ${address}`;
    phone.textContent = `Contact: ${prophet.phone}`;
    website.textContent = `More info: ${website}`;
    membership.textContent = `Chamber Membership: ${membership}`;
//-----------------------------------Notes from activity ---------------------------------
    // Build the image portrait by setting all the relevant attribute

    portrait.setAttribute("src", company.imageurl);
    portrait.setAttribute("alt",`Portrait of ${company.companyname}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    //From the notes Append the section(card) with the created elements
    cards.appendChild(card);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);


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