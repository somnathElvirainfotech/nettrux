import React, { useEffect, useState } from 'react'
import logo from '../assets/images/white-logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ChangePassword} from "../schema";
import userService from '../services/user.service';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';


function PasswordChange() {
  const { register, handleSubmit,reset, formState:{ errors } } = useForm({
    resolver: yupResolver(ChangePassword),
  });

  var navigate=useNavigate();
  var {vcode,email} = useParams();
  const [demail,setDemail]=useState("");

  


  var submit=async(data)=>{
    // console.log(data)

    const form = new FormData();
    form.append("email",demail);
    form.append("password",data.password);
    form.append("confirm_password",data.confirm_password);

    var responce=await userService.changePassword(form);

    // console.log(responce.data);
    
    if(responce.data.status)
    {
      reset();
      toast.success(responce.data.msg)
      navigate("/");

    }else{
      toast.error(responce.data.msg)
    }

  }

  var accountVerify=async()=>{


    const form = new FormData();
    form.append("email",email);
    form.append("activecode",vcode);

    var responce = await userService.accountVerify(form);

    // console.log(responce.data)

    if(responce.data.status)
    {
      reset();
    //   toast.success(responce.data.msg);
    //   console.log(atob(email))
      setDemail(atob(email))
    }else
    {
        // toast.error(responce.data.msg)
        navigate("/not-found",{state:{msg:responce.data.msg}})
    }

  }

  useEffect(()=>{
    accountVerify();
  },[])

  return (
    <>
        <div className='bg-all-page'>
          <div className='container'>
            <div className='common-area'>
              <div className='borderd-area width1070 align-items-center justify-content-center'>
                <div className='left-image'> </div>
                <div className='login-form'>
                  <div className='under-form'>
                    <div className='form-logo'>
                      <img src={logo} className="white-logo" alt="white logo" />
                    </div>
                    <h4 className='login-heading'> Password Change </h4>
                    <div className='form-section'>
                      <Form onSubmit={handleSubmit(submit)}>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control type="password" placeholder="Password" {...register('password')}  isInvalid={!!errors.password} />
                          <Form.Control.Feedback type="invalid">
                          {errors.password?.message}
                          </Form.Control.Feedback>

                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="password" placeholder="Confirm password" 
                          {...register('confirm_password')}  isInvalid={!!errors.confirm_password}  />
                          <Form.Control.Feedback type="invalid">
                          {errors.confirm_password?.message}
                          </Form.Control.Feedback>
                        </Form.Group>

                        
                        <div className='col-12'>
                          <Button className='all-button' variant="primary" type="submit"> Change Password </Button>
                        </div>

                      </Form>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default PasswordChange
