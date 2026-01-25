import {useState} from "react";
import SearchBar from "./components/Searchbar";
import {getCityCoordinates,getWeatherData} from "./services/WeatherAPI";

function App(){
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const handleSearch=async(cityName)=>{
    try{
      setLoading(true);
      setError("");
      setWeather(null);
      const location=await getCityCoordinates(cityName);
      const weatherData=await getWeatherData(
        location.lat,
        location.lon
      );

      setCity(`${location.name}, ${location.country}`);
      setWeather(weatherData);
    }catch(err){
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Weather & AQI Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{city}</h2>
          <p> 🌡 Temperature : {weather.main.temp}°C</p>
          <p> 💧 Humidity : {weather.main.humidity}%</p>
          <p> 🌬  Wind Speed : {weather.wind.speed}m/s</p>
          <p> ☁  Condition : {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;