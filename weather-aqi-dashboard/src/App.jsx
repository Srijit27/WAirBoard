import {useState} from "react";
import "./App.css";
import SearchBar from "./components/Searchbar/Searchbar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import AQICard from "./components/AQICard/AQICard";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import {getCityCoordinates,getWeatherData,getAirQualityData} from "./services/WeatherAPI";

function App(){
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const handleSearch=async(cityName)=>{
    try{
      setLoading(true);
      setError("");
      setWeather(null);
      setAqiData(null);
      const location=await getCityCoordinates(cityName);
      const weatherData=await getWeatherData(
        location.lat,
        location.lon
      );
      console.log(weatherData);
      const airQualityData=await getAirQualityData(
        location.lat,
        location.lon
      );

      setCity(`${location.name}, ${location.country}`);
      setWeather(weatherData);
      setAqiData(airQualityData);
    }catch(err){
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather & AQI Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader/>}
      {error && <Error message={error}/>}
      {weather && aqiData && (
        <div className="dashboard-grid">
          <WeatherCard city={city} weather={weather} />
          <AQICard aqiData={aqiData} />
        </div>
      )}
    </div>
  );
}

export default App;