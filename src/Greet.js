import React from "react";
import "./Greet.css";

export default function Greet(props) {
  console.log(props.date);
  return (
    <div className="Greet">
      <h4 class="greet text-center">Good Morning</h4>
      <h4 class="text-center" id="date-time">
        Saturday, September 5, 2020
        <br />
        12:47 p.m. Pacific Time (PT)
      </h4>
    </div>
  );
}