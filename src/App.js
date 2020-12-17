import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Tempbtn from "./Tempbtn";
import Greet from "./Greet";
import Maindisplay from "./Maindisplay";
import Prediction from "./Prediction";
import Footer from "./Footer";

export default function App() {
  return (
  <Container className="App">
      <div className="maincontainer">
        <div className="row row-cols-1 row-cols-sm-2 justify-sm-content-center">
          <div classsName="col">
            <form className="input-group searchlocation float-sm-right">
              <input
                type="search"
                className="form-control"
                id="search-engine"
                placeholder="Search for the city..."
                aria-label="Search"
                aria-describedby="searchbtn"
                required
              />
              <button className="btn btn-light ml-2" type="submit" id="searchbtn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          <Tempbtn />
        </div>
        <Greet />
        <Maindisplay defaultCity="Vancouver" />
        <Prediction />
      </div>
      <Footer />
    </Container>
  );
  } 
  

