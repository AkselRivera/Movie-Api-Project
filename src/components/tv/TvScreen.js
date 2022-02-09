import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tvNext, tvPrev } from "../../actions/ui";
import { useFetch } from "../../hooks/useFetch";
import { TvCard } from "./TvCard";

const TvScreen = () => {
    const dispatch = useDispatch();
    const {tv}= useSelector( state => state.ui );   

    const data = useFetch(`https://api.themoviedb.org/3/discover/tv?api_key=fd922be3276e0c686293e46cf44f0e9e&language=es&sort_by=popularity.desc&page=${tv.page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
    );

    const handleIncrement = () => {
        window.scrollTo(0, 0);
        dispatch( tvNext() );
    };

    const handleDecrement = () => {
        window.scrollTo(0, 0);
        dispatch( tvPrev() );
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
        <h1>TV series</h1>
        <div className="mx-5 ">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-1">
                {data.data.map((e) => (
                    <TvCard key={e.id} {...e} />
                ))}
            </div>
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
        </div>
    </div>
  );
};

export default TvScreen;
