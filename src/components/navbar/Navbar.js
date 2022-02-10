import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { startLogout } from "../../actions/auth";

import imagen from'../../img/default.png';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  
  const auth = useSelector( state => state.auth );

  const handleLogout=()=>{
    dispatch(startLogout());
    navigate('/login', {
      replace:true
    });
  }

  return (
    <div>
    <nav className="navbar navbar-dark bg-dark bg-gradient align-items-center">
        <div className="container-fluid">
            <Link className="nav-link link-light" to="/">
                <i className="fab fa-asymmetrik fa-2x d-inline-block align-text-center mx-1"></i>
                
                <span className="titulo">
                  AKSELFLIX</span>
            </Link>
            <div className="d-flex justify-content-center">
                <NavLink to="/" className={ (navData)=> navData.isActive ? "nav-link link-light act" :"nav-link link-light" } >Home</NavLink> 
                <NavLink to="/movie" className={ (navData)=> navData.isActive ? "nav-link link-light act" :"nav-link link-light" } >Movie</NavLink>
                <NavLink to="/tv" className={ (navData)=> navData.isActive ? "nav-link link-light act" :"nav-link link-light" } >TV </NavLink>
                
                  <div className="d-flex justify-content-center ">
                    <span className="nav-link link-light">
                      
                    <img src={ auth?.photo ? auth.photo : imagen} alt="" className="userPhoto me-1 "/> 
                      {auth?.name}
                      
                      </span>
                  </div>

                  <span className="nav-link link-light">
                  <button className="btn btn-outline-danger nav-link link-light"
                          onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                  </button>
                  </span>

            </div>
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
