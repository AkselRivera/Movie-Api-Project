import React, { memo } from 'react';
import { MovieCard } from './MovieCard';
import { useFetch } from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { movieNext, moviePrev } from '../../actions/ui';


function MovieScreen() {

  const {movie} = useSelector( state => state.ui );
  const dispatch = useDispatch();


  const data= useFetch( `https://api.themoviedb.org/3/discover/movie?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=${movie.page}&with_watch_monetization_types=flatrate`) ;
  
  const handleIncrement=()=>{
    window.scrollTo(0,0);
    dispatch( movieNext() );
  }

  const handleDecrement=()=>{
    window.scrollTo(0,0);
    dispatch(moviePrev());
  }


  if(data === [] || data === undefined )
        return <div className='d-flex justify-content-center mt-5'>
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden"></span>
                </div>
                </div>
    else

  return (
  <div className='container-fluid text-white bg-dark'>
    <h1>Movies</h1>
    <div className="mx-5 " >

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-1">
            
            {
            data.data.map ( e=> ( <MovieCard key={e.id} {...e} /> ) )
            }

    </div>
            <div className='d-flex justify-content-center'>


              { movie.page !==1 &&
              <button className='btn btn-outline-light my-5'
                      onClick={handleDecrement}
              >
                Previous
              </button>
              }
              <button className='btn btn-outline-light disabled my-5 mx-2'
              >
                {movie.page}
              </button>

              { movie.page!== data.total_pages &&
              <button className='btn btn-outline-light my-5 '
                      onClick={handleIncrement}
              >
                Next
              </button>
              }
            </div>
    </div>

  </div>
  );
}

export default MovieScreen;