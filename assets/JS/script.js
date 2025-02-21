const ApiKey = "dc025c7dd108345d976023d3d3c9debf";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const weatherIcons = new Map([
   ["Clouds", "assets/images/cloud2.png"],
   ["Clear", "assets/images/clear.png"],
   ["Rain", "assets/images/rain.png"],
   ["Drizzle", "assets/images/cloud.png"],
   ["Mist", "assets/images/mist.png"],
   ["Haze", "assets/images/haze.png"],
   ["Snow", "assets/images/snow.png"]
 ]);

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
       
       
      const condition = data.weather[0].main;
      weatherIcon.src = weatherIcons.get(condition);

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
        
        
   
     } 
 
}

SearchBtn.addEventListener("click",()=>{
    checkWeather(SearchBox.value);
})
