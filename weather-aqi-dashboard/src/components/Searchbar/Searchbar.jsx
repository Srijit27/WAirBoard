import {useState} from "react";
import "./Searchbar.css";

function SearchBar({onSearch}){
  const[city,setCity]=useState("");

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    if(!city.trim()) return;
    onSearch(city.trim());
    setCity("");
  };

  return(
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={(e)=>setCity(e.target.value)}/>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;