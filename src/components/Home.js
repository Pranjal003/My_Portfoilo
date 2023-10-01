import React from 'react';
import TxtRotate from './Txtrotate';

const Home = () => {

  const messages = [' Developer', ' Web Designer', ' Photographer', ' ML Enthusiast'];
  const interval = 2000; // 2 seconds interval

  return (
    <section id="home" className="py-5 vh-100 w-100 text-center" style={{background: "linear-gradient(to right, #c8d2fa 50%, white 50%)"}}>
      <div className="container" style={{position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"}}>
        <h4 style={{color:"#3E64FF",fontSize:"50px" }}>Hey! I AM</h4>
        <h1 className="display-4 mb-4 " style={{fontFamily: "Impact", fontSize:"150px"}}>Pranjal Sharma</h1>
        <h2>
        I'm a
        <div className="lead container">
        <TxtRotate messages={messages} interval={interval}  />  
        </div>
          Welcome to my portfolio website!
        </h2>
      </div>
    </section>
  );
}

export default Home;
