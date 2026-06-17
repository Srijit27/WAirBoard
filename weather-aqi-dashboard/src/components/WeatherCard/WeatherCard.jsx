import "./WeatherCard.css";

function WeatherCard({city,weather})
{
  const iconCode = weather.weather[0].icon;
  const iconUrl =`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  console.log(weather);
  return(
    <div className="weather-card">
      <div className="weather-header">
        <img className="weather-icon"src={iconUrl} alt="weather icon"/>
        <h2 className="weather-city">{city}</h2>
      </div>
      <div className="weather-info">
        <p> 💧 Humidity : {weather.main.humidity} %</p>
        <p> 🌬  Wind Speed : {weather.wind.speed} m/s</p>
        <p> ☁  Condition : {weather.weather[0].description}</p>
        <p> 🌡 Temperature : {weather.main.temp} °C</p>
        <p> 📈 Pressure : {weather.main.pressure} hPa</p>
        <p> 👁 Visibility : {(weather.visibility / 1000).toFixed(1)} km</p>
        <p>
          🌅 Sunrise :
          {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>
          🌇 Sunset :
          {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default WeatherCard;