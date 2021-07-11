import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import  imagesReducer from './images';
import modalImageReducer from "./inModalImage";

const logger = createLogger ({
    diff: true,
    collapsed: true
});

const rootReducer = combineReducers ({
    images: imagesReducer,
    inModalImage: modalImageReducer
})

const store = createStore (rootReducer, applyMiddleware(thunk, logger))

export default store;

