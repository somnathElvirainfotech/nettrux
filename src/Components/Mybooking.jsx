import React from 'react'
import Exception from '../assets/images/exception.svg';
import outofdelivery from '../assets/images/out-of.svg';
import Delivered from '../assets/images/delivered.svg';
import threedot from '../assets/images/three-dot.svg';

const Mybooking = () => {
    return (
        <>

            <div className='p-4 rate-content'>
                <h2> Welcome Back, Sangita </h2>
                <div className='status-part d-flex align-items-start mb-4'>
                    <div className='status-area'>
                        <div className='status-icon'> <img src={Exception} className="Exception" alt="Exception" /> </div>
                        <div className='status-content'>
                            <span>1</span>
                            <p> Exception </p>
                        </div>
                    </div>
                    <div className='status-area'>
                        <div className='status-icon'> <img src={outofdelivery} className="outofdelivery" alt="out of delivery" /> </div>
                        <div className='status-content'>
                            <span>9</span>
                            <p> Out For Delivery </p>
                        </div>
                    </div>
                    <div className='status-area'>
                        <div className='status-icon'> <img src={Delivered} className="Delivered" alt="Delivered" /> </div>
                        <div className='status-content'>
                            <span>12</span>
                            <p> Delivered </p>
                        </div>
                    </div>
                </div>

                <div className='dashboard-table'>
                    <table>
                        <tr>
                            <th> Tracking ID </th>
                            <th> Status </th>
                            <th> Recipient Name </th>
                            <th> Recipient City </th>
                            <th> Recipient Date </th>
                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={Exception} className="Exception" alt="Exception" /></div>
                                        <div className='exp-content'>
                                            <h4> Exception </h4>
                                            <p> Unable to Delivery Shipment, Returne </p>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={Delivered} className="Delivered" alt="Delivered" /></div>
                                        <div className='exp-content'>
                                            <h4 className='green-text'> Delivered </h4>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={outofdelivery} className="outofdelivery" alt="outofdelivery" /></div>
                                        <div className='exp-content'>
                                            <h4 className='blue-text'> Out For Delivery </h4>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={Delivered} className="Delivered" alt="Delivered" /></div>
                                        <div className='exp-content'>
                                            <h4 className='green-text'> Delivered </h4>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={outofdelivery} className="outofdelivery" alt="outofdelivery" /></div>
                                        <div className='exp-content'>
                                            <h4 className='blue-text'> Out For Delivery </h4>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={Exception} className="Exception" alt="Exception" /></div>
                                        <div className='exp-content'>
                                            <h4> Exception </h4>
                                            <p> Unable to Delivery Shipment, Returne </p>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={Delivered} className="Delivered" alt="Delivered" /></div>
                                        <div className='exp-content'>
                                            <h4 className='green-text'> Delivered </h4>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={outofdelivery} className="outofdelivery" alt="outofdelivery" /></div>
                                        <div className='exp-content'>
                                            <h4 className='blue-text'> Out For Delivery </h4>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>

                        <tr>

                            <td>
                                <div className='cover-tracking'>
                                    <div class="dropdown p-0">
                                        <button className="btn btn-secondary dropdown-toggle table-toggle" type="button" id="view-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={threedot} className="threedot" alt="three dot" />
                                        </button>
                                        <ul className="dropdown-menu p-0" aria-labelledby="admin-toggle">
                                            <li><a className="dropdown-item" href="/"> View More </a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <p> 124356874 </p>
                                </div>
                            </td>

                            <td>
                                <div className='cover-tracking'>

                                    <div className='expection'>
                                        <div className='exp-ico'><img src={Delivered} className="Delivered" alt="Delivered" /></div>
                                        <div className='exp-content'>
                                            <h4 className='green-text'> Delivered </h4>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>  Arijit Tarafdar </td>
                            <td> Kolkata </td>
                            <td> 13 Feb 2023 </td>


                        </tr>





                    </table>
                </div>



            </div>

        </>
    )
}

export default Mybooking
