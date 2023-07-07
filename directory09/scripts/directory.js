//start by the url of the JSON file

const url ="https://nomorezhanje23.github.io/wdd230/directory09/data.json";

fetch(url)
  .then(function(response){
    return response.json();
})
.then(function(jsonObject){
  const companies = jsonObject['companies'];
  
  for( let i =0; i < companies.length; i++){

    let image = document.createElement('img');
    let grid = document.createElement('section');
    let companyname = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement('p')
    
    
  
    var altImg = companies[i].companyname ;
  
    companyname.textContent = companies[i].companyname;
    address.textContent = 'Adrress: '+ companies[i].address;
    phone.textContent = 'Tel: ' + companies[i].phone;
    image.setAttribute('src', companies[i].imageurl);
    membership.textContent = `${companies[i].membership}`;
    website.textContent = `${companies[i].website}`;
    website.setAttribute('href', `${companies[i].website}`);
  
    website.href = 'website'; 

    grid.appendChild(companyname); 
    grid.appendChild(address);  
    grid.appendChild(phone);
    grid.appendChild(image, image.alt = altImg);
    grid.appendChild(website, website.href); 
    grid.appendChild(membership);

    document.querySelector("article.grid").appendChild(grid);
   
   }
  
  });


//responsive layouts
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});
listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}



