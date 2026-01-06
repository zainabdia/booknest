import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Books from './pages/Books';
import Services from './pages/Services';
import AddBook from './pages/AddBook';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
        <Route path="/services" element={<Services />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
  </Routes>
    </Router>
  );
}

export default App;
