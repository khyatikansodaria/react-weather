import React from "react";
import "./Prediction.css";

export default function Prediction() {
  return (
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 text-center forecast mt-5">
      <div className="col">
        <div className="card">
          <h4 id="pred1day">Sunday</h4>
          <img id="pred1img" src="img/sun.svg" alt="sun" />
          <h4>
            <span id="pred1temp">24</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred2day">Monday</h4>
          <img id="pred2img" src="img/partly-cloudy.svg" alt="sun" />
          <h4>
            <span id="pred2temp">20</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred3day">Tuesday</h4>
          <img id="pred3img" src="img/wind.svg" alt="wind" />
          <h4>
            <span id="pred3temp">18</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred4day">Wednesday</h4>
          <img id="pred4img" src="img/thunderstorm.svg" alt="sun" />
          <h4>
            <span id="pred4temp">19</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred5day">Thursday</h4>
          <img id="pred5img" src="img/partly-cloudy.svg" alt="sun" />
          <h4>
            <span id="pred5temp">20</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
    </div>
  );
}