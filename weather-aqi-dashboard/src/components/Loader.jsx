function Loader(){
  return(
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p>Loading the data...</p>
    </div>
  );
}
const styles={
  container:{
    marginTop: "20px",
    textAlign: "center",
  },
  spinner:{
    width: "40px",
    height: "40px",
    margin: "0 auto 10px",
    border: "4px solid #ddd",
    borderTop: "4px solid #2196f3",
    borderRadius: "50%",
  },
};

export default Loader;