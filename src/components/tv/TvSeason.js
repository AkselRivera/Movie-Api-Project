import React from 'react';
import { apiConfig } from '../../api/apiConfig';
import '../movies/style.css';

export const TvSeason = ({ id,air_date,name, overview,episode_count,poster_path,backdrop_path}) => {

    if(poster_path===null)
        poster_path=backdrop_path;

    return (
    
    <div className='col'>
        {/* <div className="conta"> */}
            <div className='card text-center h-100 text-white bg-dark mt-2'>

                {/* <div className="overlay">
                    <div className="text">{overview}</div>
                </div> */}

                <img className='card-img-top' style={{height:'20rem' }} 
                    src={apiConfig.originalImage(poster_path)} alt={name} />

                <div className="card-body ">
                    <h5 className='card-title'>{  name }</h5>
                    <p className='card-text' style={{fontSize:'1vw',textAlign:'justify' }} > {overview} </p>
                    <p className='card-text'>Episodes: {episode_count} </p>
                    <small> {air_date} </small>
                </div>
                <div className="card-footer text-muted">
                </div>

                
            </div>
        
        {/* </div> */}
    </div>

  
    )};