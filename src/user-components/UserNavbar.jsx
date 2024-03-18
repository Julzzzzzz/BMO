import React from 'react'
import '/src/styles/AdminNavbar.css'
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function UserNavbar() {
 
const navigate = useNavigate()
const handleLogout = () => {
navigate('/login')
}

  return (<>    
  <div className='wrapper'>
    <div className='navigate'>
    <nav className="navbar">

      <div className="navbar-container">

        <div className="navbar-logo">Your Bank Logo</div>
        <div className="navbar-links">
          <NavLink to="/user/dashboard" >Dashboard</NavLink>
          <NavLink to="/user/pay-bills" >Pay Bills</NavLink>
          <NavLink to="/user/deposit" >Deposit</NavLink>
          <NavLink to="/user/transfer" >Transfer</NavLink>
          
        </div>
    </div>

            <button className='logoutBTN'
                    onClick={handleLogout}
            >
              Logout
            </button>
        
    </nav>
    </div>

    <div className='content'>
    <Outlet/>
    </div>
  </div>
    
   

 </>
  );
};




