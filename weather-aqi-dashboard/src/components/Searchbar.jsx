import {useState} from "react";

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
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter the city name"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Find
      </button>
    </form>
  );
}

const styles={
  form:{
    display:"flex",
    gap:"10px",
    marginTop:"20px",
  },
  input:{
    padding:"10px",
    fontSize:"16px",
    flex:1,
  },
  button:{
    padding:"10px 16px",
    fontSize:"16px",
    cursor:"pointer",
  },
};

export default SearchBar;
