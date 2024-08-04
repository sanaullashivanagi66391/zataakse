import { createAsyncThunk } from "@reduxjs/toolkit";
import { items, trendingFood } from "MockData/DummyProductItems";
import { setSearchItemWithTrend } from "Redux/Slices/SearchWithItemOrTrend";


export const fetchTrendingFood= createAsyncThunk(
    'searchWithItemOrTrends/fetchTrendingFood',
    async() => {
        return trendingFood
    }
)

export const fetchSearchedItems = createAsyncThunk(
    'searchWithItemOrTrends/fetchSearchedItems',
    async(value :any , thunkApi) => {

        //@ts-ignore
        const state = thunkApi.getState().searchWithItemOrTrend.searchWithItemOrTrendState;

        thunkApi.dispatch(setSearchItemWithTrend({
            ...state,
            searchValue : value
        }))

        // thunkApi.dispatch(setSearchItemWithTrend(state))
        //   api call using fetch or axios
        return items
    }
)