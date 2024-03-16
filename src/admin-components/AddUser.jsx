import React from 'react'
import NewUser from './NewUser'
import { Link, Outlet } from 'react-router-dom'


export default function AddUser() {
 
  function addUserToLocalStorage(username, password, role) {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || []

    existingUsers.push({username, password, role})

    localStorage.setItem('users, JSON.stringify()existingUsers')

    
  }
  return (<>
  



    <nav>
      <Link to='new-user' element={<NewUser />}>Add User</Link>
    </nav>
    <Outlet/>

    </>)
}
