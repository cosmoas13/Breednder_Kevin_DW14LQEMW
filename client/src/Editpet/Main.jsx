import React, { Component } from "react";
import "../Css/edit.css";
import Left from "./Left.jsx";
import Right from "./Right.jsx";
import {
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Profile

class Main extends Component {
  
  render() {
    return (
      <Row className="rowKiri">
        <Left/>
        <Right/>
      </Row>
    );
  }
}

export default Main;
