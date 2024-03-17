import '/src/styles/Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory


export default function Login() {
const [login, setLogin] = useState(false)
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
const [loginAttempted, setLoginAttempted] = useState(false)

const userName = 'admin'
const correctPassword = 'admin123'

function handleSubmit(e){
    e.preventDefault()
    setLoginAttempted(true)

if (username === userName && password === correctPassword) {
    console.log('logged in successfully')
    setLogin(true)
    navigate('/')
} else {
    console.log('Invalid username or password')
    setLogin(false)
}
}
const isDisabled = !username || !password;
  return (
    <div className='loginContainer'>
        <form className='loginForm' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <section className='label'>
        <label className='userLabel'>
            User
        <input 
            type='text' 
            className='username' 
            placeholder='Username'
            autoComplete='username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        </label>
        <label>
        Password
        <input 
            type='password' 
            className='passwordInput' 
            placeholder='password'
            autoComplete='current-password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        </section>
        <button disabled={isDisabled}>Login</button>
        {loginAttempted && !login && (
            <p style={{color:'red'}}> Login details incorrect</p>
        )}
        </form>
      
       
    </div>
  )
}


