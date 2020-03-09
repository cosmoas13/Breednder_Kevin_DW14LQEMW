import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "react-bootstrap";
import "../Css/index.css";
import Modal from "./Modal_register.jsx";

class Jumbo extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Fragment>
        <div className="jumbo-border">
          <Jumbotron fluid className="opacity jumbo">
            <Container>
              <h1 className="display-1">Swipe Right!</h1>
              <h1>Make your pet happy</h1>
              <p>
                by clicking enter, you agree <a href="link.js"><u>our terms.</u></a> Learn how we process your data in our <a href="link.js"><u>Privacy Policy</u></a> and <a href="link.js"><u>Cookies Policy</u></a>
              </p>
            </Container>
          </Jumbotron>
        </div>
        <Modal />
      </Fragment>
    );
  }
}

export default Jumbo;
