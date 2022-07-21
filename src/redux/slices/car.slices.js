import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../servises";


const initialState = {
    cars:[],
    carForUpdate: null,
    errors: null,
    createCar:[]
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e){
            return rejectWithValue((e.response.data))
        }

    }
);
const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}) => {
        const {data} = await carService.updateById(id, car);
        return data
    }
);
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}) => {
        const {data} = await carService.create(car);
        return data
    }
);


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:((state, action) => {
            state.carForUpdate = action.payload
        })
    },
    extraReducers:(builder =>
    builder
        .addCase(getAll.fulfilled, (state, action) =>{
            state.errors = null
        state.cars = action.payload})

        .addCase(getAll.rejected,(state, action) =>{
        state.errors = action.payload})

        .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(currentCar, action.payload);
                state.carForUpdate = null
            }
        )
    )
});
const {reducer:carReduser, actions:{setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById
}
export {carReduser, carActions}
