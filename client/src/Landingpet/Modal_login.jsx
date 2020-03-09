import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { login } from "../_actions/auth";
import "../Css/index.css";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class Modal_login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isopen: false,
      email: "",
      password: ""
    }
  }

  componentDidMount() {
    console.log("component did mount")
  }

  handleModal() {
    this.setState(
      { show: !this.state.show }
    );
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = (e) => {
    console.log("login")
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    this.props.login(data);
  }

  handleClose = () => {
    this.setState({ isopen: false })
  }

  render() {
    const { authenticated } = this.props.login;
    console.log("check data", this.props.auth);
    const { error, loading } = this.props.auth;
    return authenticated ? (
      <Redirect to={("/Home")} />
    ) : (
        <div>
          <Button
            onClick={() => {
              this.handleModal();
            }}
            className="btnLogin customLogin"
            variant="info"
            size="lg"
          >
            Login
        </Button>

          <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal"
            show={this.state.show}
            onHide={() => this.handleModal()}
          >
            <Modal.Header closeButton>
              <h1 className="txtModalHeader">Login</h1>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  {error && <Alert severit="error">{error}</Alert>}
                  <Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Password" value="login" />
                </Form.Group>

                <Button className="btn-block" variant="outline-info" onClick={!loading ? this.handleLogin : null}>
                  {loading ? "Login..." : "Login"}
                </Button>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <p>&copy;Breednder</p>
            </Modal.Footer>
          </Modal>
        </div >
      );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(login(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal_login);
