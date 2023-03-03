import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/white-logo.svg';
import {userContext} from '../store';

function Sidebar() {

  const {userState,dispatch} =useContext(userContext);

  var closeNav=() =>{
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  var Logout=()=>{
    localStorage.clear();
    dispatch({type:"reset",valuse:""});

  }

  return (
    <>
       <div id="mySidebar" className="sidebar">
          <div className="logo-area d-flex align-items-center justify-content-between">
            <img src={logo} className="white-logo" alt="white logo" />
            <button className="closebtn border-0" onClick={closeNav}>&times;</button>
          </div>
          <div className='button-listing p-3 pe-0'>
            <h4 className="dashboard-heading"><span><i className="fa fa-tachometer"></i></span> Dashboard </h4>
            <NavLink to={'/'}><button className='active-page'> <span className='rate-icon'></span> Rate </button></NavLink>
            <NavLink  to={'/mybooking'}><button> <span className='booking-icon'></span> My Booking </button></NavLink>
            <NavLink to={'/packagetracking'}> <button> <span className='tracking-icon'></span> Package Tracking </button> </NavLink>
            <NavLink to={'/Payementhistory'}> <button> <span className='payment-icon'></span> Payment History </button> </NavLink>
            <NavLink to={'/login'} onClick={Logout}> <button> <span className='logout-icon'></span> Logout </button> </NavLink>
          </div>
        </div>
    </>
  )
}

export default Sidebar
