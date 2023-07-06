//start by the url of the JSON file

const url ="https://nomorezhanje23.github.io/wdd230/directory09/data.json";

async function getCompanyData(){
  const response = await fetch(url);
  const data = await response.json();

  displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
  const cards = document.querySelector("div.cards");

  companies.forEach((company) => {
    
    let card = document.createElement("section");
    let h4 = document.createElement("h4");
    //parts from my code
    let portrait = document.createElement("img");
    let companyname = document.createElement("text");
    let address = document.createElement("text");
    let phone = document.createElement("text");
    let website = document.createElement("text");
    let membership = document.createElement("text");

    card.classList.add("company-card");
    portrait.classList.add("company-img");
    //what will show on the display

    h4.textContent =`${company.companyname}`;
    companyname.textContent = `${company.companyname}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    website.textContent = `${company.website}`;
    membership.textContent = `${company.membership}`;

    //Building the image portrait by setting all the relevant attribute

    portrait.setAttribute("src", company.imageurl);
    portrait.setAttribute("alt",`Portrait of ${company.companyname}`);
    portrait.setAttribute("loading", "lazy");
    website.setAttribute("href", `${company.website}`);
    website.setAttribute("target", "_blank");
    //portrait.setAttribute("width", "340");
    //portrait.setAttribute("height", "440");

    cards.appendChild(card);
    card.appendChild(h4);
    //might need a code here! Lets see
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    card.appendChild(portrait);
  });
};
