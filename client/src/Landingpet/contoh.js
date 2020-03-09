import React, { Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
// action
import { getSpecies } from "../_actions/species";
import { register } from "../_actions/auth";

class RegisterModal extends React.Component {
  componentDidMount() {
    this.props.getSpecies();
  }
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      //spesies: [],
      selectedSpecies: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      namepet: "",
      gender: "",
      species: 0,
      age: ""
    };
  }

  handleRegister = () => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
      pet: {
        name: this.state.petName,
        gender: this.state.gender,
        species: this.state.selectedSpecies,
        age: this.state.age
      }
    };
    console.log(data);
    this.props.register(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClose = () => {
    this.setState({ isopen: false });
  };
  render() {
    const { species, auth } = this.props;
    console.log("test Data", species.data);

    return (
      <Fragment>
        <Button
          onClick={() => this.setState({ isopen: true })}
          className="default-btn"
          size="sm"
          variant="dark"
        >
          Register
        </Button>
        <Modal
          size="sm"
          show={this.state.isopen}
          onHide={this.handleClose}
          style={{ maxHeight: "600px" }}
          scrollable
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-sizes-title-sm">Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="Breeder">
                <Form.Control
                  type="text"
                  placeholder="Breeder"
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="Phone">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  onChange={e => this.setState({ phone: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="Address">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  onChange={e => this.setState({ address: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="Pet Name">
                <Form.Control
                  type="text"
                  placeholder="Pet Name"
                  onChange={e => this.setState({ petName: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="Pet Gender">
                <select
                  onChange={e => this.setState({ gender: e.target.value })}
                >
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </Form.Group>
              <Form.Group controlId="Pet Species">
                <select
                  onChange={e =>
                    this.setState({ selectedSpecies: e.target.value })
                  }
                >
                  <option>Species</option>
                  {species.data.map(item => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </Form.Group>
              <Form.Group controlId="Pet Age">
                <select onChange={e => this.setState({ age: e.target.value })}>
                  <option></option>
                  <option>Adult</option>
                  <option>Teen</option>
                </select>
              </Form.Group>
              <Form.Group controlId="RememberMe">
                <Form.Check
                  type="checkbox"
                  label="Agree to the terms of service"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          Rizky Saputra Dumbways, [28.02.20 15:26]
          <Modal.Footer>
            <Button
              onClick={this.handleRegister}
              className=".default-btn"
              variant="secondary"
              type="submit"
              size="sm"
              block
            >
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species,
    auth: state.auth
  };
};

const mapDispatchToProps = dispacth => {
  return {
    getSpecies: () => dispacth(getSpecies()),
    register: data => dispacth(register(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
