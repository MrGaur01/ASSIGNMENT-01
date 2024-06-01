import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-column">
        <img src="https://www.highreshdwallpapers.com/wp-content/uploads/2013/06/Majestic-Lion-Wallpaper.jpg" alt="Your Name" className="profile-image" />
      </div>
      <div className="right-column">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a web designer passionate about creating beautiful and functional websites.</p>
        <p>This is my personal portfolio where I showcase my projects and share my expertise.</p>
        <Link to="/about">Learn more about me</Link>
      </div>
    </div>
  );
};

export default Home;
