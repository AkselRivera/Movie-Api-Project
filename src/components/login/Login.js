import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

import { startGoogleLogin, startLogin, startPasswordEmail } from '../../actions/auth';
import Swal from 'sweetalert2';
import './login.css';


export const Login = () => {

    const dispatch = useDispatch();
    const navigate= useNavigate();
    const [formValues, handleInputChange]= useForm({
        email:'',
        password:'',
    });

    const {email,password} = formValues;

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (email.trim().length===0) {
            Swal.fire('Ups!','Email is requiered','error');
        }
        else if (password.trim().length===0) {
            Swal.fire('Ups!','Password is requiered','error');
        }
        else
        dispatch( startLogin(email,password) );
    }

    const handleRegister=(e)=>{
        e.preventDefault();
        navigate('/register');
    }

    const handleGoogleLogin= ()=>{
        dispatch( startGoogleLogin() );
    }

    const handlePasswordEmail =()=>{
        if (email.trim().length===0) {
            Swal.fire('Ups!','Please write your email to reset your password', 'warning');
        }
        dispatch( startPasswordEmail(email) );
    }
return (
<div className='contain text-light'>

<div className="sidenavR">
        <div className="login-main-text">
            <h1 className="tituloR">
                <i className="fab fa-asymmetrik fa-2x d-inline-block align-text-center mx-1"></i>    
                AKSELFLIX
            </h1>

            <p>Unlimited T.V series, movies and much more</p>
            <p>Enjoy whenever you want.</p>

        </div>
    </div>
    <div className="mainR">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
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
                    <div className=' d-flex justify-content-center '>

                        <button type="submit" className="btn btn-outline-primary me-2 mt-2" >Login</button>
                        <button type="button" className="btn btn-outline-secondary mt-2" onClick={handleRegister}>Sign up</button>
                    
                    </div>
                    <div className='row'></div>

                    <div className=' d-flex justify-content-center'>
                        <a className='link-secondary mt-1'  href='# '
                            onClick={handlePasswordEmail}><small>Forgot your password?</small></a>
                    </div>
                    
                    <div className='row'></div>
                    <hr className='text-white'/>

                    <div className=' d-flex justify-content-center'>

                        <button type="button" className="btn btn-outline-light " 
                            onClick={handleGoogleLogin}><i className="fab fa-google"></i> Sign in with Google</button>
                    </div>
                </form>
            </div>
        </div>



    </div>

)};
