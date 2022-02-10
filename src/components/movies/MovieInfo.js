import React from 'react';
import { useParams } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import { useFetchMovie } from '../../hooks/useFetchMovie';

import defaultBackground from '../../img/notFound.jpg';

export const MovieInfo = () => {


    const {id}= useParams();
    const {data}=useFetchMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en`);
    const {data:{results}}= useFetchMovie(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=fd922be3276e0c686293e46cf44f0e9e`);
    


    
    if(data === undefined || results === undefined || data===[])
        return <div className='d-flex justify-content-center mt-5'>
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden"></span>
                </div>
                </div>
    else
return (
    <div className='movieBack animate__animated animate__fadeIn'>
    {/* <div  style={{
                    backgroundImage:`url(${apiConfig.originalImage(data.backdrop_path)})`,
                    backgroundAttachment:'srcoll',
                    backgroundSize:'100% auto',
                    backgroundRepeat:'no-repeat',
                    width:'100%',
                    opacity:'.5'

                }} > */}
        <img className='fondoMovie' src={!!data.backdrop_path ? apiConfig.originalImage(data.backdrop_path) : defaultBackground } 
                alt={data.original_title}
                style={{ width:'100%',opacity:'.4'}} />

        <div className=' text-white texto-encima' >

            <div className='texto-izquierda'>
            {
                !!data.poster_path &&
                <img src={apiConfig.w500( data.poster_path) } 
                style={{width:'262px', height:'393px'}}
                alt={data?.original_title}/>
            }    
            </div>

            <div className='texto-derecha'>
                <h1> {data.title} </h1>
                { data !==undefined &&
                    (<small> <i className="fas fa-info-circle"></i> {data.genres?.map(e=>( e.name)+' ' )} </small>)
                }

                <small> ({data.release_date}) </small>
                <small> {data.runtime} min </small>
                <p className='mt-1'>{data.overview}</p>
                <p> {data.tagline} </p>
                
                
                
                <span className='mt-3'> <i className="far fa-star"></i> {data.vote_average} </span>

                {  Object.values(results).length>0
                ?
                    <center>
                        <a className='btn btn-outline-light mt-2 ' target='_blank' rel='noreferrer'  href={results.GB?.link ? results.GB?.link : results.US?.link}  > Start </a>
                        {/* href={results.GB.GB.link} */}
                    </center> 
                :
                    <center>
                        {
                            !!data.homepage &&
                            <a className='btn btn-outline-light mt-2 ' target='_blank' rel='noreferrer' href={data.homepage}  > More... </a>
                        }
                        
                    </center> 

                }

            </div>

        </div>
    
    {/* </div> */}
    
    </div>
)};
