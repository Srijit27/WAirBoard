function Error({ message }){
  return(
    <div style={styles.errorBox}>
      <h3>⚠ Error</h3>
      <p>{message}</p>
    </div>
  );
}

const styles={
  errorBox:{
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#ffe6e6",
    border: "1px solid #ff4d4d",
    borderRadius: "8px",
    color: "#cc0000",
  },
};

export default Error;