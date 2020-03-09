import React from 'react';
import "../Css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className='footer mt-auto py-2 bg-transparent text-white' variant="info">
        <div className='container-footer'>
          <h2>FIND YOUR PET'S MATCH</h2>
        </div>
      </footer>
    );
  }
}

export default Footer;
