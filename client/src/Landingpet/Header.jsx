import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/index.css";
import { Navbar } from "react-bootstrap";
import Modal from "./Modal_login";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" className="header bg-transparent">
        <Navbar.Brand href="#home">Breednder</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Modal />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
