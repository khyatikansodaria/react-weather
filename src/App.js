import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Maindisplay from "./Maindisplay";
import Prediction from "./Prediction";
import Footer from "./Footer";

export default function App() {
  return (
  <Container className="App">
      <div className="maincontainer">
      <Maindisplay defaultCity="Vancouver" />
        <Prediction />
      </div>
      <Footer />
    </Container>
  );
  }