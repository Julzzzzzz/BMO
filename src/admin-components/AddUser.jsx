import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import '/src/styles/AddUser.css'
// import NewUserForm from './NewUserForm'; 

export default function AddUser() {
  const handleSubmit = (e) => {
  e.preventDefault();
  const getFormData = (name) => e.target.elements[name].value

  
  const newUser = {
    firstName:getFormData('firstName'),
    lastName:getFormData('lastName'),
    email:getFormData('email'),
    password:getFormData('password'),
    initialDeposit:getFormData('initialDeposit')
  }
  const existingUser = JSON.parse(localStorage.getItem('users')) || []

  const updatedUser = [...existingUser, newUser]
    console.log(updatedUser)
    localStorage.setItem('users' , JSON.stringify(updatedUser))
    e.target.reset()


  
 
  };

  return (
    <>
      <div className='addUser'>
        <form onSubmit={handleSubmit}>
          <label>
          First Name:
          <input type='text' name='firstName' placeholder='First Name'></input>
          </label>

          <label> Last Name:
          <input type='text' name='lastName' placeholder='Last Name'></input>
          </label>

          <label>
          Email:
          <input type='email' name='email' placeholder='Email'></input>
          </label>

          <label> 
          Initial Deposit:
          <input type='number' name='initialDeposit' placeholder='Amount'></input>
          </label>

          <label>
          Password:
          <input type='password' name='password' placeholder='Password'></input>
          </label>

        <button  type='submit'>Add</button>
        </form>
      </div>
      <Outlet />
    </>
  );
}
