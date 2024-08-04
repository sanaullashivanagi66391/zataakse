import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DashboardStackParamList } from 'Types/StackNavigatorParams';
import TabNavigation from './TabNavigation';
import SelectedProductCategory from 'Pages/SelectedProductCategory';
import SearchWithItemOrTrend from 'Pages/SearchWithItemOrTrend';

const Stack = createStackNavigator<DashboardStackParamList>();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#9AC4F8",
                    },
                    headerTintColor: "white",
                    headerBackTitle: "Back",
                }}
            >

                <Stack.Screen
                    name='App'
                    options={{
                        headerShown: false
                    }}
                    component={TabNavigation}
                />
                <Stack.Screen
                    name='SelectedProductCategory'
                    options={{
                        headerShown: false
                    }}
                    component={SelectedProductCategory}
                />
                <Stack.Screen
                    name='SearchWithItemOrTrend'
                    options={{
                        headerShown: false
                    }}
                    component={SearchWithItemOrTrend}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Router