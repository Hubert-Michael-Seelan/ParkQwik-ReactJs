import React from "react";
import nearbyparking from "./Assets/nearby parking icon.png";
import evparking from "./Assets/ev parking icon.png";
import bharatBillpay from "./Assets/bharat-billpay.png";
import netc from "./Assets/national-electronic-toll-collection-netc-logo.png";
import "./CSS/Rectangle.css";

const FastTagBox = () => {
  const iconStyle = {
    width: "51px",
    height: "41px",
    margin: "10px",
    backgroundColor: "#F0FFFA",
    borderRadius: "9px",
    border: "1px solid #F0FFFA",
    textAlign: "center",
  };

  const boxStyle = {
    marginTop: "80px",
    marginLeft: "15px",
    width: "328px",
    position: "relative",
    backgroundColor: "#FFFFFF", // Example background color
    padding: "15px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    borderRadius: "15px",
  };

  const textStyle = {
    width: "100%",
    textAlign: "start",
    fontSize: "14px",
    margin: 0,
  };

  const iconData = [
    { image: nearbyparking, text: "Buy FASTag" },
    { image: nearbyparking, text: "Replace FASTag" },
    { image: evparking, text: "Active FASTag" },
    { image: evparking, text: "Close FASTag" },
  ];

  return (
    <div style={boxStyle} className="card">
      <div style={textStyle}>
        <h4>FASTag Recharge</h4>
        <p style={{margin:0}}>Get up to 100% cashback on first 3 FASTag Recharges</p>
      </div>
      <div className="powered-by">
        <p style={{fontSize: "14px"}}>Powered by</p>
        <img src={netc} alt="netc" style={{height:"57px" , width:"57px", marginBottom:15}}/>
        <img src={bharatBillpay} alt="bharatBillpay" style={{height:25 , width:47, marginRight:100, marginBottom:15}}/>
      </div>
      <h5>Discover</h5>
      <div className="containerStyle">
        <input type="text" className="inputStyle" />
        <button className="buttonStyle">Recharge</button>
      </div>
      {iconData.map((icon, index) => (
        <div key={index} style={{ ...iconStyle }}>
          <img
            src={icon.image}
            alt={`Icon ${index + 1}`}
            style={{ width: "24px", height: "24px" }}
          />
          <div>{icon.text}</div>
        </div>
      ))}
    </div>
  );
};

export default FastTagBox;
