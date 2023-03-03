
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.js'; 

import '../src/assets/css/style.css'; 
import '../src/assets/css/responsive.css'; 

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Store from "./store";
import {RequireAuth,RequireAuthLogout} from "./middleware/RequireAuth";

import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword'; 
import Signup from './Components/Signup'; 
import Verifyemail from './Components/Verifyemail'; 
import BasePage from './Components/BasePage';
import Rate from './Components/Rate'; 
import Showrate from './Components/Showrate'; 
import Mybooking from './Components/Mybooking'; 
import Packagetracking from './Components/Packagetracking'; 
import Payementhistory from './Components/Payementhistory'; 
import PasswordChange from './Components/PasswordChange';
import NotFound from './Components/NotFound';

// Payementhistory
 
function App() {
  return (
    <div className="App">
      <Store>
         <BrowserRouter>
            <Routes>

              <Route path='login' element={<RequireAuthLogout> <Login/> 
              </RequireAuthLogout>}/>
              <Route path='signup' element={<RequireAuthLogout> <Signup/> 
              </RequireAuthLogout>}/> 
              <Route path='forgotPassword' element={<RequireAuthLogout> <ForgotPassword/> </RequireAuthLogout> }/> 
              <Route path='verifyemail' element={<Verifyemail/>}/>
              <Route path='password-change/:vcode/:email' element={<RequireAuthLogout><PasswordChange/></RequireAuthLogout>}/>
              <Route path='not-found' element={<NotFound/>}/>

             
                <Route path='' element={ <RequireAuth>
                  <BasePage/>
                  </RequireAuth>} >
                  <Route index element={<Rate />} />
                  <Route path='showrate' element={<Showrate/>}/>
                  <Route path='mybooking' element={<Mybooking/>}/>
                  <Route path='packagetracking' element={<Packagetracking/>}/>
                  <Route path='payementhistory' element={<Payementhistory/>}/>
                </Route>
             
             

            </Routes>
         </BrowserRouter>
         </Store>
        {/* <Login></Login> */}
       

    </div>
     
  );
}

export default App;
