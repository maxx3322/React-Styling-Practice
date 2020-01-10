//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();
const textColor = { color: "" };
let greeting;

if (hour < 12) {
  greeting = "Good Morning";
  textColor.color = "red";
} else if (hour < 18) {
  greeting = "Good Afternoon";
  textColor.color = "blue";
} else {
  greeting = "Goodnight";
  textColor.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={textColor}>
    {" "}
    {greeting}{" "}
  </h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
