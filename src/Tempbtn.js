import React from "react";
import "./Tempbtn.css";

export default function Tempbtn(props) {
  function setUnitF(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function setUnitC(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  return (
    <div className="col tempbtns mt-2 mt-sm-0 justify-content-center justify-content-sm-start d-flex">
      <button id="cntloc" className="btn btn-light" type="button">
        <i className="fas fa-map-marked-alt"></i>
      </button>
      <button className="btn btn-light disabled" type="button" id="tc" onClick={setUnitC}>
        °C
      </button>
      <button className="btn btn-light" type="button" id="tf" onClick={setUnitF}>
        °F
      </button>
    </div>
  );
}