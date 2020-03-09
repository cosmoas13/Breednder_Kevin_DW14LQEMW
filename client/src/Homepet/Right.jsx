import React, { Component } from "react";
import Delete from "../img/delete.png";
import Love from "../img/love.png";
import Light from "../img/lightning.png";
import Process from "../img/process.png";
import Deck from "./Deck.js";
import "../Css/home.css";
import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Right extends Component {
    render() {
        return (
            <Col sm={8} className="body-kanan-kanan">

                <Row
                    style={{
                        "max-height": "calc(100vh - 200px",
                        "overflow-y": "auto"
                    }}
                >

                </Row>

                <Row>
                    <Col sm={8} className="body-kanan">
                        <Deck />
                    </Col>
                </Row>

                <Row>

                    <Col sm={8}>
                        <div className="boxRight-Footer" style={{ background: "red" }}>
                            <Row sm={12} className="row-image-kanan">
                                <Col sm={3} className="col-image-kanan1">
                                    <div className="image-kanan-div" ><Image className="image-kanan" src={Process} /></div>
                                </Col>
                                <Col sm={3} className="col-image-kanan2">
                                    <div className="image-kanan-div-2"><Image className="image-kanan-2" src={Delete} /></div>
                                </Col>
                                <Col sm={3} className="col-image-kanan3">
                                    <div className="image-kanan-div-2"><Image className="image-kanan-2" src={Love} /></div>
                                </Col>
                                <Col sm={3} className="col-image-kanan4">
                                    <div className="image-kanan-div"><Image className="image-kanan" src={Light} /></div>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                </Row>


            </Col>
        );

    }
}

export default Right;