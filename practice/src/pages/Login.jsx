import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      // Login failed
      if (!response.ok) {
        alert(data.message);
        return;
      }

      // Login successful
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // Go to Home page
      navigate("/");

    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to server");
    }
  };

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit}
    >
      <h1 className="login-title">
        Login
      </h1>

      <label className="login-label">
        Email
      </label>

      <input    
        className="login-input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label className="login-label">
        Password
      </label>

      <input
        className="login-input"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className="login-button"
      >
        Login
      </button>
    </form>
  );
};

export default Login;