import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main.jsx";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid="sm">
        <Main />
      </Container>
    );
  }
}

export default Home;
