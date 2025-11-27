import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <NavBar />

      
      <div className="hero">
        <h1>About BookNest</h1>
        <p>Discover our story, mission, and what drives us to bring the best books to your fingertips.</p>
      </div>

      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          At BookNest, our mission is to connect readers with amazing stories, knowledge, and ideas,
          making reading accessible and enjoyable for everyone.
        </p>
      </div>

      <div className="story">
        <h2>Our Story</h2>
        <p>
          BookNest was founded by passionate book lovers who wanted to create a space where everyone 
          could explore and find books that inspire and educate.
        </p>
      </div>


      <div className="socials">
        <h2>Join Our Community</h2>
        <p>Follow our pages to stay updated on new releases, events, and special offers.</p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
