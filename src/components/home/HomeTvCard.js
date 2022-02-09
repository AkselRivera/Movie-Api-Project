import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import '../movies/style.css';

export const HomeTvCard = ({ id,title,name,poster_path}) => {

    if(title===undefined)
        title=name;
    // if(title===undefined)
    //     title=original_title;
    const navigate=useNavigate();

    const handleClickTv =()=>{
        navigate(`/tv/${id}`);
    }

    return (
    
    <div className='col'>
        {/* <div className="conta"> */}
            <div className='card text-center h-100 text-white bg-dark'
                onClick={handleClickTv}>

                {/* <div className="overlay">
                    <div className="text">{overview}</div>
                </div> */}

                <img className='card-img-top' style={{height:'25rem' }} 
                    src={apiConfig.originalImage(poster_path)} alt={name} />

                <div className="card-body ">
                    <h5 className='card-title'>{  title }</h5>
                </div>

                
            </div>
        
        {/* </div> */}
    </div>

  
    )};