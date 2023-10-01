import React, { useState } from 'react';

const Resume = () => {
  // State to keep track of the selected section
  const [selectedSection, setSelectedSection] = useState('education');

  
  // const handleScroll = () => {
  //   const educationSection = document.getElementById('education');
  //   const skillsSection = document.getElementById('skills');
  //   const experienceSection = document.getElementById('experience');
  //   const awardsSection = document.getElementById('awards');
  //   const scrollPosition = window.scrollY;

  //   if (scrollPosition < skillsSection.offsetTop) {
  //     setSelectedSection('education');
  //   } else if (scrollPosition < experienceSection.offsetTop) {
  //     setSelectedSection('skills');
  //   } else if (scrollPosition < awardsSection.offsetTop) {
  //     setSelectedSection('experience');
  //   } else {
  //     setSelectedSection('awards');
  //   }
  // };

  // // Add scroll event listener when the component mounts
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const renderSelectedContent = () => {
    switch (selectedSection) {
      case 'education':
        return (
          <div id="page-1" className="page one" style={{fontSize:"20px"}}>
        <h2 className="heading">Education</h2>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2018-2019</span>
            <h3>All India Secondary School Certificate Examination</h3>
            <span className="position">St. Xavier's School, Nevta</span>
            <p>I have completed my secondary school certificate examinations(Class 10 board exams) with an overall result of 94%. </p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2020-2021</span>
            <h3>All India Senior Secondary Certificate Examination</h3>
            <span className="position">St. Xavier's School, Nevta</span>
            <p>I have completed my senior secondary certificate examinations(Class 12 board exams) with an overall result of 84%.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2021-2025</span>
            <h3>Bachelors of Technology in Computer Science</h3>
            <span className="position">VIT, Bhopal</span>
            <p>My ongoing B.Tech degree in Computer Science with specialization in AI and ML, i have a well maintained CGPA of 8.7.</p>
          </div>
        </div>
        
      </div>
        );
      case 'skills':
        return (
          <div id="page-3" className="page three" >
        <h2 className="heading">Skills</h2>
       
        <div className="row" >
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>C++</h5>
              <div className="progress">
                <div className="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"92%"}}>
                  <span>92%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>Problem Solving in DSA</h5>
              <div className="progress">
                <div className="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>Python</h5>
              <div className="progress">
                <div className="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>HTML, CSS, JS</h5>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>React, Mongo, Express, Node</h5>
              <div className="progress">
                <div className="progress-bar color-3" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>OOPS</h5>
              <div className="progress">
                <div className="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>Machine learning and its libraries</h5>
              <div className="progress">
                <div className="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>UI/UX design</h5>
              <div className="progress">
                <div className="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box my-4">
            <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
              <h5>Operating Systems, Computer Design, Computer Networks</h5>
              <div className="progress">
                <div className="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
      case 'experience':
        return (
          <div id="page-2" className="page two" style={{fontSize:"20px"}}>
        <h2 className="heading">Experience</h2>
        <p>Coming up supersoon.</p>
        {/* <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Software Developer</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Web Designer</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Web Marketing</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Art &amp; Creative Director</h2>
            <span className="position">Side Tech</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Wordpress Developer</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2017-2018</span>
            <h2>UI/UX Designer</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>*/}
      </div> 
        );
      case 'awards':
        return (
          <div id="page-4" className="page four" style={{fontSize:"20px"}}>
        <h2 className="heading">Awards</h2>
        <p>Coming up supersoon.</p>
        {/* <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Top 10 Web Developer</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Top 5 LeaderShip Exellence Winner</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Top 4 Web Tester</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2015</span>
            <h2>Art &amp; Creative Director</h2>
            <span className="position">Cambridge University</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </div>
        </div> */}
      </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-5 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-3" style={{fontSize:"20px"}}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className={`nav-link ${selectedSection === 'education' ? 'active' : ''}`} href="#page-1"  onClick={() => setSelectedSection('education')}>
                  Education
                </button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${selectedSection === 'skills' ? 'active' : ''}`} href="#page-2" onClick={() => setSelectedSection('skills')}>
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${selectedSection === 'experience' ? 'active' : ''}`} onClick={() => setSelectedSection('experience')}>
                  Experience
                </button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${selectedSection === 'awards' ? 'active' : ''}`} onClick={() => setSelectedSection('awards')}>
                  Awards
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            {renderSelectedContent()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

