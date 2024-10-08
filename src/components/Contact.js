// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
             <div className="contact-details">
        <p><strong>Email:</strong> dindigalasindhu@gmail.com</p>
        <p><strong>Phone:</strong> 9121448388</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sindhujadindigala1818/" target="_blank" rel="noopener noreferrer">sindhujadindigala1818</a></p>
        
      </div>
    </div>
  );
};

export default Contact;
