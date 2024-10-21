import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const isLoading = useSelector(state => state.auth.isLoading);
  const error = useSelector(state => state.auth.error);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await dispatch(register({ name, email, password }));
      if (register.fulfilled.match(result)) {
        Navigate('/contacts');
      } else {
        throw new Error(result.error.message || 'Registration failed.');
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {error && <p>Error: {error}</p>}
      <p>Already have an account?</p>
      <button className={styles.logInButton} onClick={() => Navigate('/login')}>
        Go to Login
      </button>
    </form>
  );
};

export default Register;
