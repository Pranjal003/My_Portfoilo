import React from 'react';
import project01 from '../assests/images/project01.png';
import project02 from '../assests/images/project02.png';
import project03 from '../assests/images/project03.png';

const Projects = () => {
  const projectsData = [
    {
      image: project03,
      title: 'E-dashboard',
      description: "This application is about handling an e-dashboard from a seller's POV it can be very useful for inventory management and displaying the available products.",
      githubLink: 'https://github.com/Pranjal003/E-Dashboard', // Replace with the actual GitHub link
    },
    {
      image: project01,
      title: 'Text-Utilities',
      description: 'This is a Text_Utilities webpage where you can serve your input data as in journals, reports, etc for proof reading and our app will help you optimize the imput and make text look more better.',
      githubLink: 'https://github.com/Pranjal003/Text-Utilities', // Replace with the actual GitHub link
    },
    {
      image: project02,
      title: 'NEWS-MONKEY',
      description: 'Your daily dose of all type of news curated the way you want, designed in a way where news can be read without ads and without any hustle. The API is designed to fetch news directly from TOI, and other trusted sources so that you only get top original happenings in and around the globe.',
      githubLink: 'https://github.com/Pranjal003/News-App', // Replace with the actual GitHub link
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-5  w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>My Projects</h2>
            <p style={{fontSize:"20px"}}>
              Here are some of the projects I've worked on.
            </p>
          </div>
        </div>
        <div className="row mt-4">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4" style={{ height: '458px' }}>
              <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign:"center" }}>
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-text">{project.description}</p>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
