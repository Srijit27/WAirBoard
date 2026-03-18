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
    <div style={{...styles.card,borderLeft:`8px solid ${color}`}}>
      <h2>Air Quality Index</h2>
      <p style={{fontSize:"20px",fontWeight:"bold",color}}>
        AQI:{aqi}({label})
      </p>
      <div style={styles.grid}>
        <p>PM2.5:{components.pm2_5}</p>
        <p>PM10:{components.pm10}</p>
        <p>CO:{components.co}</p>
        <p>NO₂:{components.no2}</p>
        <p>O₃:{components.o3}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    marginTop:"20px",
    padding:"20px",
    borderRadius:"10px",
    backgroundColor:"#ffffff",
    boxShadow:"0px 4px 12px rgba(0,0,0,0.1)",
  },
  grid: {
    marginTop: "10px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
};

export default AQICard;