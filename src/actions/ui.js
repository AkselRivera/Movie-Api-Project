import { types } from "../types/type"


export const movieNext=()=>({type:types.uiMovieNext});
export const moviePrev=()=>({type:types.uiMoviePrev});

export const tvNext=()=>({type:types.uiTVNext});
export const tvPrev=()=>({type:types.uiTVPrev});

export const startLoading =()=>( {type:types.uiStartLoading});
export const loadingFinish=()=>({type:types.uiFinishLoading });