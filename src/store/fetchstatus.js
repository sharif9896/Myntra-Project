import {createSlice} from "@reduxjs/toolkit";
import { Default_Items } from "./Demoitems";

const fetchstatus= createSlice({
    name:"fetchstatus",
    initialState:{
        fetchDone:false,
        currentlyfetching:false,
    },
    reducers :{
    markfetchdone:(state)=>{
       state.fetchDone = true;
    },
    markfetchstarted:(state)=>{
        state.currentlyfetching = true;
    },
    markfetchended:(state)=>{
        state.currentlyfetching = false;
    }
}
});

export const fetchingAction = fetchstatus.actions;

export default fetchstatus;