import React from 'react';
import addressIcon from '../assests/images/Untitled design.png'; 
import contactIcon from '../assests/images/Untitled design (1).png'; 
import emailIcon from '../assests/images/Untitled design (2).png'; 
import websiteIcon from '../assests/images/Untitled design (3).png'; 
import bgimg from '../assests/images/bgimg.jpg'

const Contact = () => {

    const sendEmail = () => {
      const subject = 'Freelancing Hiring'; // Set your email subject
      const body = 'Hello, I want to get in touch.'; // Set your email body
      const recipient = 'sharmapranjal0403@gmail.com'; // Set the recipient's email address
  
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
      // Use window.location.href to open the user's default email client
      window.location.href = mailtoLink;
    };
  


  return (
    <>
      <section className="ftco-section ftco-hireme img" style={{backgroundImage: `url(${bgimg})`, height:"550px",  display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 ftco-animate text-center fadeInUp ftco-animated">
              <h2>I'm <span style={{color:"#4AD121", fontStyle:"oblique"}}>Available</span> for freelancing</h2>
              <h4 >Connect with me via mail and let's build some awesomeness together.</h4>
              <p className="mb-0 my-4"><button className="btn btn-primary py-2 px-4" onClick={sendEmail} style={{ fontSize: "1.5rem" }}>Send Email</button></p>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="py-5 w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Contact Me</h2>
              <p style={{fontSize:"20px"}}>
                Feel free to get in touch with me using the information below.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card mb-4" style={{ height: '200px' }}>
                <img src={addressIcon} alt="Address" className="card-img-top my-2" style={{width: "25%", display: "block", margin: "0 auto"}} />
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign:"center" }}>
                  <h4 className="card-title">Address</h4>
                  <p className="card-text">
                    61,Lions lane west, Panchawala, Sirsi Road, Jaipur, Rajasthan, 302034
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4" style={{ height: '200px' }}>
                <img src={contactIcon} alt="Contact Number" className="card-img-top my-2" style={{width: "25%", display: "block", margin: "0 auto"}}/>
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign:"center" }}>
                  <h4 className="card-title">Contact Number</h4>
                  <p className="card-text">+91 9829979994</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4" style={{ height: '200px' }}> 
                <img src={emailIcon} alt="Email" className="card-img-top my-2" style={{width: "25%", display: "block", margin: "0 auto"}} />
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign:"center" }}>
                  <h4 className="card-title">Email</h4>
                  <p className="card-text">sharmapranjal0403@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-4" style={{ height: '200px' }}>
                <img src={websiteIcon} alt="Website" className="card-img-top my-2" style={{width: "25%", display: "block", margin: "0 auto"}} />
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign:"center" }}>
                  <h4 className="card-title">Website</h4>
                  <p className="card-text">www.yourwebsite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
