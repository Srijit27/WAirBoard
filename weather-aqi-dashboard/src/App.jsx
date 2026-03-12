import {useState} from "react";
import SearchBar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";
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
    <div style={{padding:"20px", maxWidth:"600px", margin:"0 auto" }}>
      <h1>Weather & AQI Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading weather data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard city={city} weather={weather}/>}
    </div>
  );
}

export default App;