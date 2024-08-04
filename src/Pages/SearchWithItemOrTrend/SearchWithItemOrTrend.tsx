import { useNavigation } from '@react-navigation/native';
import { items, trendingFood } from 'MockData/DummyProductItems';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'Redux/ReduxHooks';
import { fetchSearchedItems, fetchTrendingFood } from 'Redux/ThunkFunctions/searchWithItemOrTrends';

import SearchWithItemOrTrendTemplate from 'Templates/SearchWithItemOrTrend';
import { DashboardStackParamListProp } from 'Types/StackNavigatorParams';

const SearchWithItemOrTrend = () => {
    const navigation = useNavigation<DashboardStackParamListProp>();
    const state = useAppSelector( state => state.searchWithItemOrTrend.searchWithItemOrTrendState)
    const dispatch = useAppDispatch();

    React.useEffect( ()=>{
        fetchTrendingFoodItems()
    },[])

    const fetchTrendingFoodItems = async() => {
        dispatch(fetchTrendingFood())
    }
    const onGoBack = () => {
        navigation.goBack()
    }

    const onSearch = () => {

    }

    const onSearchChange = (text:string) => {
         dispatch(fetchSearchedItems(text))

    }

    const onSelectItem = () => {

    }

    return (
        <SearchWithItemOrTrendTemplate
            // data={items}
            data={state.data}
            onGoBack={onGoBack}
            onSearch={onSearch}
            searchValue={state.searchValue}
            onSearchChange={onSearchChange}
            trends={state.trends} 
            onSelectTrend={onSelectItem} />
    )
}
export default SearchWithItemOrTrend;