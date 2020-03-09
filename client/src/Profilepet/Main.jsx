import React, { Component } from "react";
import "../Css/profile.css";
import Left from "./Left.jsx";
import Right from "./Right.jsx";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  state = {
    show: false
  };
  handleModal() {
    this.setState({ show: !this.state.show });
  }

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
