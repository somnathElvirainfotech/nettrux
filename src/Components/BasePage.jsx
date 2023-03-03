import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

import userService from '../services/user.service';
import { userContext } from '../store';
import ShipPrimusService from '../services/ShipPrimus.service';
import moment from 'moment';

function BasePage() {

  const {userState,dispatch} = useContext(userContext);
  const navigate = useNavigate();

  const fetchUser=async()=>{
    var email=localStorage.getItem("email");
    var form=new FormData();
    form.append("email",email)
    var responce=await userService.getOneUse(form);

    // console.log("at first",responce.data)
    
    if(responce.data.status)
    {
      dispatch({type:"id",value:responce.data.data[0].id});
      dispatch({type:"firstname",value:responce.data.data[0].firstname});
      dispatch({type:"lastname",value:responce.data.data[0].lastname});
      dispatch({type:"username",value:`${responce.data.data[0].firstname} ${responce.data.data[0].lastname}`});
      dispatch({type:"no_shipment",value:responce.data.data[0].no_shipment});
      dispatch({type:"phone",value:responce.data.data[0].phone});
      dispatch({type:"email_verification_status",value:(responce.data.data[0].email_verification_status===1?true:false)});
      dispatch({type:"user_status",value:(responce.data.data[0].user_status===1?true:false)});

      // ================== get and set primius token ============//

      if(localStorage.getItem('exp') !== null)
      {

        var currentTimestamp=(Date.parse((moment().format("MM/DD/YYYY HH:mm:ss")))/1000);
        if(currentTimestamp > localStorage.getItem('exp'))
        {
          var primiusRes=await ShipPrimusService.Login();
          localStorage.setItem('primustoken',primiusRes.data.data.accessToken)
          localStorage.setItem('exp',primiusRes.data.data.exp)
        }else{
          
          var primiusRes=await ShipPrimusService.RefressToken();
          localStorage.setItem('primustoken',primiusRes.data.data.accessToken)
        }

      }
      else{

        var primiusRes=await ShipPrimusService.Login();
          localStorage.setItem('primustoken',primiusRes.data.data.accessToken)
          localStorage.setItem('exp',primiusRes.data.data.exp)
      }
      

       // ================== end get and set primius token ============//

    }else{
      dispatch({type:"reset",value:""});
    }

    var email_status=(responce.data.data[0].email_verification_status==1?true:false);

    // alert(responce.data.data[0].email_verification_status)

    if(!email_status)
     {
      navigate("/verifyemail",{state:{verify:true,email:responce.data.data[0].email}})
     }

  }

  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <>
        <Sidebar />
        <div id="main">
            <Header />
          <Outlet />
        </div>
    </>
  )
}

export default BasePage
