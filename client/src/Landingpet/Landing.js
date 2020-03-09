import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header.jsx";
import Jumbo from "./Jumbo.jsx";
import Footer from "./Footer.jsx";

class Landing extends Component {
  render() {
    return (
      <div className="Container-app">
        <Header />
        <Jumbo />
        <Footer />
      </div>
    );
  }
}

export default Landing;
