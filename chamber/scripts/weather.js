const weatherurl = "https://api.openweathermap.org/data/2.5/weather?zip=28460&units=imperial&appid=d49c0083f5d144998a8f49e0ac248f05";

const currentTemp = document.querySelector('#currenttemp');
const condition = document.querySelector('#condition');
const lowtemp = document.querySelector('#lowtemp');
const hightemp = document.querySelector('#hightemp');
const humidity = document.querySelector('#humidity');

async function getWeatherData() {
    try {
        const response = await fetch(weatherurl);
        if (response.ok) {
          const data = await response.json();
        //console.log(data); // this is for testing the call
        displayWeather(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
    }
  
 getWeatherData();

function displayWeather(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}°F`;
    condition.innerHTML = `${weatherData.weather[0].description}`;
    lowtemp.innerHTML = `Low: ${weatherData.main.temp_min.toFixed(0)}°F`;
    hightemp.innerHTML = `High: ${weatherData.main.temp_max.toFixed(0)}°F`;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity.toFixed(0)}`;
}




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


