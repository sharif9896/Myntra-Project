import {createSlice} from "@reduxjs/toolkit";
import { Default_Items } from "./Demoitems";

const Itemslice = createSlice({
    name:"items",
    initialState:[],
    reducers :{
    addinitialitem(state,action){
        return action.payload;
    }
}
});

export const ItemsAction = Itemslice.actions;

export default Itemslice;