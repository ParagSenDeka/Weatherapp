const API_KEY = "Your API Key";

const locatione = document.getElementById("locatione");
const temperature = document.getElementById("temperature");
const city = document.getElementById("city");
const p = document.getElementById("p");
p.style.visibility="hidden";

function searchCity() {
    const cityName = city.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + API_KEY)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            if (!data.name) {
                p.style.visibility = "visible";
            }
            else {
                p.style.visibility="hidden";
                locatione.innerText = data.name;
                temperature.innerText = data.main.temp + "F / " + Math.round(parseFloat(data.main.temp) - 273.15) + "°C";
            }
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });
}

const form = document.getElementById("search-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    searchCity;
    city.innerHTML = "";
});
