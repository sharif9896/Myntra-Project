import {configureStore} from "@reduxjs/toolkit";
import Itemslice from "./Itemslice";
import fetchstatus from "./fetchstatus";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
    reducer :{
    items:Itemslice.reducer,
    fetchstatus: fetchstatus.reducer,
    bagSlice: bagSlice.reducer,
    }
});
export default myntraStore;
