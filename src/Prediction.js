import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Prediction.css";

export default function Prediction(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  //console.log(props.currentCity);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if(loaded && props.currentCity === forecast.city.name) {
    //return Math.round(forecast.list[0].main.temp);
    console.log(forecast.list);
    return (
    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 text-center forecast mt-5">
      <div className="col">
        <div className="card">
          <h4 id="pred1day">{days[new Date(forecast.list[7].dt * 1000).getDay()]}</h4>
          <WeatherIcon code={forecast.list[7].weather[0].icon} />
          <h4>
            <span id="pred1temp">{Math.round(forecast.list[7].main.temp)}</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred2day">{days[new Date(forecast.list[15].dt * 1000).getDay()]}</h4>
          <WeatherIcon code={forecast.list[15].weather[0].icon} />
          <h4>
            <span id="pred2temp">{Math.round(forecast.list[15].main.temp)}</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred3day">{days[new Date(forecast.list[23].dt * 1000).getDay()]}</h4>
          <WeatherIcon code={forecast.list[23].weather[0].icon} />
          <h4>
            <span id="pred3temp">{Math.round(forecast.list[23].main.temp)}</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred4day">{days[new Date(forecast.list[31].dt * 1000).getDay()]}</h4>
          <WeatherIcon code={forecast.list[31].weather[0].icon} />
          <h4>
            <span id="pred4temp">{Math.round(forecast.list[31].main.temp)}</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <h4 id="pred5day">{days[new Date(forecast.list[39].dt * 1000).getDay()]}</h4>
          <WeatherIcon code={forecast.list[39].weather[0].icon} />
          <h4>
            <span id="pred5temp">{Math.round(forecast.list[39].main.temp)}</span>
            <span>°C</span>
          </h4>
        </div>
      </div>
    </div>
  );
  }else {
    let apiKey1 = "82dadf9031c6bca3436ed3908ea2b7b5";
    let apiEndpoint1 = "https://api.openweathermap.org/data/2.5/forecast";
    let apiUrl1 = `${apiEndpoint1}?q=${props.currentCity}&appid=${apiKey1}&units=metric`;
    axios.get(apiUrl1).then(handleForecast);

    return null;
  }
}