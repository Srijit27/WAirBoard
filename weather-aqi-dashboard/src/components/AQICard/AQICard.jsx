import "./AQICard.css";

function AQICard({aqiData}) 
{
    if (!aqiData||!aqiData.list) return null;
    const aqi=aqiData.list[0].main.aqi;
    const components=aqiData.list[0].components;
    const getAQILevel=(aqi)=>{
        switch(aqi){
            case 1:
                return {label:"Good",color:"#4caf50"};
            case 2:
                return {label:"Fair",color:"#8bc34a"};
            case 3:
                return {label:"Moderate",color:"#ffc107"};
            case 4:
                return {label:"Poor",color:"#ff9800"};
            case 5:
                return {label:"Very Poor",color:"#f44336"};
            default:
                return {label:"Unknown",color:"#9e9e9e"};
    }
  };

  const {label,color}=getAQILevel(aqi);

  return(
    <div className="aqi-card">
      <h2 className="aqi-title">Air Quality Index</h2>
      <p className="aqi-status">
        <span className="aqi-badge" style={{ backgroundColor: color }}>
          AQI {aqi} • {label}
        </span>
      </p>
      <div className="aqi-grid">
        <p>PM2.5:{components.pm2_5}</p>
        <p>PM10:{components.pm10}</p>
        <p>CO:{components.co}</p>
        <p>NO₂:{components.no2}</p>
        <p>O₃:{components.o3}</p>
      </div>
    </div>
  );
}

export default AQICard;