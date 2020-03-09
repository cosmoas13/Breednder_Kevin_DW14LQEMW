import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/index.css";
import { Button, Modal, Form, Col, Alert } from "react-bootstrap";

import { connect } from "react-redux";

import { getSpecies } from "../_actions/species";
import { register } from "../_actions/auth";

class Modal_register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      selectedSpecies: "",
      breeder: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      namepet: "",
      gender: "",
      species: 0,
      age: "",
      show: false
    }
  }

  componentDidMount() {
    this.props.getSpecies()
  }

  handleClose = () => {
    this.setState({ isopen: false });
  };

  handleRegister = e => {
    // alert("reg")
    e.preventDefault()
    const data = {
      breeder: this.state.breeder,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
      pet: {
        name: this.state.namepet,
        gender: this.state.gender,
        species: this.state.selectedSpecies,
        age: this.state.age
      }
    };
    ;
    this.props.register(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { authenticated } = this.props.register;
    const { species, auth } = this.props;
    const { loading, error } = auth;


    return (
      <div>
        <div className="tombol">
          <Button
            onClick={() => {
              this.handleModal();
            }}
            className="btnRegister custom"
            id="btnJumbo"
            variant="info"
            size="lg"
          >
            Register
          </Button>{" "}
        </div>

        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal"
          show={this.state.show}
          onHide={() => this.handleModal()}
        >
          <Modal.Header closeButton>
            <h1 className="txtModalJumbo">Register</h1>
          </Modal.Header>
          {error && <Alert severity="error">{error}</Alert>}
          <Modal.Body
            style={{
              "max-height": "calc(100vh - 210px",
              "overflow-y": "auto"
            }}
          >
            <Form className="form-container" >
              <Form.Group controlId="formBasicBreeder">
                <Form.Control type="breeder" name="breeder" placeholder="Breeder" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Control type="email" name="email" placeholder="Email" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPhone">
                <Form.Control type="number" name="phone" placeholder="Phone Breeder" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Control type="address" name="address" placeholder="Address Breeder" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Control type="pet" name="namepet" placeholder="Pet Name" onChange={this.handleChange} />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formBasicGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" type="gender" name="gender" placeholder="Gender" onChange={this.handleChange} >
                    <option>-</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSpesies">
                  <Form.Label>Species Pet</Form.Label>
                  <Form.Control as="select"
                    onChange={this.registerChange}
                    name="id">
                    <option>-</option>
                    {species.data.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAges">
                  <Form.Label>Age Pet</Form.Label>
                  <Form.Control as="select" type="age" name="age" placeholder="age" onChange={this.handleChange} >
                    <option>-</option>
                    <option value="male">Child</option>
                    <option value="female">Teen</option>
                    <option value="female">Adult</option>
                  </Form.Control>
                </Form.Group>

              </Form.Row>
              <Button className="btn-block" variant="outline-info" type="submit" onClick={!loading ? this.handleRegister : null}>
                {loading ? "Register..." : "Register"}
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <p>&copy;Breednder</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies()),
    register: data => dispatch(register(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal_register);

