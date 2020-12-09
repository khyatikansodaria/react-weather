import React from "react";
import "./App.css";
import Tempbtn from "./Tempbtn";
import Greet from "./Greet";
import Maindisplay from "./Maindisplay";
import Prediction from "./Prediction";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
  <Container className="App">
      <div class="maincontainer">
        <div class="row row-cols-1 row-cols-sm-2 justify-sm-content-center">
          <div classs="col">
            <form class="input-group searchlocation float-sm-right">
              <input
                type="search"
                class="form-control"
                id="search-engine"
                placeholder="Search for the city..."
                aria-label="Search"
                aria-describedby="searchbtn"
                required
              />
              <button class="btn btn-light ml-2" type="submit" id="searchbtn">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <Tempbtn />
        </div>
        <Greet />
        <Maindisplay />

        <Prediction />
      </div>
      <Footer />
    </Container>
  );
}

export default App;
