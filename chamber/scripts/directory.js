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
    // console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    displayBusiness(data.businesses);
  }
  
 getBusinessData();