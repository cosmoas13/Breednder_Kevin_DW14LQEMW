import React, { Component } from "react";
import dogImg from "./doggo1.jpg";
import "../Css/edit.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Image,
  Card,
  Breadcrumb,
  Table,
  Button,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Main Add Pet
class Main extends Component {

  render() {
    return (
      <Row className="rowKiri">
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

        <Row>
          <Col sm={8} className="body-kanan-profil">
            <Container>
              <Navbar
                bg="primary"
                variant="dark"
                className="header bg-transparent"
              >
                <Navbar.Collapse className="justify-content-end">
                </Navbar.Collapse>
              </Navbar>

              <Card
                className="card-profile"
                style={{
                  "max-height": "calc(300vh - 300px",
                  "overflow-y": "auto",
                  "overflow-x": "hidden"
                }}
              >
                <Row>
                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Col sm={4}>
                    <Image rounded className="img-col" />
                  </Col>

                  <Card.Body class="body-profile">

                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <th>Nama Pet</th>
                        </tr>
                        <tr>
                          <th>John Cena</th>
                        </tr>

                        <tr>
                          <th>Breeder</th>
                        </tr>
                        <tr>
                          <th>Lord Garox</th>
                        </tr>

                        <tr>
                          <th>Gender</th>
                        </tr>
                        <tr>
                          <th>Male</th>
                        </tr>

                        <tr>
                          <th>Age</th>
                        </tr>
                        <tr>
                          <th>Adult</th>
                        </tr>

                        <tr>
                          <th>
                            About Pet
                          </th>
                        </tr>
                        <tr>
                          <td>
                            John Felix Anthony Cena Jr.s an American
                            professional wrestler, actor, rapper, and television
                            presenter. He is signed to WWE and is the current
                            host of
                            <i>Are You Smarter Than a Fifth Grader?</i>
                          </td>
                        </tr>
                        <tr>
                          <Link to="/Profile">
                            <Button
                              className="btn-block"
                              variant="outline-info"
                              type="submit"
                            >
                              Save
                          </Button>
                          </Link>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Row>
              </Card>
            </Container>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Main;
