import React, { Component } from "react";
import catImg from "../img/pujangga1.jpg";
import dogImg from "../img/doggo1.jpg";
import "../Css/edit.css";
import { Link } from "react-router-dom";
import Modal from "./ModalProfile.jsx";
import {
  Container,
  Row,
  Col,
  Navbar,
  Card,
  Table,
  Button,
  Carousel
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Profile
import { GiSwordman } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
class Main extends Component {

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
                <Modal />
              </Navbar.Collapse>
            </Navbar>

            <Card
              className="card-profile"
              style={{
                "max-height": "calc(200vh - 200px",
                "overflow-y": "auto",
                width: "30rem"
              }}
            >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={dogImg}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={dogImg}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={catImg}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              <Card.Body class="body-profile">
                <Table className="table" striped bordered hover>
                  <tbody>
                    <tr>
                      <th>
                        <h2>John Cena</h2>
                      </th>
                    </tr>
                    <tr>
                      <th>
                        <GiSwordman /> Breeder: Lord Garox
                    </th>
                    </tr>
                    <tr>
                      <th>
                        <MdLocationOn />
                        10 Kilometer dari sini
                    </th>
                    </tr>
                    <tr>
                      <th>
                        <FaTransgender />
                        Male - Adult
                    </th>
                    </tr>
                    <tr>
                      <th>
                        <MdPhoneAndroid />
                        Phone Breeder: +69 320000
                    </th>
                    </tr>
                    <tr>
                      <th>
                        <h2>About Pet</h2>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        John Felix Anthony Cena Jr.s an American professional
                        wrestler, actor, rapper, and television presenter. He
                        is signed to WWE and is the current host of
                      <i>Are You Smarter Than a Fifth Grader?</i>
                      </td>
                    </tr>
                    <tr>
                      <Link to="/Edit">
                        <Button
                          className="btn-block"
                          variant="outline-info"
                          type="submit"
                        >
                          Edit
                      </Button>
                      </Link>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Container>
        </Col>

      </Row>
    );
  }
}

export default Main;
