import {useState} from "react";
import SearchBar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";
import AQICard from "./components/AQICard";
import Loader from "./components/Loader";
import Error from "./components/Error";
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
    <div style={{padding:"20px", maxWidth:"600px", margin:"0 auto" }}>
      <h1>Weather & AQI Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader/>}
      {error && <Error message={error}/>}
      {weather && <WeatherCard city={city} weather={weather}/>}
      {aqiData && <AQICard aqiData={aqiData}/>}
    </div>
  );
}

export default App;