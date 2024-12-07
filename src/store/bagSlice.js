import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:"bagslice",
    initialState:[],
    reducers:{
        addtobag:(state,action)=>{
            console.log(action.payload)
            state.push(action.payload);
        },
        deletefrombag:(state,action)=>{
            return state.filter(item => item !== action.payload);
        },
    }
});

export const bagAction = bagSlice.actions;

export default bagSlice;