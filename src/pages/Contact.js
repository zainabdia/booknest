import React, { useState } from 'react';
import '../styles/Contact.css';
import logo from '../assets/logo_icon.jpg';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.');
      return;
    }
    
    alert(`Form submitted:\n${JSON.stringify(form, null, 2)}`);
   
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <NavBar />
<div className="contact">
        <div className="leftSide" aria-hidden="true">
          <img src={logo} alt="logo" style={{ width: '100%', height: '100%', objectFitover: 'c' }} />
        </div>

        <div className="rightSide">
          <h1>Contact Us</h1>

          <form id="contact-form" noValidate onSubmit={handleSubmit}>
            <label htmlFor="fname">Full Name</label>
            <input
              id="fname"
              name="fname"
              type="text"
              placeholder="Enter full name..."
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email..."
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
