import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "../Profilepet/Main.jsx";
import { Container } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <Container fluid="sm">
        <Main />
      </Container>
    );
  }
}

export default Profile;
