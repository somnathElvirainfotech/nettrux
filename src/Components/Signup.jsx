import React, { useEffect, useState } from 'react'
import logo from '../assets/images/white-logo.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {SignupSchama} from "../schema";

import countryStateCityService from '../services/CountryStateCity.service';
import userService from '../services/user.service';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

function Signup() {

  const { register, handleSubmit,reset, formState:{ errors } } = useForm({
    resolver: yupResolver(SignupSchama),
  });

  const [Country,setCountry]=useState([]);
  const navigate = useNavigate();

  const getAllContry=async()=>{
    var responce=await countryStateCityService.getAllCountry();
    // console.log(responce.data);
    if(responce.data.status)
    setCountry(responce.data.data);
  }

  useEffect(()=>{
    getAllContry();
  },[])

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

  const signup= async(data)=>{
    // console.log(data)

    const form = new FormData();
    form.append("firstname",data.firstname);
    form.append("lastname",data.lastname);
    form.append("no_shipment",data.no_shipment);
    form.append("password",data.password);
    form.append("confirm_password",data.confirm_password);
    form.append("address",data.address);
    form.append("email",data.email);
    form.append("country",data.country);
    form.append("phone",data.phone);

    var responce=await userService.signup(form);

    // console.log(responce.data.status);
    
    if(responce.data.status)
    {
      reset();
      await sendEmailVarificationCode(data.email);
      navigate("/verifyemail",{state:{verify:true,email:data.email}})
    }else{
      toast.error(responce.data.msg)
    }


  }


  return (
    <>
      <div className='bg-all-page'>
        <div className='container'>
          <div className='common-area signup-page'>
            <div className='borderd-area width1070 align-items-center justify-content-center'>
              <div className='left-image'> </div>
              <div className='login-form'>
                <div className='under-form'>
                  <div className='form-logo mb-4'>
                    <img src={logo} className="white-logo" alt="white logo" />
                  </div>
                  <h4 className='login-heading mb-3'> Signup </h4>
                    <div className='form-section'>
                      <Form onSubmit={handleSubmit(signup)} >
                        <div className='row'>
                          <div className='col-md-6'>
                            <Form.Group className="mb-3">

                              <Form.Control type="text" placeholder="First Name" {...register("firstname")}  isInvalid={!!errors.firstname} />

                              <Form.Control.Feedback type="invalid">
                              {errors.firstname?.message}
                            </Form.Control.Feedback>
                            
                            </Form.Group>
                          </div>

                          <div className='col-md-6'>

                            <Form.Group className="mb-3">
                              <Form.Control type="text" placeholder="Last Name"
                               {...register("lastname")} isInvalid={!!errors.lastname} />

                              <Form.Control.Feedback type="invalid">
                              {errors.lastname?.message}
                            </Form.Control.Feedback>

                            </Form.Group>

                          </div>

                          <div className='col-md-6'>
                            <Form.Group className="mb-3">
                              <Form.Control type="text" placeholder="Approx. Number of Shipment/Monthly" {...register("no_shipment")} isInvalid={!!errors.no_shipment} />

                              <Form.Control.Feedback type="invalid">
                              {errors.no_shipment?.message}
                            </Form.Control.Feedback>

                            </Form.Group>
                          </div>

                          <div className='col-md-6'>
                            <Form.Select className='form-select mb-3' {...register("country")} isInvalid={!!errors.country} >

                              <option value="" key="0" > Country </option>
                              {Country.length > 0 && Country.map((item)=>(
                                <option key={item.id} value={item.iso2}>{item.name}</option>
                              ))}
                            </Form.Select>
                           
                            <Form.Control.Feedback type="invalid">
                            {errors.country?.message}
                             </Form.Control.Feedback>
                           

                          </div>

                          <div className='col-md-12'>
                            <Form.Group className="mb-3">
                              <Form.Control type="text" placeholder=" Address " 
                              {...register("address")} isInvalid={!!errors.address}  />

                              <Form.Control.Feedback type="invalid">
                              {errors.address?.message}
                            </Form.Control.Feedback>

                            </Form.Group>
                          </div>

                          <div className='col-md-6'>
                            <Form.Group className="mb-3">
                              <Form.Control type="text" placeholder=" Phone Number"
                              {...register("phone")} isInvalid={!!errors.phone} />

                              <Form.Control.Feedback type="invalid">
                              {errors.phone?.message}
                            </Form.Control.Feedback>

                            </Form.Group>
                          </div>

                          <div className='col-md-6'>
                            <Form.Group className="mb-3">
                              <Form.Control type="email" placeholder="Email Address" 
                              {...register("email")} isInvalid={!!errors.email} />

                              <Form.Control.Feedback type="invalid">
                              {errors.email?.message}
                            </Form.Control.Feedback>

                            </Form.Group>
                          </div>
                          
                          <div className='col-md-6'>
                            <Form.Group className="mb-3">
                              <Form.Control type="password" placeholder="Password"
                              {...register("password")} isInvalid={!!errors.password} />

                              <Form.Control.Feedback type="invalid">
                              {errors.password?.message}
                            </Form.Control.Feedback>

                            </Form.Group>
                          </div>
                          
                          <div className='col-md-6'>
                            <Form.Group className="mb-3">
                              <Form.Control type="password" placeholder="Confirm Password" {...register("confirm_password")} isInvalid={!!errors.confirm_password}  />

                              <Form.Control.Feedback type="invalid">
                              {errors.confirm_password?.message}
                            </Form.Control.Feedback>
                              
                            </Form.Group>
                            
                          </div>

                         
  
                        <div className='col-12 mt-4'>
                          <Button className='all-button' variant="primary" type="submit"> Signup </Button>
                        </div>
                        </div>
                      </Form>
                    </div>
                  <div className='mt-3 mb-4'>
                    <p className='signup-text'> Already have an account <Link to={'/login'}>LOGIN</Link> now </p>
                      
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

export default Signup
