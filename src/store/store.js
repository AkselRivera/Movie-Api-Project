import { createStore, compose, applyMiddleware } from "redux";
import { combineReducers } from 'redux';

import { authReducer } from "../reducer/authReducer";
import { uiReducer } from "../reducer/uiReducer";
import thunk from "redux-thunk";

// import { rootReducer } from "../reducers/rootReducer"; //reducer combined

/* rootReducer
    import { uiReducer } from './uiReducer';
*/

    const rootReducer = combineReducers({
        auth: authReducer,
        ui:uiReducer

    })
    

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store= createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);