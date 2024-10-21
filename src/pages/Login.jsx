import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // const error = useSelector(state => state.auth.error);
  // const isLoading = useSelector(state => state.auth.isLoading);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password })).then(result => {
      if (result.type === 'auth/login/fulfilled') {
        Navigate('/contacts');
      }
    });
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>
        <p>Don't have an account?</p>
        <button
          className={styles.registerButton}
          onClick={() => Navigate('/register')}
        >
          Go to Register
        </button>
      </form>
    </div>
  );
};

export default Login;
