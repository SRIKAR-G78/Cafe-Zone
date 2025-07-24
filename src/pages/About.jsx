import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Cafe Zone</h1>
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Welcome to Cafe Zone, where passion meets perfection in every cup. 
            Founded in 2020, we've been serving the finest coffee and pastries 
            to our beloved community. Our journey began with a simple dream: 
            to create a space where people can enjoy exceptional coffee in a 
            warm and welcoming environment.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing the highest quality coffee and food 
            while creating a comfortable space for our customers to work, 
            socialize, or simply relax. We source our coffee beans from 
            sustainable farms and work directly with local bakeries to ensure 
            the freshest pastries.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team of passionate baristas and staff members are dedicated to 
            creating the perfect experience for every customer. With years of 
            experience in the coffee industry, we take pride in crafting each 
            beverage with precision and care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 