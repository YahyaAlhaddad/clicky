import React from "react";
import "./Card.css";

const Card = props => { 
  return ( 
    <div className="card" onClick = {() => props.handleClick(props)}> 
      <div className="imageSection"> 
        <img className="img-fluid" alt={props.name} src={props.image} /> 
      </div> 
    </div> 
  ); 
}; 

export default Card;


