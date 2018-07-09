

import React, { Component } from "react"; 
import NavBar from "./components/NavBar"; 
import Card from "./components/Card"; 
import data from "./data.json"; 
import "./App.css"; 
 // shuffle the order of the elements in a given array 
 const shuffle = require("shuffle-array"); 
 
 class App extends Component { 
   state = { 
     data, 
     comment: "Click an image to begin!", 
     score: 0, 
     topScore: 0, 
     clickedImageArr: [] 
   };

handleClick = props => { 
     const clicked = props.id; 
     console.log("clicked:   " + clicked);

     if (this.state.clickedImageArr.indexOf(clicked) === -1) { 
       const clickedImageArr = this.state.clickedImageArr; 
       clickedImageArr.push(clicked); 
       this.setState(() => ({ comment: "You Guessed Correctly!!" })); 
       this.setState(() => ({ clickedImageArr: clickedImageArr }));

      if (this.state.topScore > this.state.score) { 
        this.setState(() => ({ score: this.state.score + 1 }));    
      } else { 
        this.setState(() => ({ score: this.state.score + 1 }));
        this.setState({ topScore: this.state.topScore + 1 }); 
      } 
     } else { 
       this.setState({ score: 0 }); 
       this.setState({ comment: "You Guessed Incorrectly!!" }); 
       alert("you have already clicked this card!");
       this.setState(() => ({ clickedImageArr: [] })); 
    } 
   };
render() { 
     return ( 
     <div> 
         <NavBar 
           comment={this.state.comment} 
           score={this.state.score} 
           topScore={this.state.topScore} 
         /> 
          <div className="App"> 
           <header className="header"> 
             <h1 className="title">Clicky Game!</h1> 
             <h2> 
              Click on an image to earn points, but do not click on any more than 
              once! 
             </h2> 
           </header>

           <div className="imageSection"> 
             {shuffle( 
               this.state.data.map(dataCard => ( 
                 <Card 
                   key={dataCard.id} 
                   id={dataCard.id} 
                   handleClick={this.handleClick} 
                   name={dataCard.name} 
                   image = {dataCard.image}
                   comment={this.state.comment} 
                   score={this.state.score} 
                   topScore={this.state.topScore} 
                 /> 
               )) 
             )} 
           </div> 
         </div> 
       </div> 
     ); 
   } 
 } 
  
 export default App;
