import React, { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { useFetch } from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { movieNext, moviePrev, searchMovieNext, searchMoviePrev, searchMovieReset } from '../../actions/ui';
import useForm from '../../hooks/useForm';


function MovieScreen() {

  const {movie,SearchMovie} = useSelector( state => state.ui );
  const dispatch = useDispatch();

  const [formValues,handleInputChange]=useForm({search:''});
  const {search} = formValues;
  
  const [url, setUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=${movie.page}&with_watch_monetization_types=flatrate`)

  
  // const dataSearch= useFetch(`https://api.themoviedb.org/3/search/movie?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en-US&query=${search}&page=1&include_adult=false`);
  
  useEffect(()=>{
    if(search.trim().length>0)
    setUrl(`https://api.themoviedb.org/3/search/movie?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en-US&query=${search}&page=${SearchMovie.page}&include_adult=false`);
    else{
      setUrl(`https://api.themoviedb.org/3/discover/movie?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=${movie.page}&with_watch_monetization_types=flatrate`)
      dispatch(searchMovieReset());
    }
  },[search, movie.page, SearchMovie.page, dispatch])
  
  const data= useFetch(url ) ;

  const handleIncrement=()=>{
    window.scrollTo(0,0);
    dispatch( movieNext() );
  }

  const handleIncrementSearch=()=>{
    window.scrollTo(0,0);
    dispatch( searchMovieNext() );
  }

  const handleDecrement=()=>{
    window.scrollTo(0,0);
    dispatch(moviePrev());
  }

  const handleDecrementSearch=()=>{
    window.scrollTo(0,0);
    dispatch(searchMoviePrev());
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

      <div className=' d-flex justify-content-center my-2'>
        <div className="input-group mb-3">
          <input  type="text" 
                  className="form-control text-white bg-dark" 
                  placeholder="Search movies..."  
                  name='search'
                  value={search}
                  autoComplete='off'
                  onChange={handleInputChange}
                  style={{border:'none',
                          transition: 'border 3s ease-in-out',
                          height:'120%'}}/>
          {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button> */}
        </div>
      </div>

    <h1>Movies</h1>
    <div className="mx-5 " >

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-1">
            
            {
              data.data?.map ( e=> ( <MovieCard key={e.id} {...e} /> ) )
            }

            {/* {
              (search.trim().length>0) 
                ?
                dataSearch.data?.map ( e=> ( <MovieCard key={e.id} {...e} /> ) )
                :
                data.data.map ( e=> ( <MovieCard key={e.id} {...e} /> ) )
            } */}

    </div>
            {
              (search.trim().length<=0) 
            ?
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
            :
              <div className='d-flex justify-content-center'>

                { SearchMovie.page !==1 &&
                <button className='btn btn-outline-light my-5'
                        onClick={handleDecrementSearch}
                >
                  Previous
                </button>
                }
                <button className='btn btn-outline-light disabled my-5 mx-2'
                >
                  {SearchMovie.page}
                </button>

                { SearchMovie.page!== data.total_pages &&
                <button className='btn btn-outline-light my-5 '
                        onClick={handleIncrementSearch}
                >
                  Next
                </button>
                }
              </div>
            }
    </div>

  </div>
  );
}

export default MovieScreen;