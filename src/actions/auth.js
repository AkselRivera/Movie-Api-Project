import { firebase, googleAuthProvider } from "../firebase/fireConfig";
import { types } from "../types/type";
import { loadingFinish, logoutUi, startLoading } from "./ui";
import Swal from 'sweetalert2';


export const startRegister = (email,password,name)=>{
    return (dispatch) =>{

    dispatch(startLoading());
    
    return firebase.auth().createUserWithEmailAndPassword(email,password)
    
    .then(async ({user})=>{
        await user.updateProfile({ displayName: name});
        dispatch( login( user ) )
            dispatch(loadingFinish());
        })
        .catch(e =>{
            dispatch(loadingFinish());
            Swal.fire('Ups!',e.message,'error');
        })
    }
}


export const startLogin =(email, password)=>{
    return(dispatch)=>{
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(({user}) =>{
            dispatch(login(user));
            localStorage.setItem('token', user.refreshToken);
            dispatch(loadingFinish());
        }).catch(e=>{
            dispatch(loadingFinish());
            Swal.fire('Ups!',e.message,'error');
        })

    }
}


export const startGoogleLogin=()=>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user})=>{
                    dispatch( login( user) )
                    localStorage.setItem('token', user.refreshToken)
            });

    }
}

const login =(user)=>{
    return{
        type:types.authLogin,
        payload:{
            uid:user.uid,
            name:user.displayName,
            photo:user.photoURL
        }
    }
}


export const startCheckinToken =(token)=>{
    return (dispatch)=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user?.refreshToken===token){
            dispatch(login(user));
            dispatch(loadingFinish());
        }else{
            dispatch(loadingFinish());
        }
    });
    }
}

export const startPasswordEmail =(email)=>{
    return (dispatch)=>{
        dispatch(startLoading())
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            dispatch(loadingFinish());
            Swal.fire('Done!','Password reset email sent','success');
            // ..
        })
        .catch((e) => {
            Swal.fire('Ups!',e.message,'error');
            dispatch( loadingFinish() );
        });

    }

}

export const startLogout = ()=>{

    return async( dispatch)=>{
        localStorage.clear();
        await firebase.auth().signOut();
        dispatch(logOut());
        dispatch(logoutUi());
    }
}

const logOut =()=>({type:types.authLogout });