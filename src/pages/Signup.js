import React, { useState } from "react";
import "../styles/Signup.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", {
        full_name,
        email,
        password
      });
      alert("account created. now login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "signup failed");
    }
  };

  return (
    <>
      <NavBar />
      <div className="auth">
        <h1>Signup</h1>
        <form onSubmit={submit}>
          <input placeholder="Full name" onChange={(e) => setFullName(e.target.value)} />
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button>Create Account</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
