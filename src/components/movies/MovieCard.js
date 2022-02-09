import React from 'react';
import {  useNavigate,  } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import defaultImage from '../../img/noResults.png';
import './style.css';

export const MovieCard = ({id, title, poster_path, name, original_title}) => {
const navigate = useNavigate();

const handleClick=()=>{
    navigate(`/movie/${id}`);
}
    if(title===undefined)
        title=name;
    if(title===undefined)
        title=original_title;

    return (
    
    <div className='col'>
        {/* <div className="conta"> */}
            <div className='card text-center h-100 text-white bg-dark' 
                onClick={ handleClick }
            >

                {/* <div className="overlay">
                    <div className="text">{overview}</div>
                </div> */}

                <img className='card-img-top' style={{objectFit:'cover', height:'25rem' }} 
                        src={!!poster_path ? apiConfig.originalImage(poster_path) : defaultImage } alt={title} />

                <div className="card-body ">
                    <h5 className='card-title'>{  title }</h5>
                </div>

                
            </div>
        
        </div>

  
    )};
