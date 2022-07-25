import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, carReduser} from "./slices";


const rootReducer = combineReducers({
    cars: carReduser,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}