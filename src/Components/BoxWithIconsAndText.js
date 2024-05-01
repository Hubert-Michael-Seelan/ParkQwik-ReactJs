import React from 'react';
import nearbyparking from "./Assets/nearby parking icon.png";
import evparking from "./Assets/ev parking icon.png";
import "./CSS/Rectangle.css";

const BoxWithIconsAndText = () => {
  const iconStyle = {
    width: '51px',
    height: '41px',
    margin: '5px',
    textAlign: 'center',
  };

  const boxStyle = {
    marginLeft: '15px',
    marginTop:'40px',
    width: '328px',
    height: '229px',
    backgroundColor: '#FFFFFF', // Example background color
    padding: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    borderRadius: '15px',
  };

  const iconData = [
    { image: nearbyparking, text: 'Nearby Parking' },
    { image: evparking, text: 'EV Parking' },
    { image: evparking, text: 'Car Wash' },
    { image: evparking, text: 'Vehicle Insurance' },
    { image: evparking, text: 'Road Assist' },
    { image: evparking, text: 'Pay Challan' },
    { image: evparking, text: 'Toll Estimator' },
    { image: evparking, text: 'Valet Parking' },
  ];
  
  return (
    <div style={boxStyle} className='card d-flex flex-row'>
      <h4 style={{marginRight:150}}>Services</h4>
      {iconData.map((icon, index) => (
        <div key={index} style={iconStyle}>
          <img src={icon.image} alt={`Icon ${index + 1}`} style={{ width: '28', height: '28' }}/>
          <div>{icon.text}</div>
        </div>
      ))}
    </div>
  );
};

export default BoxWithIconsAndText;
