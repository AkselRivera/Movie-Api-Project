import React from 'react';
import { useParams } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import { useFetchMovie } from '../../hooks/useFetchMovie';
import { TvSeason } from './TvSeason';

import defaultBackground from '../../img/notFound.jpg';

export const TvInfo = () => {

    const {id}= useParams();
    const {data}=useFetchMovie(`https://api.themoviedb.org/3/tv/${id}?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en`);
    // const {data:{results}}= useFetchMovie(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=fd922be3276e0c686293e46cf44f0e9e`);

    if(data.backdrop_path===null)
    data.backdrop_path= data.poster_path;

    if(data === [] || data === undefined )
        return <div className='d-flex justify-content-center mt-5'>
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden"></span>
                </div>
                </div>
    else
return (
    <>
    <div className='movieBack animate__animated animate__fadeIn'>
    {/* <div  style={{
        backgroundImage:`url(${apiConfig.originalImage(data.backdrop_path)})`,
        backgroundAttachment:'srcoll',
        backgroundSize:'100% auto',
        backgroundRepeat:'no-repeat',
        width:'100%',
        opacity:'.5'
        
    }} > */}
        <img src={!!data.backdrop_path ?apiConfig.originalImage(data.backdrop_path) : defaultBackground } 
                alt={data.name}
                style={{ width:'100%',opacity:'.4'}}
                className='fondoMovie' />

        <div className=' text-white texto-encima' >

            <div className='texto-izquierda'>
            {
            !!data.poster_path &&
                <img src={apiConfig.w500(data.poster_path) }
                style={{width:'262px', height:'393px'}}
                alt={data.name}/>
            }
            </div>

            <div className='texto-derecha'>
                <h1> {data.original_name} </h1>
                
                { data !==undefined  &&
                    (<><small> <i className="fas fa-info-circle"></i> {data.genres?.map(e=>( e.name)+' ' )} </small>

                <small> ({data.last_air_date}) </small>
                <small> {data.seasons?.length} { data.seasons?.length>1 ?'Seasons': 'Season' }</small>
                </>)}
                <p className='mt-1'>{data.overview}</p>
                <p> {data.tagline} </p>
                
                
                
                <span className='mt-3'> <i className="far fa-star"></i> {data.vote_average} </span>

                { data!==undefined   && 
                <center>
                    <a className='btn btn-outline-light mt-2 ' target='_blank' rel='noreferrer'  href={data.homepage}  > Start </a>
                    {/* href={results.GB.GB.link} */}
                </center> 
                }

            </div>

        </div>
    
    {/* </div> */}
    
    </div>

    <div className='container-fluid mt-3 text-center text-white'>
            <h3 >Seasons</h3>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-1' 
                // onClick={ handleClick }
            >
                {
                    data.seasons?.map(e=>( 
                        <TvSeason key={e.id} {...e} backdrop_path={data.poster_path} />
                    ))
                }
            </div>
    </div>
</>
)};
