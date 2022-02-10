import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startRegister } from '../../actions/auth';
import useForm from '../../hooks/useForm';
import './register.css';

import Swal from 'sweetalert2';


export const Register = () => {

    const navigate= useNavigate();
    const dispatch = useDispatch();

    const [formValues, handleInputChange]= useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2} = formValues;

    function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (false)
    }
        // alert("You have entered an invalid email address!")
        return (true)
    }

    


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.trim().length===0){
            Swal.fire('Ups!','User name is required','error');
            return false;
        } else if( ValidateEmail(email)){
            Swal.fire('Ups!','Your email is required','error');
            return false;
        }else if( password.length<5){
            Swal.fire('Ups!','Passwords must be 6 characters ','error');
        }
        else if( password!== password2){
            Swal.fire('Ups!','Password must match','error');
            return false;
        }else{
            dispatch(startRegister(email,password,name));
        }

    }


    const handleLogin=()=>{
        navigate('/login');
    }


return (
<div className='contain text-light animate__animated animate__fadeIn'>

<div className="sidenav sidenavL">
        <div className="login-main-text">
            <h1 className="tituloL">
                <i className="fab fa-asymmetrik fa-2x d-inline-block align-text-center mx-1"></i>    
                AKSELFLIX
            </h1>

            <p>Unlimited T.V series, movies and much more</p>
            <p>Enjoy whenever you want.</p>

        </div>
    </div>
    <div className="main mainL">
            <div className="login-form">
                <form onSubmit={handleSubmit} className='form' id='form'>
                    <div className="form-group my-2">
                    <label>User name</label>
                        <input  type="text" 
                                className="form-control" 
                                placeholder="User name"
                                name='name'
                                value={name}
                                onChange={handleInputChange}/>
                    </div>
                    <div className="form-group my-2">
                    <label>Email</label>
                        <input  type="text" 
                                className="form-control" 
                                placeholder="Email"
                                name='email'
                                value={email}
                                onChange={handleInputChange}/>
                    </div>
                    <div className="form-group my-2">
                    <label>Password</label>
                        <input  type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                name='password'
                                value={password}
                                onChange={handleInputChange}/>
                    </div>
                    <div className="form-group my-2">
                    <label>Confirm password</label>
                        <input  type="password" 
                                className="form-control" 
                                placeholder="Confirm password" 
                                name='password2'
                                value={password2}
                                onChange={handleInputChange}/>
                    </div>
                    <div className=' d-flex justify-content-center my-2 mt-3'>
                        <button type="submit" className="btn btn-outline-primary">Sign up</button>
                    </div>
                    <div className='col'></div>
                    <hr/>
                    <div className=' d-flex justify-content-center'>
                        <button type="button" className="btn btn-outline-secondary mx-2" onClick={handleLogin}>
                            Do you already have an account?
                        </button>
                    </div>
                </form>
            </div>
        </div>



    </div>

)};
