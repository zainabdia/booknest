import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password
      });
      localStorage.setItem("user", JSON.stringify(res.data));
      alert("logged in");
      navigate("/contact");
    } catch (err) {
      alert(err.response?.data?.error || "login failed");
    }
  };

  return (
    <>
      <NavBar />
      <div className="auth">
        <h1>Login</h1>
        <form onSubmit={submit}>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button>Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
