import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    axios
      .post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
          console.log(res);
          navigate('/profile'); // Redirect to the profile page
        } else {
          setError(res.data.error);
        }
      })
      .catch((error) => {
        setError('An error occurred while processing your request.');
        console.log(error);
      });
  };

  return (
    <div className='form'>
      <h2>Login</h2>
      <input
        className='items'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        className='items'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;

