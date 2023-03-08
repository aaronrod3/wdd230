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




// function doStuff(data) {
//     let hightemp = document.querySelector('#hightemp');
//     hightemp.textContent = data.days.tempmax;
//     let lowtemp = document.querySelector('#lowtemp');
//     lowtemp.textContent = data.days.tempmin;
//     let currenttemp = document.querySelector('#currrenttemp');
//     currenttemp.textContent = data.days.temp;
//     let condition = document.querySelector('#condition');
//     condition.textContent = data.days.conditions;
//     let humidity = document.querySelector('#humidity');
//     humidity.textContent = data.days.humidity;
// }

// async function getWeather(url) {
//     const response = await fetch(url);

//     if (response.ok) {
//         const data = await response.json();
//         doStuff(data);
//     }
// }

// getWeather(url)
