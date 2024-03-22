import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import the CSS file

export default function Login() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginAttempted, setLoginAttempted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoginAttempted(true);

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (username === 'admin' && password === 'admin123') {
      console.log('logged in as admin');
      setLogin(true);
      navigate('/admin');
    } else if (user) {
      setLogin(true);
      navigate('/user');
    } else {
      console.log('Invalid username or password');
      setLogin(false);
    }
  }

  const isDisabled = !username || !password;

  return (
    <div className='loginContainer'>
      <form className='loginForm' onSubmit={handleSubmit}>
        <h1>Welcome back!</h1>
        <section className='label'>
          <label className='userLabel'>User</label>
          <input
            type='text'
            className='username'
            placeholder='Username'
            autoComplete='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </section>
        <section className='label'>
          <label>Password</label>
          <input
            type='password'
            className='passwordInput'
            placeholder='Password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button disabled={isDisabled}>Login</button>
        {loginAttempted && !login && (
          <p style={{ color: 'red' }}> Login details incorrect</p>
        )}
      </form>
    </div>
  );
}
