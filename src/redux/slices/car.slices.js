import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../../servises";
import {type} from "@testing-library/user-event/dist/type";


const initialState = {
    cars:[],
    carForUpdate: null,
    errors: null
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
    async ({car},{rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const del = createAsyncThunk(
    'carSlice/delete',
    async ({id},{rejectWithValue}) => {
        try {
            await carService.deleteById(id)
            return id
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);



const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:((state, action) => {
            state.carForUpdate = action.payload
        }),
        addCar:((state, action) => {
            state.createCar = action.payload})
    },
    extraReducers:(builder =>
    builder
        .addCase(getAll.fulfilled, (state, action) =>{
            state.errors = null
        state.cars = action.payload})

        // .addCase(getAll.rejected,(state, action) =>{
        // state.errors = action.payload})

        .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value => value.id === action.payload.id);
                Object.assign(currentCar, action.payload);
                state.carForUpdate = null
            }
        )

        .addCase(del.fulfilled, (state, action) => {
                const index = state.cars.findIndex(car=>car.id === action.payload);
                state.cars.splice(index, 1)

            }
        )
        .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            }
        )

        .addDefaultCase((state, action) => {
            action.type.split('/').splice(-1);
            if (type=== 'rejected'){
                state.errors = action.payload
            }else {
                state.errors = null
            }
        })
    )
});
const {reducer:carReduser, actions:{setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById,
    create,
    del
}
export {carReduser, carActions}
