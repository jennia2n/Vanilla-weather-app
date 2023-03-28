Function displayTemperature (response)
{console.log(response.data.main.temp);
let temperatureElement = document.querySelector("#temperature");
let cityElement= document.querySelector("#city");
temperatureElement.innerHTML= Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;}

let apikey = "2ff29bed3181c3526c35cc5408037f85";
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);