// src/components/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        Hello! I'm a passionate <em>Full-Stack Java Developer</em> with over a year of experience in crafting dynamic and responsive web applications. My journey in software development has equipped me with a solid foundation in a range of technologies, including:
      </p>
      <ul>
        <li><strong>Java:</strong> Building robust back-end services and APIs.</li>
        <li><strong>React:</strong> Creating engaging user interfaces for a seamless user experience.</li>
        <li><strong>JavaScript:</strong> Enhancing the interactivity and functionality of web applications.</li>
        <li><strong>SQL:</strong> Managing and querying databases effectively.</li>
      </ul>
      <p>
        I thrive on solving complex problems and continuously seek to expand my skill set. Whether collaborating with a team or working independently, I am committed to delivering high-quality code and innovative solutions. I am eager to take on new challenges and contribute to projects that make a meaningful impact.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or diving into the latest industry trends.
      </p>
      <p>
        Feel free to reach out to discuss how we can work together!
      </p>
    </div>
  );
};

export default About;
