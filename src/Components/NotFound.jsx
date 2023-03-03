import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function NotFound() {
  var location=useLocation();
  var navigate=useNavigate();
  var [msg,setMsg]=useState("");


  useEffect(()=>{

    if(location.state === null)
    {
      navigate(-1)
    }else{
      
      setMsg(location.state.msg)
    }

  },[])
  
  return (
    <div>{msg}</div>
  )
}

export default NotFound