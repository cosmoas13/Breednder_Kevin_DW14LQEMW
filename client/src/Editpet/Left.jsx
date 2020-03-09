import React, { Component, } from "react";
import dogImg from "../img/doggo1.jpg";
import "../Css/profile.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Image,
  Card,
  Breadcrumb,
  Button,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Profile

class Left extends Component {
  render() {
    return (

      <Col sm={4} className="body-kiri">
        <Navbar bg="info">
          <Image src={dogImg} roundedCircle className="round-image" />


          <Navbar.Brand href="#profile" className="pet-name">
            {" "}
            &nbsp; Jhon Cena
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <Row>
          <Col sm={12}>
            <Breadcrumb>
            </Breadcrumb>
          </Col>
        </Row>

        <nav
          style={{
            "max-height": "calc(100vh - 200px",
            "overflow-y": "auto"
          }}
        >
          <Row>
            <Col sm={12}>
              <Container>
                <h4>Account Settings</h4>
              </Container>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <Container>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Email</th>
                      <td className="table-right">Jhon@rocket.mail</td>
                    </tr>
                    <tr>
                      <th>Phone Breeding</th>
                      <td className="table-right">+69 320000</td>
                    </tr>
                  </tbody>
                </table>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Container>
                <h4>Discovery Settings</h4>
              </Container>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <Container>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Maximum Distance</th>
                      <td className="table-right">10 km</td>
                    </tr>
                  </tbody>
                </table>
              </Container>
            </Col>
          </Row>

          <Row>
            <Col>
              <Container>
                <input
                  type="range"
                  class="custom-range"
                  id="customRange1"
                ></input>
              </Container>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <Container>
                <h3>Age</h3>
              </Container>
            </Col>
          </Row>

          <Form.Row>
            <Col sm={12}>
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Control as="select" value="Choose...">
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Row>
            <Col sm={12}>
              <Container>
                <h4>Species</h4>
              </Container>
            </Col>
          </Row>

          <Form.Row>
            <Col sm={12}>
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Control as="select" value="Choose...">
                  <option>Choose...</option>
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>Racoon</option>
                  <option>Fox</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Row>
            <Col sm={12}>
              <Container>
                <Link to="/">
                  <Button
                    className="btn-block"
                    variant="outline-info"
                    type="submit"
                  >
                    Logout
                      </Button>
                </Link>
              </Container>
            </Col>
          </Row>
        </nav>
        <Row>
          <Col>
            <Card.Footer>&copy;Breednder</Card.Footer>
          </Col>
        </Row>
      </Col>

    );
  }
}

export default Left;
