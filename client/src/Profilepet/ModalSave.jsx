import React, { Component, Fragment } from "react";
import "../Css/profile.css";
import {
    Button,
    Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Profile

class ModalProfile extends Component {
    render() {
        return (
            <Fragment>
                <Modal showSave={this.state.show} onHide={() => this.handleSave()} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Terima Kasih, Pembayaran sedang diproses ...</Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default ModalProfile;
