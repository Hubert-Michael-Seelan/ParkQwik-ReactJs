import React from "react";
import "./CSS/Rectangle.css";
import Profile from "./Profile";

const Rectangle = () => {
  return (
    <div className="rec-1">
      <div className="rec">
      <Profile />
      <button> 
        <span className="material-symbols-outlined box">add_box</span>Add
        Vehicle
      </button>
      <div className="cir">
        <div></div>
        <span class="material-symbols-outlined">account_balance_wallet</span>
      </div>
      <div className="cir-1">
        <span class="material-symbols-outlined">notifications</span>
      </div>
    </div>
    </div>
    
  );
};

export default Rectangle;
