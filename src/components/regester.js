import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../features/authSlice';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  
  // Optional: Select any global state or error related to registration
  const registrationError = useSelector((state) => state.auth.error);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation: check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Replace with actual API call for registration
      const response = await axios.post('/api/register', { email, password });
      
      // If registration is successful, dispatch loginSuccess (or any other action)
      dispatch(loginSuccess(response.data));
      history.push('/home');  // Redirect to Home page after successful registration
    } catch (err) {
      // Handle errors (such as email already taken or invalid data)
      dispatch(loginFailure('Registration failed. Please try again.'));
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {registrationError && <p className="error">{registrationError}</p>}
      {error && <p className="error">{error}</p>}  {/* Display local errors */}
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
