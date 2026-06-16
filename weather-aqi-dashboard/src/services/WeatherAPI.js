const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL="https://api.openweathermap.org/data/2.5";

export async function getCityCoordinates(city){
  const response=await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  if(!response.ok){
    throw new Error("Failed to fetch city coordinates");
  }
  const data=await response.json();
  if(data.length===0){
    throw new Error("The city name is invalid..!!");
  }
  return{
    lat:data[0].lat,
    lon:data[0].lon,
    name:data[0].name,
    country:data[0].country,
  };
}
export async function getWeatherData(lat,lon){
  const response=await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if(!response.ok){
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
}

export async function getAirQualityData(lat,lon) {
  const response=await fetch(
    `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch air quality data");
  }
  return response.json();
}