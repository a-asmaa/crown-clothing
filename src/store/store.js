import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer} from './root-reducer'
import logger from 'redux-logger'



const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares)) 

export const store = createStore(rootReducer, undefined, composedEnhancers)

// second arg => if u want add additional default state 