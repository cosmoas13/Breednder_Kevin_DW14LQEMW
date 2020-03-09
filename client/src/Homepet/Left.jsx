import React, { Component } from "react";
import dogImg from "../img/doggo1.jpg";
import dataPets from "./dataPets.json";
import "../Css/home.css";
import { Link } from "react-router-dom";
import {
    Row,
    Col,
    Navbar,
    Image,
    Card,
    Breadcrumb
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Left extends Component {
    render() {
        return (

            <Col sm={4} className="body-kiri">
                <Navbar bg="info" expand="lg">
                    <Link to="/Profile">
                        <Image src={dogImg} roundedCircle className="round-image" />
                    </Link>
                    <Navbar.Brand href="#profile" className="pet-name">
                        <div style={{ color: "white" }}>&nbsp; John Cena</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>

                <Row>
                    <Col sm={12}>
                        <Breadcrumb>
                            {/* <Breadcrumb.Item href="#">Match</Breadcrumb.Item>
                            <Breadcrumb.Item href="#Profile">
                                <Link to="/Profile">Profile</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Home</Breadcrumb.Item> */}
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row className="body-form-kanan"
                    style={{
                        "max-height": "calc(100vh - 200px",
                        "overflow": "auto",

                    }}
                >

                    {/* fungsi menggunakan array map  */}
                    {dataPets.map((pic, index) => (
                        <Col xs={6} md={4}>
                            <div className="kiri-image-container">
                                <Image
                                    src={require(`../img/${pic.pics[0]}`)}
                                    key={index}
                                    rounded
                                    className="image"
                                />

                                <p className=" card-img-overlaytextgambar">{pic.name}</p>

                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col sm={12}>
                        <Card.Footer>&copy;Breednder</Card.Footer>
                    </Col>
                </Row>

            </Col>

        );

    }
}

export default Left;