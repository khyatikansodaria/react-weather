import React from "react";
import "./Greet.css";

export default function Greet(props) {
  console.log(props.date);
  let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[props.date.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[props.date.getMonth()];
let year = props.date.getFullYear();
let currentDate = props.date.getDate();
let hours = props.date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
  }
let minutes = props.date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
  }
let timePeriod = "AM";
  if (hours > 12) {
    hours = hours - 12;
    timePeriod = "PM";
  }
  return (
    <div className="Greet">
      <h4 className="greet text-center">Good Morning</h4>
      <h4 className="text-center" id="date-time">
        {day}, {month} {currentDate}, {year}
         <br />
         {hours}:{minutes} {timePeriod} Pacific Time (PT)
       </h4>
     </div>
  );
}