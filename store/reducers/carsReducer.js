import { createSlice } from '@reduxjs/toolkit'

const carsSlice = createSlice({
    name:'cars',
    initialState:{
        cars:[]
    },
    reducers:{
        addCars: (state,action) => {
            console.log('reducer called')
            //console.log(`action is ${action }`)
            console.log(action)
            state.cars.concat(action.payload.cars)
            console.log(state)
        }
    }
})

export const addCars = carsSlice.actions.addCars

export const selectAllCars = state => state.cars.cars

export default carsSlice.reducer