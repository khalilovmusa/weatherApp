const apiKey = "8064991055743f5f4209d3a9217fb9ff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const showWeather = document.querySelector(".weather");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        console.log("Alert");
        alert("Seherin adini duzgun yazin!");
    }else{
        let data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        showWeather.style.display = "block";
    }

    // console.log(data);


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (event)=> {
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("search-button").click();
    }
})

// searchBox.addEventListener("keypress", function(event) {
//     // If the user presses the "Enter" key on the keyboard
//     if (event.key === "Enter") {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       document.getElementById("myBtn").click();
//     }
//   });

checkWeather();