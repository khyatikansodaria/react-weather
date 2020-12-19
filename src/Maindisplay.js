import React, { useState } from "react";
import "./Maindisplay.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import Greet from "./Greet";
import Tempbtn from "./Tempbtn";

export default function Maindisplay(props) {
  const [weather, setWeather] = useState({ready: false});
  const [city,setCity] = useState(props.defaultCity);

  function showTemp(response) {
    console.log(response);
    setWeather({
      ready:true,
      city:response.data.name,
      country:response.data.sys.country,
      iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      temp:response.data.main.temp,
      description:response.data.weather[0].description,
      feelsLike:response.data.main.feels_like,
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "82dadf9031c6bca3436ed3908ea2b7b5";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric&precipitation=yes`;
    axios.get(apiUrl).then(showTemp).catch(err => { alert(`The ${city} is not found Please check the city name and enter correct city name.`);});
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event){
    setCity(event.target.value);
  }

  if(weather.ready){
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 justify-sm-content-center">
          <div classsName="col">
            <form className="input-group searchlocation float-sm-right" onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control"
                id="search-engine"
                placeholder="Search for the city..."
                aria-label="Search"
                aria-describedby="searchbtn"
                onChange={handleCity}
                required
              />
              <button className="btn btn-light ml-2" type="submit" id="searchbtn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        <Tempbtn />
      </div>
      <Greet date={weather.date} />
      <div className="row text-center align-items-center">
      <div className="col-12 col-md-3 maincity">
        <h2 className="cityName">
          <span id="city">{weather.city}</span>,<span id="country">{weather.country}</span>
        </h2>
        <img id="wtypeicon" src={weather.iconUrl} alt="sun" />
        <h3 id="tempCF">
          {" "}
          <span id="current-temp">{Math.round(weather.temp)}</span>
          <span>°C</span>
        </h3>
        <h5 id="wtype"> {weather.description} </h5>
      </div>
      <div className="col-12 col-md-6">
        <img src="img/fall.png" alt="tempimg" class="img-fluid" />
      </div>
      <div className="col-12 col-md-3">
        <h5>
          {" "}
          <i className="fas fa-thermometer-half"></i>
          <br />
          Feels like <span id="feelslike">{Math.round(weather.feelsLike)}</span>
          <span>°C</span>
        </h5>

        <h5>
          <i className="fas fa-tint"></i>
          <br />
          Humidity: <span id="humidity">{weather.humidity}</span>%
        </h5>

        <h5>
          <i className="fas fa-wind"></i>
          <br />
          Wind: <span id="wind">{Math.round(weather.wind)}</span> km/h
        </h5>
      </div>
    </div>
    </div>
    );
  }else{
    search();
    return (
      <Loader className="d-flex justify-content-center"
      type="ThreeDots" 
      color="black"
      height={80} 
      width={80} />
    );
  }
}