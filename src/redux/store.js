import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReduser} from "./slices";


const rootReducer = combineReducers({
    cars: carReduser
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}