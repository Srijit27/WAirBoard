import {useState} from "react";
import SearchBar from "./components/Searchbar";

function App(){
  const [city,setCity]=useState("");

  const handleSearch=(cityName)=>{
    setCity(cityName);
    console.log("Your searched city is:",cityName);
  };

  return(
    <div style={{padding:"20px", maxWidth:"600px", margin:"0 auto"}}>
      <h1>Weather & AQI Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {city && <p>Showing results for:<strong>{city}</strong></p>}
    </div>
  );
}

export default App;
