// src/pages/About.jsx
import React from 'react';
import myImage from '../assets/myImage.png';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src={myImage} alt="Me" />
      <p>I'm ASHISH GAUR, a passionate web designer dedicated to crafting beautiful and functional digital experiences. With a background in [mention your relevant background, e.g., graphic design, computer science], I bring a unique blend of creativity and technical expertise to every project. I thrive on transforming ideas into visually stunning and user-friendly websites that leave a lasting impression. From conceptualization to execution, I meticulously craft each design with attention to detail and a focus on delivering results that exceed expectations. My portfolio showcases a diverse range of projects, from sleek corporate websites to vibrant e-commerce platforms, each demonstrating my commitment to excellence and innovation. Whether you're a startup looking to establish your online presence or a established business seeking to refresh your brand, I'm here to collaborate and bring your vision to life. Let's create something extraordinary together!.</p>
      <a href="Resume Ashish Gaur.pdf" target="_blank" rel="noopener noreferrer">Download my Resume</a>
    </div>
  );
};

export default About;
