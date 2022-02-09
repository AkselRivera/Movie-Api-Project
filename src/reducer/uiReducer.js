

import { types } from "../types/type";

// {
//     movie:{
//        page:1
//     },
//     tv:{
//        page:1
//     },
//     logged:true
// }


const initState = {
    movie:{
        page:1
    },
    tv:{
        page:1
    },
    loading:true

}

export const uiReducer=(state=initState, action)=>{

switch (action.type) {
    case types.uiMovieNext:
    return{
        ...state,
        movie:{
            page:state.movie.page+1
        }
    }

    case types.uiMoviePrev:
    return{
        ...state,
        movie:{
            page:state.movie.page-1
        }
    }

    case types.uiTVNext:
    return{
        ...state,
        tv:{
            page:state.tv.page+1
        }
    }

    case types.uiTVPrev:
    return{
        ...state,
        tv:{
            page:state.tv.page-1
        }
    }

    case types.uiStartLoading:
            return{
                ...state,
                loading:true
            }

    case types.uiFinishLoading:
        return{
            ...state,
            loading:false
        }

    default:
    return state;
    }

}