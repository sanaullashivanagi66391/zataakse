import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export type DashboardStackParamList = {
    App: undefined;
    SelectedProductCategory : undefined;
    SearchWithItemOrTrend : undefined;
}

export type BottomNavigatprParamList = {
    orders: undefined;
    products: undefined;
    overView: undefined;
    profile: undefined;
}


export type bottomBarListProps = BottomTabNavigationProp<BottomNavigatprParamList>
export type DashboardStackParamListProp = StackNavigationProp<DashboardStackParamList>

