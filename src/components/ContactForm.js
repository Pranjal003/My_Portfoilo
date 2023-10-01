import React, { useState } from 'react';
import myimage from '../assests/images/myImage.jpg'


const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Function to handle form submission and send email with user input
  const sendEmail = (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const recipient = 'sharmapranjal0403@gmail.com'; // Set the recipient's email address

    // Create the email subject and body using the state variables
    const emailSubject = `${subject}`;
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Create the mailto link with the recipient, subject, and body
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(
      emailBody
    )}`;

    // Use window.location.href to open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact-form" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={myimage} alt="Your Name" style={{width: "102%"}} />
          </div>
          <div className="col-md-8">
            <h2>Contact Me</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control" id="subject"  value={subject} onChange={handleSubjectChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" value={message} onChange={handleMessageChange}></textarea>
              </div>
              <button type="submit" onClick={sendEmail} className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
