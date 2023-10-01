import React from 'react';
import myimage from '../assests/images/myImage.jpg'

// const divStyle = {
//   backgroundImage: `url(${myimage})`,
// };

const AboutMe = () => {
  return (
    <>
      <section className="py-5  w-100" id="about-section">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div className="img d-flex align-self-stretch align-items-center" ><img src={myimage} style={{width: "102%"}} alt="myIMage.jpeg" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                  <h1 className="big" style={{fontWeight:"bold", fontSize:"50px" ,marginLeft:"2rem"}}>About Me</h1>
                  <p style={{fontSize:"20px" ,marginLeft:"2rem"}}>A young keen eager to learn and grow. </p>
                  <ul className="about-info mt-4 px-md-0 px-2" style={{fontSize:"20px" ,marginLeft:"2rem"}}>
                    <li className="d-flex my-2"><span style={{fontWeight:"bold" }}>Name:  </span> <span> Pranjal Sharma</span></li>
                    <li className="d-flex my-2"><span style={{fontWeight:"bold" }}>Date of birth: </span> <span> December 17, 2003</span></li>
                    <li className="d-flex my-2"><span style={{fontWeight:"bold" }}>Address: </span> <span> Jaipur, Rajasthan</span></li>
                    <li className="d-flex my-2"><span style={{fontWeight:"bold" }}>Pincode: </span> <span> 302034</span></li>
                    <li className="d-flex my-2"><span style={{fontWeight:"bold" }}>Email:</span> <span> sharmapranjal0403@gmail.com</span></li>
                    <li className="d-flex my-2"><span style={{fontWeight:"bold" }}>Phone: </span> <span>  +91-9829979994</span></li>
                  </ul>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                <div className="text">
                  <p className="mb-4" style={{fontSize:"20px" ,marginLeft:"2rem"}}>
                    <span className="number" data-number="120">10 </span>
                    <span>Projects completed</span>
                  </p >
                  <p><a href="https://drive.google.com/file/d/1E0R5x1WTpD8JArhRbMW1yjweUP-_4hDb/view?usp=sharing" className="btn btn-primary py-3 px-3" style={{fontSize:"25px" ,marginLeft:"2rem"}}>Download CV</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="ftco-section ftco-partner">
        <div className="container">
          <div className="row">
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner"><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-5.png.webp" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner"><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-1.png.webp" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner"><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-4.png.webp" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner"><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-3.png.webp" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
            <div className="col-sm ftco-animate fadeInUp ftco-animated">
              <a href="/" className="partner"><img src="data:image/jpeg;base64,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" className="img-fluid" alt="Colorlib Template" /></a>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default AboutMe;

