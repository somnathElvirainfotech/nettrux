import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFieldArray, useForm } from "react-hook-form";
import plusicon from "../assets/images/plus-icon.svg";
import { yupResolver } from '@hookform/resolvers/yup';
import {RateSchema} from "../schema";
import CountryStateCityService from "../services/CountryStateCity.service";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ShipPrimusService from "../services/ShipPrimus.service";
import Loader from "./Loader";

const freightInfo ={ qty: "", weight: "", weightType: "", length: "", width: "", height: "" };

// plus-icon.svg
function Rate() {
  const { register, control,getValues, handleSubmit,formState:{ errors }, reset } = useForm({
    resolver:yupResolver(RateSchema),
    defaultValues: {
      freightInfo: [
        freightInfo,
      ],
    },
    mode:"all"
  });

  const navigate=useNavigate();
  const [loader,setLoader]=useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "freightInfo",
  });

  const [Origin,setOrigin]=useState({
    country:[],
    state:[],
    city:[]
  });

  const [Destination,setDestination]=useState({
    country:[],
    state:[],
    city:[]
  });


  const getCountry=async()=>{
    var responce=await CountryStateCityService.getAllCountry();
      // return responce.data.data;
      var name='country';
      var value=responce.data.data
      setOrigin({...Origin,[name]:value})  
      setDestination({...Destination,[name]:value})         
  }

  const getState=async(id)=>{
    var responce=await CountryStateCityService.getStateById(id);
      return responce.data.data;        
  }

  const getCity=async(id)=>{
    var responce=await CountryStateCityService.getCityById(id);
      return responce.data.data             
  }

  useEffect(()=>{
    getCountry();
  },[])



  const getOriginState=async(id)=>{
    reset({originState:"",originCity:""})
    var value=await getState(id);
    var name='state';
    setOrigin({...Origin,[name]:value})  
  }

  const getOriginCity=async(id)=>{
    reset({originCity:""})
    var value=await getCity(id);
    var name='city';
    setOrigin({...Origin,[name]:value})  
  }


  const getDestinationState=async(id)=>{
    reset({destinationState:"",destinationCity:""})
    var value=await getState(id);
    var name='state';
    setDestination({...Destination,[name]:value})  
  }

  const getDestinationCity=async(id)=>{
    reset({destinationCity:""})
    var value=await getCity(id);
    var name='city';
    setDestination({...Destination,[name]:value})  
  }

  
  const onSubmit=async(data)=>{
    setLoader(true)
    data.pickupDate=moment(data.pickupDate).format("YYYY-MM-DD");
    // data.freightInfo=JSON.stringify(data.freightInfo)

    // console.log(data)
     var responce= await ShipPrimusService.RateMultiple(data);

    //  console.log(responce.data.data.results.rates);

    navigate("/showrate",{state:{status:true,apiData:responce.data.data.results.rates,data:data}});
    setLoader(false)

  }

  

  return (
    <>
        {loader && <Loader /> } 
      <div className="p-4 rate-content">
        <h2> Calculate Nettrux Shipping Rates. </h2>
        <Form onSubmit={handleSubmit(onSubmit)}>

        <div className="row mb-2">
        <div className="normal-content">
        <h4> When do you want to ship? </h4>
        <div className="row">
          <div className="col-lg-3">
            <Form.Group className="mb-3">
              <Form.Control {...register('pickupDate')} type="date" placeholder="Length" isInvalid={!!errors.pickupDate} />

              <Form.Control.Feedback type="invalid">
                    {errors.pickupDate?.message}
                </Form.Control.Feedback>

            </Form.Group>
          </div>
        </div>
      </div> 
        </div>
          <div className="row mb-2">
            {/** origin state,city,zip,country */}
            <div className="col-lg-6 col-md-6">
              <Form.Group className="mb-3">
              <label>Origin Country</label>
                <Form.Select {...register('originCountry')}  isInvalid={!!errors.originCountry} onChange={(e)=>getOriginState(e.target.value)}>
                  <option value={""}> Select </option>
                  {Origin.country.map((item)=>(
                    <option value={item.iso2}> {item.name} </option>
                  ))}
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                    {errors.originCountry?.message}
                </Form.Control.Feedback>

              </Form.Group>
             
           
              <Form.Group className="mb-3">
              <label>Origin State</label>
              <Form.Select {...register('originState')}  isInvalid={!!errors.originState} onChange={(e)=>getOriginCity(e.target.value)}>
              <option value={""}> Select </option>
              {Origin.state.map((item)=>(
                <option value={item.iso2}> {item.name} </option>
              ))}
            </Form.Select>

            <Form.Control.Feedback type="invalid">
                {errors.originState?.message}
            </Form.Control.Feedback>
              </Form.Group>
            
             
              <Form.Group className="mb-3">
              <label>Origin City</label>
              <Form.Select {...register('originCity')}  isInvalid={!!errors.originCity} >
              <option value={""}> Select </option>
              {Origin.city.map((item)=>(
                <option value={item.name?.toUpperCase()}> {item.name} </option>
              ))}
            </Form.Select>

            <Form.Control.Feedback type="invalid">
                {errors.originCity?.message}
            </Form.Control.Feedback>
              </Form.Group>
            
             
              <Form.Group className="mb-3">
              <label>Origin Zipcode</label>
                <Form.Control {...register('originZipcode')} isInvalid={!!errors.originZipcode} type="number" placeholder="Origin Zipcode" />
                <Form.Control.Feedback type="invalid">
                {errors.originZipcode?.message}
              </Form.Control.Feedback>
              </Form.Group>

            </div>

            {/** end origin state,city,zip,country */}

            {/** destination state,city,zip,country */}
            <div className="col-lg-6 col-md-6">
              <Form.Group className="mb-3">
              <label>Destination Country</label>
              <Form.Select {...register('destinationCountry')}  isInvalid={!!errors.destinationCountry} onChange={(e)=>getDestinationState(e.target.value)}>
                  <option value={""}> Select </option>
                  {Destination.country.map((item)=>(
                    <option value={item.iso2}> {item.name} </option>
                  ))}
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                    {errors.destinationCountry?.message}
                </Form.Control.Feedback>

              </Form.Group>
            

            
              <Form.Group className="mb-3">
              <label>Destination State</label>
                 <Form.Select {...register('destinationState')}  isInvalid={!!errors.destinationState} onChange={(e)=>getDestinationCity(e.target.value)}>
                  <option value={""}> Select </option>
                  {Destination.state.map((item)=>(
                    <option value={item.iso2}> {item.name} </option>
                  ))}
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                    {errors.destinationState?.message}
                </Form.Control.Feedback>
              </Form.Group>
           

             
              <Form.Group className="mb-3">
              <label>Destination City</label>
              <Form.Select {...register('destinationCity')}  isInvalid={!!errors.destinationCity} >
              <option value={""}> Select </option>
              {Destination.city.map((item)=>(
                <option value={item.name?.toUpperCase()}> {item.name} </option>
              ))}
            </Form.Select>

            <Form.Control.Feedback type="invalid">
                {errors.destinationCity?.message}
            </Form.Control.Feedback>
              </Form.Group>
             

             
              <Form.Group className="mb-3">
              <label>Destination Zipcode</label>
                <Form.Control type="number" {...register('destinationZipcode')} isInvalid={!!errors.destinationZipcode} placeholder="Destination Zipcode" />

                <Form.Control.Feedback type="invalid">
                {errors.destinationZipcode?.message}
                </Form.Control.Feedback>

              </Form.Group>

            </div>

            {/** end destination sate,city,zip,country */}
          </div>

          

          <div className="normal-content">
            <h4> Tell us more about your shipment </h4>
            <div className="row">
              {/**  <div className="col-xxl-3 col-lg-6 col-md-12">
                <label>
                  No. Of Packages <span> (Max. 40) </span>
                </label>
                <Form.Select>
                  <option> Select </option>
                  <option> Option 1 </option>
                </Form.Select>
              </div> */}
              {/**  <div className="col-xxl-3 col-lg-6 col-md-12">
                <label className="top-gap-res">
                  {" "}
                  Weight Per Package<span> (Max. weight 68 kg.) </span>
                </label>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="KG" />
                </Form.Group>
              </div>  */}

              <div className="col-xxl-3 col-lg-6 col-md-12">
                <label>Unit of Measure</label>
                <Form.Select isInvalid={!!errors.uom} {...register('uom')} >
                  <option value={""}> Select </option>
                  <option value={"us"}> US </option>
                  <option value={"METRIC"}> METRIC </option>
                  <option value={"MIXED"}> MIXED </option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                {errors.uom?.message}
                </Form.Control.Feedback>
              </div>

               {/**  <div className="col-xxl-6">
                <label className="top-gap-res">
                  {" "}
                  Dimensions Per Package <span>L × W × H (Optional)</span>
                </label>
                <div className="row">
                  <div className="col-lg-4">
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Length" />
                    </Form.Group>
                  </div>

                  <div className="col-lg-4">
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Width" />
                    </Form.Group>
                  </div>

                  <div className="col-lg-4">
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Height" />
                    </Form.Group>
                  </div>
                </div>
              </div> */}
            </div>

           {/**  <button className="border-0 add-package">
              {" "}
              <span>
                <img src={plusicon} className="plusicon" alt="plus" />
              </span>{" "}
              Add Another Package{" "}
            </button> */}
          </div>  

          <div className="normal-content">
            <h4> Pallets Details Info </h4>

            {fields.map((item, index) => {
              return (
                <div className="row"  key={index}>
                  <div className="col-1">
                    <Form.Group className="mb-3">
                   
                     <label className="lable_style" >Qty</label>
                      <Form.Control 
                        {...register(`freightInfo.${index}.qty`)}
                        type="number"
                        placeholder="qty"
                        isInvalid={!!errors.freightInfo?.[index]?.qty}
                      />
                     
                    </Form.Group>
                   
                  </div>

                  <div className="col-2">
                    <Form.Group className="mb-3">
                    <label className="lable_style" >Weight</label>
                      <Form.Control 
                        {...register(`freightInfo.${index}.weight`)}
                        type="number"
                        placeholder="weight"
                        isInvalid={!!errors.freightInfo?.[index]?.weight}
                       
                      />
                    </Form.Group>
                  </div>

                  <div className="col-2">
                    <Form.Group className="mb-3">
                    <label className="lable_style" >Weight Type</label>
                      <Form.Select 
                        {...register(`freightInfo.${index}.weightType`)}
                        isInvalid={!!errors.freightInfo?.[index]?.weightType}
                        >
                        <option value={""}> select </option>
                        <option value={"each"}> Each </option>
                        <option value={"total"}> Total </option>
                      </Form.Select>
                    </Form.Group>
                  </div>

                
                 
                  <div className="col-2">
                    <Form.Group className="mb-3">
                    <label className="lable_style" >Height</label>
                      <Form.Control 
                        {...register(`freightInfo.${index}.height`)}
                        type="number"
                        placeholder="height"
                        isInvalid={!!errors.freightInfo?.[index]?.height}
                      />
                    </Form.Group>
                  </div> 

                  <div className="col-2">
                    <Form.Group className="mb-3">
                    <label className="lable_style">Length</label>
                      <Form.Control 
                        {...register(`freightInfo.${index}.length`)}
                        type="number"
                        placeholder="length"
                        isInvalid={!!errors.freightInfo?.[index]?.length}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-2">
                    <Form.Group className="mb-3">
                    <label className="lable_style">Width</label>
                      <Form.Control 
                        {...register(`freightInfo.${index}.width`)}
                        type="number"
                        placeholder="width"
                        isInvalid={!!errors.freightInfo?.[index]?.width}
                      />
                    </Form.Group>
                  </div>

                  {index > 0 &&
                  <div className="col-1">
                    <Button
                      className="border-0 remove-package mt-5"
                      type="button"
                      variant="danger"
                      onClick={() => remove(index)}
                    >
                    <span>
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </span>{" "}
                    </Button>
                  </div> }
                </div>
              );
            })}

            <button  onClick={() => append(freightInfo)} type="button" className="border-0 add-package">
              {" "}
              <span>
                <img src={plusicon} className="plusicon" alt="plus" />
              </span>{" "}
              Add Another Package{" "}
            </button>

          </div>

           

          <div className="row">
            <div className="col-12">
              <Button className="all-button" variant="primary" type="submit">
                {" "}
                Show Rate{" "}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Rate;
