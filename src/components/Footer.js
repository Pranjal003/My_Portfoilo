import React from 'react';
import ig from '../assests/images/Untitled_design__7.png';
import twitter from '../assests/images/Untitled_design__12.png';
import github from '../assests/images/Github-512.webp';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About</h5>
            <p>
              This is a portfolio website designed and furnished by Pranjal Sharma.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              {/* Add your links here */}
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="list-unstyled">
              {/* Add your services here */}
              <li>Web Design</li>
              <li>Photography</li>
              <li>Problem Solving</li>
              {/* Add more services as needed */}
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Have a Question?</h5>
            <p>
              Feel free to get in touch with me.
            </p>
            {/* Add your contact links here */}
            <div className="social-icons">
              <a href="https://www.instagram.com/_.pranjal04/" target="_blank" className='mx-2' rel="noopener noreferrer"><img src={ig} alt="Instagram" style={{width:"10%"}} /></a>
              <a href="https://twitter.com/_Pranjal_04" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" style={{width:"10%"}} /></a>
              <a href="https://github.com/Pranjal003" target="_blank" className='mx-2' rel="noopener noreferrer"><img src={github} alt="github" style={{width:"10%"}} /></a>
            
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with <span className="text-danger">&hearts;</span> by Pranjal Sharma</p>
      </div>
    </footer>
  );
}

export default Footer;
