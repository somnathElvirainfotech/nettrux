import React from 'react'
import bluelogo from '../assets/images/blue-logo.svg';
import crossicon from '../assets/images/cross-icon.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

import userService from '../services/user.service';
import { toast } from 'react-toastify';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {SendEmail} from "../schema";

function ForgotPassword() {

  const { register, handleSubmit,reset, formState:{ errors } } = useForm({
    resolver: yupResolver(SendEmail),
  });


  const submit=async(data)=>{

    const form = new FormData();
    form.append("email",data.email);
    
   var responce=  await userService.forgetPasswordEmailSend(form)
  //  console.log(responce.data);

   if(responce.data.status)
    {
      toast.success("Link send your email");
    }else{
      toast.error(responce.data.msg)
    }

  }


  return (
    <>
      <div className='bg-all-page'>
          <div className='container'>
            <div className='common-area'>
              <div className='borderd-area width1070 align-items-center justify-content-center'>
                <div className='forgot-bg-cover'>
                  <div className='blue-logo-area'>
                    <img src={bluelogo} className="blue-logo" alt="white logo" />
                  </div>
                    <div className='col-lg-6'>
                      <div className='f-pw-content'>
                          <h1 className='heading-f-pw mb-2'>Forgot Password</h1>
                          <p>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
                          <Form onSubmit={handleSubmit(submit)}>
                              <Form.Group className="mb-4 mt-4 email-design" controlId="formBasicEmail">
                                <Form.Control autoComplete={"off"} type="email" placeholder="Email Address" {...register("email")} isInvalid={!!errors.email} />
                                <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                                </Form.Control.Feedback>
                              </Form.Group>
                              <div className='col-12'>
                                <Button className='all-button' variant="primary" type="submit"> Reset Password </Button>
                              </div>
                          </Form>
                          </div>
                    </div>
                    <Link className="cross-icon" to='/login'> <img src={crossicon} alt="white logo" /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ForgotPassword
