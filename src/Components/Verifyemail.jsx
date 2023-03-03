import React, { useCallback, useEffect, useState } from 'react'
import logo from '../assets/images/white-logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {VerifyEmailSchama} from "../schema";
import userService from '../services/user.service';
import { toast } from 'react-toastify';

function Verifyemail() {

  const { register, handleSubmit,reset, formState:{ errors } } = useForm({
    resolver: yupResolver(VerifyEmailSchama),
  mode:"all",
  });
  var navigate=useNavigate();
  var location=useLocation();
  var [varifyData,setVarifyData]=useState({});

  useEffect(()=>{
    if(location.state === null)
    {
      navigate(-1)
    }else{
      
      if(location.state.verify && location.state.email )
      {
        setVarifyData({
          email:location.state.email
        })
       

      }else{
        navigate(-1)
      }
    }
  },[])

 
  

  const submit=async(data)=>{
    // console.log(data);

    var code=`${data.num1}${data.num2}${data.num3}${data.num4}${data.num5}${data.num6}`;
    // console.log(code);
    const form = new FormData();
    form.append("code",code);
    form.append("email",varifyData.email);

    var responce=await userService.confirmEmailVarificationCode(form);

    if(responce.data.status)
    {
      toast.success("email verify successfull");
      navigate('/login')
    }else{
      toast.error(responce.data.msg)
    }

    reset();

  }


  return (
    <>
      <div className='bg-all-page'>
        <div className='container'>
          <div className='common-area'>
            <div className='borderd-area width728 align-items-center justify-content-center text-center'>
              <div className='verify-form'>
                <div className='form-logo mb-5 te'>
                  <img src={logo} className="white-logo" alt="white logo" />
                </div>
                <h4 className='login-heading mb-3'> Verify Your Email </h4>
                <div className='text-center mb-3 verify-content'>
                  <p> Please enter the verification code sent to your email address bellow </p>
                  <a href='mailto:tarafdar.arijit@gmail.com'>{varifyData?.email}</a>
                </div>
                <div className='form-section'>
                  <Form onSubmit={handleSubmit(submit)}>
                    <div className='row'>
                      <div className='otp-number d-flex align-items-center justify-content-center'>
                        <Form.Group className='m-2'>
                          <Form.Control  type="number"  {...register("num1")}  
                          isInvalid={!!errors.num1} />
                        </Form.Group>
                        <Form.Group className='m-2'>
                          <Form.Control   type="number"  {...register("num2")}  isInvalid={!!errors.num2} />
                        </Form.Group>
                        <Form.Group className='m-2'>
                          <Form.Control   type="number"  {...register("num3")}  isInvalid={!!errors.num3} />
                        </Form.Group>
                        <Form.Group className='m-2'>
                          <Form.Control   type="number"  {...register("num4")}  isInvalid={!!errors.num4} />
                        </Form.Group>
                        <Form.Group className='m-2'>
                          <Form.Control   type="number"  {...register("num5")}  isInvalid={!!errors.num5} />
                        </Form.Group>
                        <Form.Group className='m-2'>
                          <Form.Control   type="number"  {...register("num6")}  isInvalid={!!errors.num6} />
                        </Form.Group>
                      </div>
                      <div className='col-12 mt-4'>
                        <Button  className='all-button' variant="primary" type="submit"> Verify Now </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Verifyemail
