import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);

      navigate('/login');

    } catch (error) {
      console.error(error);
      alert("Unable to connect to server");
    }
  };

  return (
    <>
      <style>{`
        .register-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f2f4f7;
        }

        .register-form {
          width: 400px;
          padding: 30px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .register-title {
          text-align: center;
          margin-bottom: 15px;
        }

        .register-label {
          font-size: 15px;
          font-weight: 600;
          margin-top: 8px;
        }

        .register-input {
          padding: 12px;
          font-size: 15px;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
        }

        .register-input:focus {
          border-color: #007bff;
        }

        .register-button {
          margin-top: 15px;
          padding: 12px;
          border: none;
          border-radius: 6px;
          background-color: #007bff;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .register-button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="register-page">

        <form onSubmit={handleSubmit} className="register-form">

          <h1 className="register-title">
            Register
          </h1>

          <label className="register-label">
            Full Name
          </label>

          <input
            className="register-input"
            placeholder="Enter your full name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="register-label">
            Email
          </label>

          <input
            className="register-input"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="register-label">
            Password
          </label>

          <input
            className="register-input"
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="register-label">
            Confirm Password
          </label>

          <input
            className="register-input"
            placeholder="Confirm your password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="register-button"
          >
            Register
          </button>

        </form>

      </div>
    </>
  );
};

export default Register;