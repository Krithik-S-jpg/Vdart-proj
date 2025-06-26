import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="login-hero-text">
          <h1>Welcome Back!</h1>
          <p>Enter your credentials to access your account.</p>
        </div>
      </div>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=" "
              id="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
              id="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit">Login</button>
          <p style={{ marginTop: '1.5rem', color: '#94a3b8', alignSelf: 'center' }}>
            Don't have an account?{' '}
            <Link to="/SignUp" style={{ color: '#3b82f6', fontWeight: '700', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
