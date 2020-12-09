import React from "react";
import "./Tempbtn.css";

export default function Tempbtn() {
  return (
    <div class="col tempbtns mt-2 mt-sm-0 justify-content-center justify-content-sm-start d-flex">
      <button id="cntloc" class="btn btn-light" type="button">
        <i class="fas fa-map-marked-alt"></i>
      </button>
      <button class="btn btn-light disabled" type="button" id="tc" disabled>
        °C
      </button>
      <button class="btn btn-light" type="button" id="tf">
        °F
      </button>
    </div>
  );
}