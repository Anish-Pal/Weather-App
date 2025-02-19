const ApiKey = "dc025c7dd108345d976023d3d3c9debf";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
     const response = await fetch(ApiURL + city + `&appid=${ApiKey}`);

     if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
     }
     else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
       
   
        if(data.weather[0].main == "Clouds"){
           weatherIcon.src = "cloud2.png";
        }
        else if(data.weather[0].main == "Clear"){
           weatherIcon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
           weatherIcon.src = "rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
           weatherIcon.src = "cloud.png";
        }
        else if(data.weather[0].main == "Mist"){
           weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main == "Haze"){
           weatherIcon.src = "haze.png";
        }
        else if(data.weather[0].main == "Snow"){
           weatherIcon.src = "snow.png";
        }
       
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
        
   
     } 
 
}

SearchBtn.addEventListener("click",()=>{
    checkWeather(SearchBox.value);
})
