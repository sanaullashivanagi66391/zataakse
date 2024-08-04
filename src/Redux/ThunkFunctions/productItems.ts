import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductItems = createAsyncThunk(
    'fetchProductItems',
   async (params , thunkiApi) =>{

    //dummy code to replicate rest api functionality

    try{
   
    }catch{
        return thunkiApi.rejectWithValue(null);
    }
    }
)