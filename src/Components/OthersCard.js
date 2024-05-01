import React from 'react';
import nearbyparking from "./Assets/nearby parking icon.png";
import evparking from "./Assets/ev parking icon.png";
import "./CSS/Rectangle.css";

const OthersCard = () => {
  const iconStyle = {
    width: '51px',
    height: '41px',
    margin: '5px',
    textAlign: 'center',
  };

  const boxStyle = {
    marginTop: '15px',
    marginLeft: '15px',
    width: '328px',
    height: '132px',
    backgroundColor: '#FFFFFF', // Example background color
    padding: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    borderRadius: '15px',
  };

  const iconData = [
    { image: nearbyparking, text: 'Rentout Helmet' },
    { image: evparking, text: 'Fuel Price' },
    { image: evparking, text: 'Shop' },
    { image: evparking, text: 'My Vehicles' },
  ];
  
  return (
    <div style={boxStyle} className='card d-flex flex-row'>
      <h4 style={{marginRight:200}}>Others</h4>
      {iconData.map((icon, index) => (
        <div key={index} style={iconStyle}>
          <img src={icon.image} alt={`Icon ${index + 1}`} style={{ width: '28', height: '28' }}/>
          <div>{icon.text}</div>
        </div>
      ))}
    </div>
  );
};

export default OthersCard;
