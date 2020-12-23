import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Maindisplay from "./Maindisplay";
import Footer from "./Footer";

export default function App() {
  return (
  <Container className="App">
      <div className="maincontainer">
      <Maindisplay defaultCity="Vancouver" />
      </div>
      <Footer />
    </Container>
  );
  }
