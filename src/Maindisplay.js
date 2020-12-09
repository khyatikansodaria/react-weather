import React from "react";
import "./Maindisplay.css";

export default function Maindisplay() {
  return (
    <div class="row text-center align-items-center">
      <div class="col-12 col-md-3 maincity">
        <h2 class="cityName">
          <span id="city">Vancouver</span>,<span id="country">CA</span>
        </h2>
        <img id="wtypeicon" src="img/partly-cloudy.svg" alt="sun" />
        <h3 id="tempCF">
          {" "}
          <span id="current-temp">20</span>
          <span>°C</span>
        </h3>
        <h5 id="wtype"> Partly Sunny </h5>
      </div>
      <div class="col-12 col-md-6">
        <img src="img/fall.png" alt="tempimg" class="img-fluid" />
      </div>
      <div class="col-12 col-md-3">
        <h5>
          {" "}
          <i class="fas fa-thermometer-half"></i>
          <br />
          Feels like <span id="feelslike">21</span>
          <span>°C</span>
        </h5>

        <h5>
          <i class="fas fa-tint"></i>
          <br />
          Humidity: <span id="humidity">61</span>%
        </h5>

        <h5>
          <i class="fas fa-wind"></i>
          <br />
          Wind: <span id="wind">8</span> meter/sec
        </h5>
      </div>
    </div>
  );
}