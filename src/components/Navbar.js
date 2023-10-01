// import React from "react";
// import Logo from '../assests/images/Logo.png'
// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
//     <div className="container">
//       <a className="navbar-brand" href="#home"> <img src={Logo} alt="Pranjal" style={{width:"10%"}}/> </a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a className="nav-link" href="#home">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#about">About</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#resume">Resume</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#services">Services</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#projects">Projects</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
//   );
// }



// import React, { useEffect, useState } from "react";
// import Logo from '../assests/images/Logo.png';
// import './navbar.css';

// const Navbar = () => {
//   const [isHome, setIsHome] = useState(true);

//   useEffect(() => {
//     const handleHashChange = () => {
//       setIsHome(window.location.hash === '#home');
//     };

//     // Listen for hash changes (page changes)
//     window.addEventListener('hashchange', handleHashChange);

//     // Clean up the event listener when component is unmounted
//     return () => {
//       window.removeEventListener('hashchange', handleHashChange);
//     };
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isHome ? 'navbar-home' : 'navbar-other'}`}>
//       <div className="container">
//         <a className="navbar-brand" href="#home"> <img src={Logo} alt="Pranjal" style={{ width: "10%" }} /> </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto"> 
//           <li className="nav-item">
//             <a className="nav-link" href="#home">Home</a>
//          </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#resume">Resume</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#services">Services</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#projects">Projects</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
//  export default Navbar;



import React, { useEffect, useState } from "react";
import Logo from '../assests/images/Logo.png';
import './navbar.css';

const Navbar = () => {
  const [isHome, setIsHome] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10); // Adjust the threshold as needed
    };

    const handleHashChange = () => {
      setIsHome(window.location.hash === '#home');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isHome ? 'navbar-home' : 'navbar-other'} ${isScrolled && isHome ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home"> <img src={Logo} alt="Pranjal" style={{ width: "10%" }} /> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
             <a className="nav-link" href="#home">Home</a>
          </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
