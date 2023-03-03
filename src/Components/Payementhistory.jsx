import React from 'react'

import threedot from '../assets/images/three-dot.svg';

function Payementhistory() {
  return (
    <>
     
        <div className='p-4 rate-content'>
            <h2> Payment History </h2>

            <div className='paymeny-table'>
                <table>
                    <tr>
                        <th> Invoice Number </th>
                        <th> Tracking / Billing ID </th>
                        <th> Date </th>
                        <th> Type </th>
                        <th> Status </th>
                        <th> Total Billed </th>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='orangebox'></span> Express </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='greenbox'></span> Ground </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='orangebox'></span> Express </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='greenbox'></span> Ground </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='orangebox'></span> Express </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='greenbox'></span> Ground </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='orangebox'></span> Express </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='greenbox'></span> Ground </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='orangebox'></span> Express </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='greenbox'></span> Ground </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='orangebox'></span> Express </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='greenbox'></span> Ground </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='orangebox'></span> Express </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
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
                        <td> 124356874 </td>
                        <td> 13 Feb 2023 </td>
                        <td> <div className='d-flex align-items-center'> <span className='greenbox'></span> Ground </div> </td>
                        <td> Paid CC </td>
                        <td> <div className='total-payment'> <span> $ </span> 1240.50 </div> </td>
                    </tr>

                        
                    

                </table>
            </div>

        </div>
         
    </>
  )
}

export default Payementhistory
