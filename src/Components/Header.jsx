import React, { useContext } from 'react'
import navopen from '../assets/images/nav-open-icon.svg';
import userpic from '../assets/images/user.png';
import notificon from '../assets/images/notification-alert.svg';
import chaticon from '../assets/images/chat.svg';
import { userContext } from '../store';


export default function Header() {
    const {userState,dispatch} = useContext(userContext);

    console.log(userState);

    var openNav=() => {
        document.getElementById("mySidebar").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    }
    
  return (
    <>
      <header className="dash-header d-flex align-items-center justify-content-between">
            <button className="openbtn" onClick={openNav}><img src="images/toggle-btn.png" alt=""/> <img src={navopen} className="nav icon" alt="nav icon" /> </button>
            <div className="right-head d-flex align-items-center">
                <div className="search-bar">
                    <form>
                        <input className="form-control" type="text" placeholder="search here..." />
                        <button className="search-submit" type="submit"> <i className="fa fa-search"></i> </button>
                    </form>
                </div>

                
                <div className='notification-area d-flex ps-2 pe-2'>
                    


                </div>

                <div className='profile-head d-flex align-items-center'>
                    <div className='rounded-proPic'>
                        <img src={userpic} className="nav icon" alt="userpic"/> 
                    </div>
                    <div class="dropdown">
                        <button className="btn btn-secondary dropdown-toggle user-toggle" type="button" id="admin-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                           {userState.username}
                        </button>
                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>

                </div>
                 
                 
            </div>
            
        </header>
    </>
  )
}
