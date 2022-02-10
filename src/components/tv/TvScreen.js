import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTvNext, searchTvPrev, searchTvReset, tvNext, tvPrev } from "../../actions/ui";
import { useFetch } from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import { TvCard } from "./TvCard";

const TvScreen = () => {
    const {tv,SearchTv}= useSelector( state => state.ui );   
    const dispatch = useDispatch();

    const [formValues,handleInputChange]=useForm({search:''});
    const {search} = formValues;

    const [url, setUrl] = useState(`https://api.themoviedb.org/3/discover/tv?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en&sort_by=popularity.desc&page=${tv.page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);

    useEffect(()=>{
        if(search.trim().length>0)
            setUrl(`https://api.themoviedb.org/3/search/tv?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en-US&page=${SearchTv.page}&query=${search}&include_adult=false`);
        else{
            setUrl(`https://api.themoviedb.org/3/discover/tv?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en&sort_by=popularity.desc&page=${tv.page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            dispatch( searchTvReset() );
        }
    },[search, tv.page, SearchTv.page, dispatch])
    
    const data= useFetch(url ) ;

    const handleIncrement = () => {
        window.scrollTo(0, 0);
        dispatch( tvNext() );
    };

    const handleIncrementSearch = () => {
        window.scrollTo(0, 0);
        dispatch( searchTvNext() );
    };

    const handleDecrement = () => {
        window.scrollTo(0, 0);
        dispatch( tvPrev() );
    };

    const handleDecrementSearch = () => {
        window.scrollTo(0, 0);
        dispatch( searchTvPrev() );
    };

    if(data === [] || data === undefined )
        return <div className='d-flex justify-content-center mt-5'>
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden"></span>
                </div>
                </div>
    else
return (
    <div className="container-fluid text-white bg-dark">

        <div className=' d-flex justify-content-center my-2'>
            <div className="input-group mb-3">
            <input  type="text" 
                    className="form-control text-white bg-dark" 
                    placeholder="Search TV series..."  
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

        <h1>TV series</h1>
        <div className="mx-5 ">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-1">
                {
                data.data?.length>0
                ?
                    data.data.map((e) => (
                        <TvCard key={e.id} {...e} />
                    ))
                :
                    <div className='container-fluid d-flex justify-content-center animate__animated animate__fadeIn'>
                        <div className="alert alert-info" role="alert">
                            No results found, try it with other words
                        </div>
                    </div>
                }
            </div>

            {
            data.data?.length>0
            &&
            ((search.trim().length<=0) 
                ?
                <div className="d-flex justify-content-center">
                    {tv.page !== 1 && (
                        <button
                            className="btn btn-outline-light my-5"
                            onClick={handleDecrement}
                        >   
                            Previous
                        </button>
                    )}

                    <button className="btn btn-outline-light disabled my-5 mx-2">
                        {tv.page}
                    </button>

                    {tv.page !== data.total_pages && (
                        <button
                            className="btn btn-outline-light my-5 "
                            onClick={handleIncrement}
                        >
                            Next
                        </button>
                    )}
                </div>
                :

                <div className="d-flex justify-content-center">
                    {SearchTv.page !== 1 && (
                        <button
                            className="btn btn-outline-light my-5"
                            onClick={handleDecrementSearch}
                        >   
                            Previous
                        </button>
                    )}

                    <button className="btn btn-outline-light disabled my-5 mx-2">
                        {SearchTv.page}
                    </button>

                    {SearchTv.page !== data.total_pages && (
                        <button
                            className="btn btn-outline-light my-5 "
                            onClick={handleIncrementSearch}
                        >
                            Next
                        </button>
                    )}
                </div>)
            }
        </div>
    </div>
  );
};

export default TvScreen;
