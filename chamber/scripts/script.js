function clickMenu(x) {
    x.classList.toggle("change");
};


let date = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = date;


const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/sneads%20ferry?unitGroup=us&key=2SXKXZKSWFX9W76BJP5HC2BDC&contentType=json";



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
