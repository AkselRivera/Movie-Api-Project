import { types } from "../types/type"

export const movieNext=()=>({type:types.uiMovieNext});
export const moviePrev=()=>({type:types.uiMoviePrev});

export const tvNext=()=>({type:types.uiTVNext});
export const tvPrev=()=>({type:types.uiTVPrev});

export const searchMovieNext=()=>({type:types.uiSearchMovieNext});
export const searchMovieReset=()=>({type:types.uiSearchMovieReset});
export const searchMoviePrev=()=>({type:types.uiSearchMoviePrev});

export const searchTvNext=()=>({type:types.uiSearchTVNext});
export const searchTvReset=()=>({type:types.uiSearchTVReset});
export const searchTvPrev=()=>({type:types.uiSearchTVPrev});

export const logoutUi =()=>( {type:types.uiLogout});

export const startLoading =()=>( {type:types.uiStartLoading});
export const loadingFinish=()=>({type:types.uiFinishLoading });