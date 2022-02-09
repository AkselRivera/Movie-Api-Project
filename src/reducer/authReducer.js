import { types } from "../types/type";

            // {
            //     uid: '12341',
            //     name:'Aksel',
            // logged:true
            // }


const initState = {
    logged:false,

}

export const authReducer=(state=initState, action)=>{

    switch (action.type) {
        case types.authLogin:
            return{
                ...state,
                ...action.payload,
                logged:true
            }

        case types.authLogout:
            return {
                logged:false
            }

        default:
            return state;
    }

}