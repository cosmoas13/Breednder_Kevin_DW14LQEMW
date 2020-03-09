import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../Editpet/Main.jsx";
import { Container } from "react-bootstrap";

class Edit extends Component {
  render() {
    return (
      <Container fluid="sm">
        <Main />
      </Container>
    );
  }
}

export default Edit;
