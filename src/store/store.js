import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from './root-reducer'
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import logger from "redux-logger";
import thunk from "redux-thunk";


const middleWares = [ process.env.NODE_ENV === 'development' && logger, thunk].filter(Boolean)

const composeEnhanced = (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composeEnhanced(applyMiddleware(...middleWares)) 

const persistConfig = {
    key: 'root',  // start from root level 
    storage,
    whitelist: ['cart'] 
    // blacklist: ['user'] 
}
    

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, undefined, composedEnhancers)
export const persistor = persistStore(store)

// second arg => if u want add additional default state 