import React from 'react'
import logo from '../assets/images/white-logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchama} from "../schema";
import userService from '../services/user.service';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
  const { register, handleSubmit,reset, formState:{ errors } } = useForm({
    resolver: yupResolver(LoginSchama),
  });

  var navigate=useNavigate();


  const sendEmailVarificationCode=async(email)=>{

    const form = new FormData();
    form.append("email",email);
    
   var responce=  await userService.sendEmailVarificationCode(form)
   console.log(responce.data);

   if(responce.data.status)
    {
      toast.success("verification code send your mail");
    }else{
      toast.error(responce.data.msg)
    }

  }


  var submit=async(data)=>{
    // console.log(data)

    const form = new FormData();
    form.append("email",data.email);
    form.append("password",data.password);

    var responce=await userService.login(form);

    // console.log(responce.data);
    
    if(responce.data.status)
    {
      reset();
      

      var email_status=(responce.data.data[0].email_verification_status==1?true:false);
      if(email_status)
      {
        toast.success("login successfull")
        localStorage.setItem("token",responce.data.token);
        localStorage.setItem("email",responce.data.data[0].email);
        navigate("/")
      }else{
        await sendEmailVarificationCode(responce.data.data[0].email);
        navigate("/verifyemail",{state:{verify:true,email:responce.data.data[0].email}})
      }
      

      
    }else{
      toast.error(responce.data.msg)
    }

  }

  const ForgotPage=()=>{
    navigate("/forgotPassword")
  }

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
                    <h4 className='login-heading'> Login </h4>
                    <div className='form-section'>
                      <Form onSubmit={handleSubmit(submit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control  type="text" placeholder="User Name" 
                          {...register('email')}  isInvalid={!!errors.email}  />
                          <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Control  type="password" placeholder="Password" {...register('password')}  isInvalid={!!errors.password} />
                          <Form.Control.Feedback type="invalid">
                          {errors.password?.message}
                          </Form.Control.Feedback>

                        </Form.Group>
                        <Form.Text>
                            <p className="mb-4 mt-4 forgot-pw" onClick={ForgotPage}> Forgot Password? </p>
                        </Form.Text>
                        <div className='col-12'>
                          <Button className='all-button' variant="primary" type="submit"> Login </Button>
                        </div>
                      </Form>
                    </div>
                    <div className='mt-5 mb-4 mobile-margin'>
                      <p className='signup-text'> Don't have an account <Link to={"/signup"}>SIGNUP</Link> now </p>
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

export default Login
