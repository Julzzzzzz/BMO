import '/src/styles/AdminNavbar.css'
import React from 'react';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }

  return (<>    
  
    <nav className="navbar">

      <div className="navbar-container">

        <div className="navbar-logo">Your Bank Logo</div>
        <div className="navbar-links">
          <NavLink to="/dashboard" >Dashboard</NavLink>
          <NavLink to="/add-user" >Add Users</NavLink>
          <NavLink to="/user-list" >User Lists</NavLink>
          <NavLink to="/reports" >Reports</NavLink>
          <NavLink to="/settings" >Settings</NavLink>
        </div>
    </div>

            <button className='logoutBTN'
                    onClick={handleLogout}
            >
              Logout
            </button>
        
    </nav>
    <Outlet/>

    </>

 
  );
};



