async function getWether() {
    const city = document.getElementById("cityInput").value;

   if(city) {
    alert('Please enter a city name');
    return;
   } 

   let geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
}