import React, { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useNavigate
  } from "react-router-dom";
import { Login } from '../components/login/Login';
import { DashboardRoutes } from './DashboardRoutes';
import PublicRoute from './PublicRoute';
import PrivateRoutes from './PrivateRoute';
import { Register } from '../components/login/Register';
import { useDispatch, useSelector } from 'react-redux';
import { startCheckinToken } from '../actions/auth';
import { loadingFinish } from '../actions/ui';


export const AppRouter = () => {
  
  const dispatch = useDispatch();
  const {loading} = useSelector( state => state.ui );

  useEffect(()=>{
    if(!!localStorage.getItem('token')){
      dispatch(startCheckinToken(localStorage.getItem('token')));
    }else{
      dispatch(loadingFinish());
    }

  },[dispatch]);

if (loading)  
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden"></span>
      </div>
    </div>)
else

return (
<div>
<BrowserRouter>

    <Routes>
        
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        }/>

        <Route path='/register' element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        }/>
        
        <Route path='/*' element={
          <PrivateRoutes>
            <DashboardRoutes/>
          </PrivateRoutes>

        }/>

    </Routes>
  </BrowserRouter>
</div>

)};
