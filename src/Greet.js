import React from "react";
import "./Greet.css";

export default function Greet(props) {
 console.log(props.date);
let now = new Date();
let localOffsetInMs = now.getTimezoneOffset() * 60 * 1000;
let targetOffsetInMs = props.date * 1000;
let targetTimestamp = now.getTime() + localOffsetInMs + targetOffsetInMs;
let localdate = new Date(targetTimestamp);
console.log(localdate);

let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[localdate.getDay()];
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
let month = months[localdate.getMonth()];
let year = localdate.getFullYear();
let currentDate = localdate.getDate();
let hours = localdate.getHours();
if (hours < 10) {
    hours = `0${hours}`;
  }
let minutes = localdate.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
  }
let timePeriod = "AM";
  if (hours > 12) {
    hours = hours - 12;
    timePeriod = "PM";
  }


  let message = localdate.getHours();
  console.log(message);
  if(message >= 5 && message < 12) {
    message = `Hello! Good Morning ${props.city}!`;
  } else if (message >= 12 && message < 18) {
    message =  `Hello! Good Afternoon ${props.city}!`;
  } else if (message >= 18 && message < 22) {
    message = `Hello! Good Evening ${props.city}!`;
  } else {
    message = `Hello! Good Night ${props.city}!`;
  }

  return (
    <div className="Greet">
      <h4 className="greet text-center"> {message} </h4>
      <h4 className="text-center" id="date-time">
        {day}, {month} {currentDate}, {year}
         <br />
         {hours}:{minutes} {timePeriod} GMT
       </h4>
     </div>
  );
}