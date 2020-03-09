import React, { Component, Fragment } from "react";
// import upload from "../img/upload.png";
import "../Css/profile.css";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Modal,
  ListGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Profile

class ModalProfile extends Component {
  state = {
    show: false,
    afterShow: false,
    premium: false
  };

  handleModal() {
    this.setState(
      { show: !this.state.show }
    );
  }

  render() {
    return (

      <Fragment>
        {!this.state.premium ?
          (<Button
            size="lg"
            variant="info"
            type="submit"
            onClick={() => {
              this.handleModal();
            }}
          >
            Add Pet
        </Button>)
          : (<Link to="/Add">
            <Button variant="info" onClick={() => this.setState({ premium: false })}

            >
              PREMIUM
            </Button>
          </Link>)}

        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal"
          show={this.state.show}
          onHide={() => this.handleModal()}
        >
          <Modal.Header closeButton>
            <h1 className="txtModalHeader">PREMIUM</h1>
          </Modal.Header>
          <Modal.Header>
            <h3 className="txtModalHeaders">
              Upgrade Breednder mu dan nikmati fitur-fitur <b>PRO.</b>
            </h3>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="No.Rek Kamu" />
              </Form.Group>

              <ListGroup.Item as="li">Breednder : 69098989</ListGroup.Item>
              <br></br>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupFileAddon01">
                    Upload
                  </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
              <hr></hr>

              <Button className="btn-block" variant="outline-info"
                onClick={() => {
                  this.setState({ afterShow: true, show: false, premium: true });

                }}>
                Save
              </Button>

            </Form>


          </Modal.Body>
          <Modal.Footer>
            <p>&copy;Breednder</p>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.afterShow}
          onHide={() => this.setState({ afterShow: false })} >
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