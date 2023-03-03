import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import StaticRating from './StaticRating';


const Showrate = () => {

    var navigate=useNavigate();
    var location=useLocation();
    console.log(location.state);
    const [AllData,setAllData]=useState({
        data:{},
        apiData:[]
    });


    useEffect(()=>{
        if(location.state === null)
        {
          navigate(-1)
        }else{
          
          if(location.state.status && location.state.data )
          {
            setAllData({
                data:location.state.data,
                apiData:location.state.apiData
            })
           
          }else{
            navigate(-1)
          }
        }
      },[])



  return (
    <>
      
        <div className='p-4 rate-content'>
            <div className='normal-content'>
                {/* <h4> Here are the rates and delivery dates for shipments sent {moment(AllData.data.pickupDate).format("dddd, DD MMMM, YYYY ")} </h4>  */}
                    {/* {['check'].map((type) => (
                    <div className='mb-4' key={`default-${type}`}>
                        <Form.Check
                            label={`I want this shipment picked up`}
                            id={`disabled-default-${type}`}
                        />
                        <Form.Check
                            label={`View signature options`}
                            id={`disabled-default-${type}`}
                        />

                        <Form.Check
                            label={`I'm shipping non-standard package(s)`}
                            id={`disabled-default-${type}`}
                        />

                    </div>

                    ))} */}

                   
          <div className="normal-content">
            <h4> Need additional cover? </h4>
            <p>
              Do you want to purchase a higher limit of liability from FedEx for
              this shipment? If yes, include a declared value for carriage.
            </p>
            <div className="pt-2">
              {["radio"].map((type) => (
                <div key={`default-${type}`}>
                  <Form.Check
                    inline
                    type={type}
                    label={`Yes`}
                    id={`disabled-default-${type}`}
                  />
                  <Form.Check
                    inline
                    label={`No`}
                    type={type}
                    id={`disabled-default-${type}`}
                  />
                </div>
              ))}
            </div>
          </div> 

                
                <div className='arrive-acordian'>
                    <Accordion defaultActiveKey="0">
                      

                    {(AllData.apiData.length > 0) && AllData.apiData.map((item,index)=>{
                      
                        if(item.total > 0)
                        {
                            
                          return  <Accordion.Item eventKey={index}>
                            <Accordion.Header>
                                <div className='cover-area d-flex justify-content-conter'>
                                <div className='arrive-area justify-content-start'>
                                   <img src={item.iconUrl} alt="" className='shiperIcon' />
                                </div>

                                <div className='arrive-area '>
                                        <h4> Name </h4> 
                                        <p> {item.name} </p>
                                </div>

                                  {/**   <div className='arrive-area '>
                                        <h4> Arrives On </h4> 
                                        <p> Tue, Feb 14 </p>
                                    </div> */}
                                  {/**  <div className='arrive-area'>
                                        <h4> Delivered By </h4> 
                                        <p> 8:00 pm </p>
                                        <p> Nettrux Priority Overnight® </p>
                                    </div> */}
                                    <div className='arrive-area'>
                                        <span className='button-price'> ${item.total} </span>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className='acordian-table'>
                                    <table>
                                    <tr>
                                        <td><b> Rating :</b></td>
                                        <td>{<StaticRating value={item.rating} />}</td>
                                    </tr>
                                        <tr>
                                            <td><b> Rate Type : </b> </td>
                                            <td> {item.rateType} </td>
                                        </tr>
                                         <tr>
                                            <td><b> Service Level : </b></td>
                                            <td> {item.serviceLevel} </td>
                                        </tr>
                                        <tr>
                                            <td><b> Quote Number : </b> </td>
                                            <td> {item.quoteNumber} </td>
                                        </tr>
                                        <tr>
                                            <td><b> Transit Days : </b> </td>
                                            <td> {item.transitDays} </td>
                                        </tr>
                                         
                                        
                                    </table>

                                    

                                </div>

                                <h5> <b> Rate Breakdown </b> </h5> 
                                <div className='acordian-table'>
                                    <table>

                                    {item.rateBreakdown.map((item)=>(
                                        <tr>
                                            <td> <b>  {item.name} : </b> </td>
                                            <td> ${item.total} </td>
                                        </tr>
                                        ))}
                                        
                                    </table>
                                </div>

                                
                                <div className='acordian-table'>
                                    <table>

                                     <tr>
                                     <td> <b> Estimated Total : </b> </td>
                                     <td> <b> ${item.total} </b> </td>
                                     </tr>
                                        
                                    </table>
                                </div>

                                


                                <h5> <b>  Rate Remarks : </b> </h5> 
                                <div className='acordian-table'>
                                    <table>

                                    {item.rateRemarks.map((item,index)=>(
                                        <tr>
                                            <td> {index+1}.{item} </td>
                                        </tr>
                                        ))}
                                        
                                    </table>
                                </div>

                            </Accordion.Body>
                            </Accordion.Item>
                        }
                    })}
                    
                    {AllData.apiData.length === 0 && <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className='cover-area d-flex justify-content-conter'>
                            <div className='arrive-area justify-content-start'>
                                <h4> No Records Found </h4> 
                            </div>
                            
                        </div>
                    </Accordion.Header>
                   
                </Accordion.Item>}

                    
                    
                    
                    
                    
                    {/** default value start */}
                    
                  {/** <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <div className='cover-area d-flex justify-content-conter'>
                                    <div className='arrive-area justify-content-start'>
                                        <h4> Arrives On </h4> 
                                        <p> Tue, Feb 14 </p>
                                    </div>
                                    <div className='arrive-area'>
                                        <h4> Delivered By </h4> 
                                        <p> 8:00 pm </p>
                                        <p> Nettrux Priority Overnight® </p>
                                    </div>
                                    <div className='arrive-area'>
                                        <span className='button-price'> $1,028.80 </span>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className='acordian-table'>
                                    <table>
                                        <tr>
                                            <td> Base rate </td>
                                            <td> $360.00 </td>
                                        </tr>
                                        <tr>
                                            <td> India WB CGST </td>
                                            <td> $78.50 </td>
                                        </tr>
                                        <tr>
                                            <td>  India WB SGST </td>
                                            <td> $78.50 </td>
                                        </tr>
                                        <tr>
                                            <td> Fuel Surcharge </td>
                                            <td> $316.80 </td>
                                        </tr>
                                        <tr>
                                            <td> Waybill </td>
                                            <td> $165.00 </td>
                                        </tr>
                                        <tr>
                                            <td>  Peak Surcharge </td>
                                            <td> $30.00 </td>
                                        </tr>
                                        <tr>
                                            <td> <b> Estimated Total </b> </td>
                                            <td> <b> $1,028.80 </b> </td>
                                        </tr>
                                    </table>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item> */}
                    </Accordion>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Showrate
