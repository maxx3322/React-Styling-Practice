//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hours = date.getHours();
let greeting;

const customStyle = {
  color: ""
};

if (hours < 12) {
  greeting = "good morning";
  customStyle.color = "red";
} else if (hours < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "goodnight";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
