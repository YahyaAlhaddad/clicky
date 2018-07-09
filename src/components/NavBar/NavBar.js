import React from "react";
import "./NavBar.css";
const NavBar = props => (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game/ {props.comment}</a>
        </li>
          
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
  export default NavBar;


 
 
 