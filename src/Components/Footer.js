import React from "react";

const Footer = () => {
  const boxStyle = {
    marginTop: "10px",
    marginLeft: "15px",
    width: "328px",
    height: "152px",
    position: "relative",
    background: "linear-gradient(#9EFFE1, #E9FFF8)", // Example background color
    padding: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "15px",
  };
  return (
    <div>
      <p style={{fontWeight:"bolder", marginTop:"50px", marginLeft:"30px"}}>How ParkQwik Works?</p>
      <div style={boxStyle} className="card"></div>
    </div>
  );
};

export default Footer;
