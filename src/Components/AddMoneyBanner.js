import React from "react";
import addMoneyFrame from "./Assets/Frame.png";

const AddMoneyBanner = () => {
  const boxStyle = {
    marginTop: "15px",
    marginLeft: "15px",
    width: "328px",
    height: "136px",
    position: "relative",
    background: "linear-gradient(#1A9E75, #1A9E75, #A6A765)", // Example background color
    padding: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "15px",
  };
  const moneyBtn = {
    height: "23px",
    width: "100px",
    backgroundColor: "#FFFFFF",
    color: "#1A9E75",
    borderRadius: "10px",
    border: "none",
    fontWeight: "bold"
  }
  return (
    <div style={boxStyle} className="card">
      <div className="container">
        <p style={{marginTop: "15px", marginBottom:"0", color: "white", fontSize:"13px"}}>Add money to wallet</p>
        <p style={{marginTop: "5px", color: "white", fontSize:"12px"}}>Get 2% cashback</p>
        <button style={moneyBtn}>Add Money</button>
      </div>
      <div>
        <img
          src={addMoneyFrame}
          alt="addMoneyFrame"
          style={{ width: "112px", height: "96px" }}
        />
      </div>
    </div>
  );
};

export default AddMoneyBanner;
