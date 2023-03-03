import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import searchicon from '../assets/images/search-icon.svg';
 
function Packagetracking() {
  return (
    <>
       
        <div className='p-4 rate-content'>
            <div className='row justify-content-center mt-4'>
                <div className='col-xl-5'>
                    <div className='text-center'>
                        <h2 className='mb-3'> Track Your Shipment </h2>
                        <Form className='position-relative'>
                            <Form.Group className="mb-3 track-search" controlId="searchform">
                                <Form.Control type="text" placeholder=" Enter your tracking id here... " />
                            </Form.Group>
                                <Button className='trac-button' variant="primary" type="submit"><span><img src={searchicon} className="search-icon" alt="search icon " /></span> Track </Button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='row justify-content-center mt-4'>
                <div className='col-xl-6'>
                    <div className='shipping-details d-flex'>
                        <span className='active'> 
                            <i className="fa fa-check-circle"></i> 
                            <p className='position'> Shiped </p>
                            <div className='shipping-position text-start'>
                                <p>From</p>
                                <b> Kolkata </b>
                            </div>
                        </span>
                        <span className='active'> 
                            <i className="fa fa-check-circle"></i>  
                            <p className='position'> in Transit </p>
                            <div className='shipping-position'>
                                <p> <b> Date Of Booking: </b> 10 Feb 2023 10:35AM </p>
                                <p> <b> Expected Delivery Date: </b> 13 Feb 2023 </p>
                            </div>
                        </span>
                        <span> <i className="fa fa-check-circle"></i>
                            <p className='position'> Delivered </p>
                            <div className='shipping-position text-start'>
                                <p> To </p>
                                <p> <b> Dilhi </b> </p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <div className='search-track-table mt-5'>
                <table>
                    <tr>
                        <th> Location </th>
                        <th> Details </th>
                        <th> Date </th>
                        <th> Time </th>
                    </tr>

                    <tr>
                        <td> Kolkata </td>
                        <td> Sorted to destination </td>
                        <td> 10 Feb 2023 </td>
                        <td> 11:50AM </td>
                    </tr>

                    <tr>
                        <td> Kolkata </td>
                        <td> Shipment picked Up </td>
                        <td> 10 Feb 2023 </td>
                        <td> 11:40 AM </td>
                    </tr>

                </table>
            </div>
            

        </div>
 
         
    </>
  )
}

export default Packagetracking
