import React, { useState } from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'maviaabbas2007@gmail.com', href: 'mailto:maviaabbas2007@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '0331-4420575', href: 'tel:03314420575' },
  { icon: <FiMapPin />, label: 'Location', value: 'Lahore, Pakistan', href: null },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/Maviaabbas', href: 'https://github.com/Maviaabbas' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/maviaabbas', href: 'https://www.linkedin.com/in/maviaabbas' },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact <span className="text-primary">Me</span></h2>
        <div className="row g-5">
          <div className="col-lg-5">
            <h4 className="mb-4">Get In Touch</h4>
            <p className="text-secondary mb-4">I'm currently open to opportunities. Reach out to me via email or social links below.</p>
            {contactInfo.map((item, i) => (
              <div key={i} className="d-flex align-items-center mb-3">
                <div className="p-3 bg-primary bg-opacity-10 text-primary rounded me-3">{item.icon}</div>
                <div>
                  <small className="d-block text-secondary">{item.label}</small>
                  <a href={item.href} className="text-light text-decoration-none">{item.value}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-7">
            {submitted ? (
              <div className="text-center p-5 bg-secondary bg-opacity-10 rounded">
                <FiCheckCircle size={50} className="text-success mb-3" />
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, Mavia Abbas will get back to you soon.</p>
              </div>
            ) : (
              <form className="card p-4 bg-secondary bg-opacity-10 border-0" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="row mb-3">
                  <div className="col"><input type="text" className="form-control bg-dark border-0 text-light" placeholder="Your Name" required /></div>
                  <div className="col"><input type="email" className="form-control bg-dark border-0 text-light" placeholder="Your Email" required /></div>
                </div>
                <input type="text" className="form-control bg-dark border-0 text-light mb-3" placeholder="Subject" required />
                <textarea className="form-control bg-dark border-0 text-light mb-3" rows="5" placeholder="Your Message" required />
                <button type="submit" className="btn btn-primary w-100"><FiSend /> Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;