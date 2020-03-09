import React, { Component } from "react";
import "../Css/profile.css";
import catImg from "../img/pujangga1.jpg"
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Navbar,
  Image,
  Card,
  Button,
  Table
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Profile

class Right extends Component {
  render() {
    return (
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
                  <Image src={catImg} rounded className="img-col" />
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

    );
  }
}

export default Right;
