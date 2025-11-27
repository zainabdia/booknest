import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../styles/Services.css";

const Services = () => {
 
  const services = [
    {
      title: "Book Delivery",
      description: "Get your favorite books delivered right to your doorstep, quickly and safely.",
      icon: "📦",
    },
    {
      title: "Gift Wrapping",
      description: "We provide elegant gift wrapping options for any occasion.",
      icon: "🎁",
    },
    {
      title: "Personalized Recommendations",
      description: "Receive book recommendations tailored to your taste and interests.",
      icon: "📚",
    },
    {
      title: "Events & Workshops",
      description: "Join our online and in-store book events, workshops, and meetups.",
      icon: "🖊️",
    },
  ];

  return (
    <div>
      <NavBar />

     
      <div className="hero">
        <h1>Our Services</h1>
        <p>Explore the services we offer to make your reading experience amazing.</p>
      </div>

      <div className="grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
