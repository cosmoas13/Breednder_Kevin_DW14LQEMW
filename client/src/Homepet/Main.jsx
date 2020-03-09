import React, { Component } from "react";
import "../Css/home.css";

import {
  Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Left from "./Left.jsx";
import Right from "./Right.jsx";

class Main extends Component {
  render() {
    return (
      <Row className="rowKiri">

        <Left />
        <Right />

      </Row>
    );
  }
}

export default Main;
