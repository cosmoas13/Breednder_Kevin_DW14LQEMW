import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Button, Modal, Form } from "react-bootstrap";
import Modal_login from "../src/Component/Modal_login";
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" className="header bg-transparent">
        <Navbar.Brand href="#home">Breednder</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Modal_login/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
