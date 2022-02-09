
import {useEffect, useRef, useState} from 'react';
import { getMovie} from "../helpers/getMovie";


export const useFetchMovie =(url) => {

    const isMounted = useRef(true); 

    useEffect(() => {    
        return () => {
            isMounted.current=false;
        }
    }, [isMounted]);

    const [movieState, setMovie] = useState({data:[]});
    
    useEffect(()=>{
        getMovie(url)
            .then( movie=> {

                if(isMounted.current){
                    setMovie( {
                        data:movie
                    })
                }

            });
    },[url])

    
    return movieState;


}