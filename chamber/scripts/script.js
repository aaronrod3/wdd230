function clickMenu(x) {
    x.classList.toggle("change");
};


let date = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = date;


const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/sneads%20ferry?unitGroup=us&key=2SXKXZKSWFX9W76BJP5HC2BDC&contentType=json";


// displaying time between visits to site

let lastVisisted = new Date('03/01/2023');

const calcDays = (date_1, date_2) => {
    let difference = date_2.getTime() - date_1.getTime();
    let daysBetween = Math.ceil(difference /(1000 * 3600 * 24));
    return daysBetween;
}

if(localStorage.getItem("lastVisited")==null){
    //first visit
    localStorage.setItem(currentDate, new Date());
} 
else {
    let lastVisisted = localStorage.getItem("lastVisited");
    let currentDate = new Date();
    days = calcDays(lastVisisted, currentDate);
    localStorage.setItem(currentDate, new Date()) //setting current visit for future
    return days
}

document.getElementById("dateDiff").innerHTML = days;


const businessurl = '../chamber/data.json';

const displayBusiness = (business) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let img = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('h2');
        let phone = document.createElement('h3');
        let website = document.createElement('h3');

        portrait.setAttribute('src', businesses.image);
        portrait.setAttribute('alt', `Image of ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        
        card.appendChild(portrait);
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
    // console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusiness(data.businesses);
  }
  
 getBusinessData();