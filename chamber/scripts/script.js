function clickMenu(x) {
    x.classList.toggle("change");
};


let date = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = date;


const weatherurl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/sneads%20ferry?unitGroup=us&key=2SXKXZKSWFX9W76BJP5HC2BDC&contentType=json";

const displayBusiness = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        
        let name = document.createElement('h2');
        let address = document.createElement('h2');
        let phone = document.createElement('h3');
        let website = document.createElement('h3');
        
        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phonenumber}`;
        website.textContent = `${business.url}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}

async function getWeatherData() {
    const response = await fetch(weatherurl);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusiness(data.businesses);
  }
  
 getWeatherData();


// displaying time between visits to site

// let lastVisisted = new Date('03/01/2023');

// const calcDays = (date_1, date_2) => {
//     let difference = date_2.getTime() - date_1.getTime();
//     let daysBetween = Math.ceil(difference /(1000 * 3600 * 24));
//     return daysBetween;
// }

// if(localStorage.getItem("lastVisited")==null){
//     //first visit
//     localStorage.setItem(currentDate, new Date());
// } 
// else {
//     let lastVisisted = localStorage.getItem("lastVisited");
//     let currentDate = new Date();
//     days = calcDays(lastVisisted, currentDate);
//     localStorage.setItem(currentDate, new Date()) //setting current visit for future
//     return days
// }

// document.getElementById("dateDiff").innerHTML = days;


let businessurl = 'https://raw.githubusercontent.com/aaronrod3/wdd230/main/chamber/data.json';


const displayBusiness = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        
        let name = document.createElement('h2');
        let address = document.createElement('h2');
        let phone = document.createElement('h3');
        let website = document.createElement('h3');
        
        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phonenumber}`;
        website.textContent = `${business.url}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}

async function getBusinessData() {
    const response = await fetch(businessurl);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusiness(data.businesses);
  }
  
 getBusinessData();