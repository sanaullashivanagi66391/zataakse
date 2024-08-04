import { createSlice } from "@reduxjs/toolkit"
import { fetchSearchedItems, fetchTrendingFood } from "Redux/ThunkFunctions/searchWithItemOrTrends"


const initialState:SearchWithItemOrTrendNS.IState = {
    searchWithItemOrTrendState: {
        searchValue : '',
        trends: [],
        isLoading: false,
        hasError: false,
        data : []
    }
}

export const SearchWithItemOrTrend = createSlice({
    name : 'SearchWithItemOrTrend',
    initialState,
    reducers : {
        setSearchItemWithTrend: (state,action) =>{
            return{
                ...state,
                searchWithItemOrTrendState :action.payload
            }
        }

    },
    extraReducers: (builder) => {
      builder.addCase(fetchTrendingFood.fulfilled, (state, action)=>{
        state.searchWithItemOrTrendState.trends = action.payload;
        
      })
      
      builder.addCase(fetchSearchedItems.fulfilled , (state,action)=>{
        state.searchWithItemOrTrendState.data = action.payload;
        state.searchWithItemOrTrendState.isLoading = false;
        state.searchWithItemOrTrendState.hasError = false;
      })
      builder.addCase(fetchSearchedItems.pending , (state,action)=>{
        state.searchWithItemOrTrendState.hasError = false
        state.searchWithItemOrTrendState.isLoading = true
      })
      builder.addCase(fetchSearchedItems.rejected , (state,action)=>{
        state.searchWithItemOrTrendState.hasError = false
        state.searchWithItemOrTrendState.isLoading = false
      })  
    }
})


export const { setSearchItemWithTrend} = SearchWithItemOrTrend.actions;
export default SearchWithItemOrTrend.reducer