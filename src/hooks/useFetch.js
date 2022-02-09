
import {useEffect, useRef, useState} from 'react';
import { getMovie} from "../helpers/getMovie";


export const useFetch =(url) => {

    const isMounted = useRef(true);  //Clean up for un- mounted component!

    useEffect(() => {    
        return () => {
            isMounted.current=false;
        }
    }, [isMounted]); //Clean up for un- mounted component!


    const [movieState, setMovie] = useState({data:[]});
    
    useEffect(()=>{

        getMovie(url)
            .then( movie=> {

                if(isMounted.current){ //Clean up for un- mounted component!
                    setMovie( {
                        data:movie.results,
                        total_pages:movie.total_pages
                    })
                } //Clean up for un- mounted component!

            });
    },[url])

    
    return movieState;
}