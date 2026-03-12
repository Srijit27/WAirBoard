function WeatherCard({city,weather})
{
  return(
    <div style={styles.card}>
      <h2>{city}</h2>
      <p>🌡Temperature:{weather.main.temp}°C</p>
      <p>💧Humidity:{weather.main.humidity}%</p>
      <p>🌬Wind Speed:{weather.wind.speed}m/s</p>
      <p>☁Condition:{weather.weather[0].description}</p>
    </div>
  );
}

const styles={
  card:{
    marginTop:"20px",
    padding:"20px",
    borderRadius:"10px",
    backgroundColor:"#ffffff",
    boxShadow:"0px 4px 12px rgba(0,0,0,0.1)",
  },
};
export default WeatherCard;