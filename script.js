async function getWeather() {
    const city = document.getElementById("cityInput").value;

   if (!city) {
    alert("Please enter a city name");
    return;
   } 

   let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;

   let geoData = await fetch(geoURL).then((res) => res.json());

   if (!geoData.results) {
    alert("city not found");
    return;
   }
   console.log(geoData);
}