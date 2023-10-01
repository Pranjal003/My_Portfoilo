import React from 'react';
import webdesign from '../assests/images/Untitleddesign(4).png'
import phtog from '../assests/images/Untitled design (5).png'
import probsolving from '../assests/images/Untitled_design (7).png'
import webd from '../assests/images/Untitled design (6).png'
import prodstrategy from '../assests/images/Untitled design (9).png'
import marketing from '../assests/images/Untitled design (11).png'

const Services = () => {
  const servicesData = [
    {
      title: 'Web Design',
      description: 'Eye-catching and user-friendly website design',
      imageSrc: webdesign
    },
    {
      title: 'Photography',
      description: 'Capture beautiful moments that last a lifetime',
      imageSrc: phtog
    },
    {
      title: 'Web Developer',
      description: 'Building interactive and dynamic web applications',
      imageSrc: webd
    },
    {
      title: 'Problem Solving',
      description: 'Identifying, analyzing, and finding effective solutions',
      imageSrc: probsolving
    },
    {
      title: 'Product Strategy',
      description: 'Strategizing product development for success in the market',
      imageSrc: prodstrategy
    },
    {
      title: 'Marketing',
      description: 'Promoting products and services to reach a wider audience',
      imageSrc: marketing
    },
  ];

  return (
    <section id="services" className="py-5 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Services</h1>
            <p style={{fontSize:"20px"}}>
            My general services encompass business consulting, offering strategic guidance to optimize operations and drive growth in your organization.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          {servicesData.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4" style={{ height: '230px' }}>
                <img src={service.imageSrc} alt={service.title} className="card-img-top my-2" style={{width: "25%", display: "block", margin: "0 auto"}} />
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <h4 className="card-title" style={{textAlign:"center"}}>{service.title}</h4>
                  <p className="card-text" style={{textAlign:"center"}}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
